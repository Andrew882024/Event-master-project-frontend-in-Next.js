"use client";

import { EventInfo } from "@/src/data/sampleData";
import { InPageEventInforDefault } from "@/src/data/sampleData";
import { useRouter } from 'next/navigation';
import { EventInfoFromDB, EventInfoFromDBDefault } from "@/src/data/dataFromDB";
import React, { useEffect, useState } from "react";
import { serverUrl } from "@/src/data/severUrl";


let InPageEventInfor:EventInfoFromDB;

type eventInfoType = {
  eventName: string;
  eventDate: string;
  eventType: string;
  eventImage: string;
  eventProvider: string;
  eventLocation: string;
}



const Event_box1_db = ({InPageEventInfor = EventInfoFromDBDefault}:{InPageEventInfor?:EventInfoFromDB} ) => {

  const navigate = useRouter();

  function loadPage(root: string) {
    navigate.push(root);
  }

  const eventInfor: eventInfoType = {
    eventName: InPageEventInfor.event_title,
    eventDate: `${InPageEventInfor.event_start_date_and_time.toLocaleDateString("en-US", {month: "short"}).toUpperCase()} ${InPageEventInfor.event_start_date_and_time.getDate().toString()} ${InPageEventInfor.event_start_date_and_time.toLocaleString('en-US', { weekday: 'short' }).toUpperCase()} ${InPageEventInfor.event_start_date_and_time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}`,
    eventType: InPageEventInfor.event_type,
    eventImage: InPageEventInfor.event_imageUrl, 

    eventProvider: InPageEventInfor.showed_event_provider_name,
    eventLocation: InPageEventInfor.event_location,
  };

/////////////////////////////////////////////////Load image from S3//////////////////////////////////////////////////////
const key = eventInfor.eventImage;
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_BASE ?? serverUrl;
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
///////////////////////////////////////////////////////////////////////////////////////////////////



  return(
    <div className="group w-[280px] h-[350px]  overflow-hidden rounded-[20px] m-[10px] transition duration-200 ease-in-out bg-gray-100 border-[1px] border-gray-400 box-border  cursor-pointer hover:shadow-lg shadow-gray-400"  onClick={()=>{loadPage(`/Eventdetail_page/${InPageEventInfor.id}`)}}>
      <div className="w-[95%] h-[175px] ml-[2.5%] mt-[2.5%] overflow-hidden rounded-[15px]">
        <img src={src||"/default1.png"} className="mt-[2px] w-full h-full object-cover  transition duration-200 ease-in-out group-hover:scale-105"/> 
      </div>
      <div className="ml-[3%] mt-[10px] w-[90%] h-[175px] ">
        <div className="text-gray-900 text-[15px] font-Nunito font-bold h-[44px]">{eventInfor.eventName}</div>

        <div className="text-gray-600 text-[13px] font-Nunito h-[20px] overflow-hidden">{`By: ${eventInfor.eventProvider}`}</div>
        <div className="text-gray-600 text-[13px] font-Nunito h-[40px] overflow-hidden">{`At: ${eventInfor.eventLocation}`}</div>

        <div className="h-[44px] relative mt-[5px]">
          <div className="text-gray-600 text-lg font-Nunito h-[100%] inline-block">{eventInfor.eventDate}</div>
          <div className="text-blue-500 text-lg font-Nunito h-[100%] inline-block absolute right-0 top-0">{eventInfor.eventType}</div>
        </div>
      </div>
    </div>
  );
}

export default Event_box1_db;