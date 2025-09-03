"use client";
import React, { useEffect, useState } from 'react';

export default function LoadImage() {
  const key = "d4029c087f39b7215bede3cb55eb4554.jpg";
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8000";
    const url = `${base}/images/url?key=${encodeURIComponent(key)}&ttl=3600`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("presign failed");
        return res.json();
      })
      .then((data) => setSrc(data.url))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="text-[30px] text-blue-600">Load image from S3</div>
      <img className="w-[100px] h-[200px]" src={src || "/UCSD_1.webp"} alt="event" />
    </div>
  );
}