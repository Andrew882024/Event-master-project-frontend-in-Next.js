"use client";
import { useRouter } from 'next/navigation';
import { EventInfoFromDB, EventInfoFromDBDefault } from "@/src/data/dataFromDB";
import React, { useEffect, useState } from "react";
import { Calendar, MapPinIcon } from "lucide-react";


let InPageEventInfor:EventInfoFromDB;

type eventInfoType = {
  eventName: string;
  eventDate: string;
  eventType: string;
  eventImage: string;
  eventProvider: string;
  eventLocation: string;
}



const Event_box_big_home = ({InPageEventInfor = EventInfoFromDBDefault}:{InPageEventInfor?:EventInfoFromDB} ) => {

  const navigate = useRouter();

  function loadPage(root: string) {
    navigate.push(root);
  }

  const eventInfor: eventInfoType = {
    eventName: InPageEventInfor.event_title,
    eventDate: `${InPageEventInfor.event_start_date_and_time.toLocaleString('en-US', { weekday: 'short' })}, ${InPageEventInfor.event_start_date_and_time.toLocaleDateString("en-US", {month: "short"})} ${InPageEventInfor.event_start_date_and_time.getDate().toString()} `,
    eventType: InPageEventInfor.event_type,
    eventImage: InPageEventInfor.event_imageUrl, 

    eventProvider: InPageEventInfor.showed_event_provider_name,
    eventLocation: InPageEventInfor.event_location,
  };

/////////////////////////////////////////////////Load image from S3//////////////////////////////////////////////////////
const key = eventInfor.eventImage;
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
///////////////////////////////////////////////////////////////////////////////////////////////////



  return(<div>
    <div className="absolute w-[800px] h-[520px] bg-gray-100 rounded-[10px] m-[10px] items-center box-border flex border-[1px] border-gray-300 group cursor-pointer" onClick={()=>{loadPage(`/Eventdetail_page/${InPageEventInfor.id}`)}}>

        <div className=" w-full h-[480px] flex-shrink-0 overflow-hidden">
          <img src={src||"/default1.png"} alt="Event Image" className="w-full h-full transition-transform duration-300 object-cover ease-in-out group-hover:scale-105 " />
        </div>

        <div className="absolute left-[10px] bottom-[20px] h-[80px] w-[500px]">
          <div className=" text-[30px] font-bold text-white ml-[10px]">{eventInfor.eventName}</div>
          <div className="flex">
            <div className=" text-[16px] text-white mt-[2px] ml-[10px] inline-flex">
              <Calendar className="mt-[3px] w-[25px] h-[16px]"></Calendar>
              {eventInfor.eventDate}
            </div>
            <div className=" text-[16px] text-white mt-[2px] ml-[10px] inline-flex">
              <MapPinIcon className="mt-[3px] w-[25px] h-[16px]"></MapPinIcon> 
              {eventInfor.eventLocation}
            </div>
          </div>
        </div>
      
      
    </div>
  </div>);
}


export default Event_box_big_home;

