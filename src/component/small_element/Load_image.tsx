"use client";
import React, { useEffect, useState } from "react";

export default function LoadImage() {
  const key = "d4029c087f39b7215bede3cb55eb4554.jpg";
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8000";
    const url = `${base}/images/url?key=${encodeURIComponent(key)}&ttl=36000`;

    const fetchImage = async () => {
      try {
        // Check if we already have a cached URL in localStorage
        const cached = localStorage.getItem(`img:${key}`);
        if (cached) {
          const { url: cachedUrl, expiresAt } = JSON.parse(cached);
          const now = Date.now() / 1000;
          if (expiresAt && expiresAt > now + 60) {
            setSrc(cachedUrl);
            return; // ✅ reuse presigned URL
          }
        }

        // Otherwise fetch a new presigned URL
        const res = await fetch(url);
        if (!res.ok) throw new Error("presign failed");
        const data = await res.json();

        // Assume backend returns { url, expiresAt } (expiresAt = epoch seconds)
        setSrc(data.url);
        localStorage.setItem(`img:${key}`, JSON.stringify(data));
      } catch (err) {
        console.error(err);
      }
    };

    fetchImage();
  }, [key]);

  return (
    <div>
      <div className="text-[30px] text-blue-600">Load image from S3</div>
      <img
        className="w-[100px] h-[200px]"
        src={src || "/UCSD_1.webp"}
        alt="event"
      />
      {/* <div className="text-black">{src}</div> */}
    </div>
  );
}