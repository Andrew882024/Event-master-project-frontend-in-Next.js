import React, { useEffect, useState } from "react";
import {UserBookedEventsInfoMyAccount,EventsThatProvidedByTheUserMyAccount} from "../../data/dataForMyAccount";
import { Calendar, Clock, MapPin, Tag } from "lucide-react";
import { serverUrl } from '@/src/data/severUrl';

//type EventBoxProps = { eventInfo: UserBookedEventsInfoMyAccount };
let eventInfo:EventsThatProvidedByTheUserMyAccount[number];

const Event_box_provider_my_account = ({eventInfo}:{eventInfo:EventsThatProvidedByTheUserMyAccount[number]} ) => { 

/////////////////////////////////////////////////Load image from S3//////////////////////////////////////////////////////
const key = eventInfo.event_image;
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

  return <div>
    <div className=" w-[1145px] h-[150px] bg-white rounded-[10px] m-[10px] p-[10px] box-border flex border-[1px] border-gray-300 hover:shadow-lg cursor-pointer">
      <div className=" w-[200px] h-[130px] rounded-[10px] bg-gray-300 flex-shrink-0">
        <img src={src||"/default1.png"} alt="Event Image" className="w-full h-full object-cover rounded-[10px]" />
      </div>
      <div className=" ml-[15px] flex justify-between">
        <div>
          <div className=" text-[16px] mt-[5px] font-bold text-black">{eventInfo.event_title}</div>
          <div className=" text-[14px] text-gray-50 mt-[2px] w-[55px] h-[23px] bg-blue-500 rounded-[5px] flex justify-center ">{eventInfo.event_type}</div>

          <div className=" text-[14px] text-gray-500 mt-[2px]"><Calendar className="inline-block w-[18px] h-[18px] ml-[-3px] mr-[3px] mt-[-3px]"/>{(new Date(eventInfo.event_start_date_and_time)).toLocaleString('en-US', { weekday: 'short' })}, {(new Date(eventInfo.event_start_date_and_time)).toLocaleDateString("en-US", {month: "short"})} {(new Date(eventInfo.event_start_date_and_time)).getDate().toString()} {(new Date(eventInfo.event_start_date_and_time)).toLocaleDateString("en-US", {year: "numeric"})} <Clock className="inline-block w-[18px] h-[18px] ml-[5px] mr-[3px] mt-[-2px]"/>{(new Date(eventInfo.event_start_date_and_time)).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</div>
          <div className=" text-[14px] text-gray-500 mt-[3px]"><MapPin className="inline-block w-[18px] h-[18px] ml-[-3px] mr-[3px] mt-[-2px]"/>{eventInfo.event_location}</div>
          <div className=" text-[14px] text-gray-500 mt-[2px]">Event ID: {eventInfo.event_id}</div>
          
        </div>
        <div className="ml-[40px] mt-[55px]">
          <div className=" text-[14px] text-gray-500 mt-[3px]">Total tickets number: {eventInfo.event_total_ticket_number}</div>
          <div className=" text-[14px] text-gray-500 mt-[3px]">Remaining tickets: {eventInfo.event_remaining_ticket_number} </div>
          <div className=" text-[14px] text-gray-500 mt-[3px]">Tickets booked so far: {eventInfo.event_total_ticket_number-eventInfo.event_remaining_ticket_number}</div>

          
        </div>
      </div>

      
    </div>
  </div>;
};

export default Event_box_provider_my_account;