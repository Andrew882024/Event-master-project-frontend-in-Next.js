"use client";

import { EventInfo } from "@/src/data/sampleData";
import { InPageEventInforDefault } from "@/src/data/sampleData";
import { useRouter } from 'next/navigation';




let InPageEventInfor:EventInfo;



const Event_box1 = ({InPageEventInfor = InPageEventInforDefault}:{InPageEventInfor?:EventInfo} ) => {

  const navigate = useRouter();

  function loadPage(root: string) {
    navigate.push(root);
  }

  const eventInfor: any = {
    eventName: InPageEventInfor.title,
    eventDate: `${InPageEventInfor.month} ${InPageEventInfor.dayOfMonth} ${InPageEventInfor.dayOfWeek}, ${InPageEventInfor.startTime}`,
    eventType: InPageEventInfor.type,
    eventImage: InPageEventInfor.imageUrl, 

    eventProvider: InPageEventInfor.provider,
    eventLocation: InPageEventInfor.location,
  };

  

  return(
    <div className="group w-[280px] h-[350px]  overflow-hidden rounded-[20px] m-[10px] bg-white transition duration-200 ease-in-out  cursor-pointer hover:shadow-lg" onClick={()=>{loadPage(`/Eventdetail_page/${InPageEventInfor.eventId}`)}}>
      <div className="w-[95%] h-[175px] ml-[2.5%] mt-[2.5%] overflow-hidden rounded-[15px]">
        <img src={eventInfor.eventImage} className="mt-[2px] w-full h-full object-cover  transition duration-200 ease-in-out group-hover:scale-105"/> 
      </div>
      <div className="ml-[3%] mt-[10px] w-[90%] h-[175px] ">
        <div className="text-gray-900 text-[15px] font-Nunito font-bold h-[44px]">{eventInfor.eventName}</div>

        <div className="text-gray-600 text-[13px] font-Nunito h-[20px] overflow-hidden">{`By: ${eventInfor.eventProvider}`}</div>
        <div className="text-gray-600 text-[13px] font-Nunito h-[40px] overflow-hidden">{`At: ${eventInfor.eventLocation}`}</div>

        <div className="h-[44px] relative mt-[5px]">
          <div className="text-gray-600 text-lg font-Nunito h-[100%] inline-block">{eventInfor.eventDate}</div>
          <div className="text-orange-400 text-lg font-Nunito h-[100%] inline-block absolute right-0 top-0">{eventInfor.eventType}</div>
        </div>
      </div>
    </div>
  );
}

export default Event_box1;