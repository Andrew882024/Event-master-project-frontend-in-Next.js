"use client";
import { EventInfoFromDB, EventInfoFromDBDefault, fetchEventInfoFromDB } from "@/src/data/dataFromDB";
import Control_broad from "../../src/component/Control_broad";
import { EventInfo } from "@/src/data/sampleData";
import { InPageEventInforDefault, EventInfoList} from "@/src/data/sampleData";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

//style={{backgroundImage: "url('/UCSD_1.webp')", backgroundSize: 'cover'}}



export const Eventdetail_page = ({eventInfor = EventInfoFromDBDefault}:{eventInfor?:EventInfoFromDB}) =>{

  const {data, error,isLoading, isError} = useQuery<EventInfoFromDB[]>({
    queryKey: ['EventInfoFromDB'],
    queryFn: fetchEventInfoFromDB,
    staleTime: 60 * 60 * 1000, // 1 hour
    refetchInterval: 60 * 60 * 1000, // 1 hour
  });

/////////////////////////////////////////////////Load image from S3//////////////////////////////////////////////////////
const key = eventInfor.event_imageUrl;
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


  return(
    <div className="absolute top-0 left-0 bg-gray-50 min-h-screen w-full" >
      <div className="ml-[16px]"><Control_broad/></div>
      <title>Event Detail Page</title>
      <div className="absolute top-[115px] min-h-[1000px] w-full bg-gray-200">
        <div className="flex justify-center w-full">
          <div className="mt-[10px] w-[1160px] min-h-[490px]  flex justify-center">
            <div className="absolute w-[1150px] h-[490px] ded-[10px]  text-black rounded-[10px]" style={{ backgroundColor: '#d8ffd8' }}>
              <div className="absolute left-[2px] top-[0px] inline-block w-[570px] h-[490px] ">
                <div className="ml-[30px] mt-[85px]  pl-[10px] pr-[10px] w-[500px] h-[250px] text-black text-[45px]  font-Nunito flex items-center">{eventInfor.event_title}</div>
                <div className="ml-[35px] mt-[0px] h-[20px] pl-[5px] pr-[10px] w-[500px] text-gray-600 text-[15px] ">{`Start at: ${eventInfor.event_start_date_and_time.toLocaleString('en-US', { month: 'short' }).toUpperCase()} ${eventInfor.event_start_date_and_time.getDate().toString()} ${eventInfor.event_start_date_and_time.toLocaleString('en-US', { weekday: 'short' }).toUpperCase()}, ${eventInfor.event_start_date_and_time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}`}</div>
                <div className="ml-[35px] mt-[0px] h-[20px] pl-[5px] pr-[10px] w-[500px] text-gray-600 text-[15px] ">{`By: ${eventInfor.showed_event_provider_name}`}</div>
              </div>
              
              {/* right part image*/}
              <div className="absolute right-[0px] top-[0px] inline-flex w-[570px] h-[490px]  items-center justify-center ">
                <img src={src||"default1.png"} className="w-[490px] h-[290px] object-cover rounded-[10px]"/>
              </div>
            </div>
          </div>
          </div>
          <div className="flex justify-center w-full">
          <div className=" mt-[20px] w-[1200px] min-h-[800px]  flex justify-center">
            {/*left part*/}
            <div className=" w-[690px] min-h-[800px] mr-[50px]">
              <div className="text-blue-900 text-[35px] font-Nunito">About</div>
              <div className="text-gray-600 text-[15px] ml-[20px] mt-[10px]">{eventInfor.event_description}</div>
            </div>
            {/*right part*/}
            <div className=" w-[400px] min-h-[800px] ">
              <div className=" w-[100%] min-h-[300px]">
                <div className="text-blue-900 text-[35px] font-Nunito">Event details</div>

                {/*Date&time*/}
                <div className="text-gray-800 text-[18px] font-bold ml-[20px] mt-[10px]">Date&time:</div>
                <div className="text-gray-600 text-[15px] font-Nunito ml-[25px] mt-[0px] w-[350px] ">{`${new Intl.DateTimeFormat('en-CA',{year:'numeric',month:'2-digit',day:'2-digit'}).format(eventInfor.event_start_date_and_time)} (${eventInfor.event_start_date_and_time.toLocaleString('en-US', { month: 'short' }).toUpperCase()} ${eventInfor.event_start_date_and_time.getDate().toString()} ${eventInfor.event_start_date_and_time.toLocaleString('en-US', { weekday: 'short' }).toUpperCase()}) `}</div>
                <div className="text-gray-600 text-[15px] font-Nunito ml-[25px] mt-[0px] w-[350px] ">{`time:${eventInfor.event_start_date_and_time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}-${new Date(eventInfor.event_start_date_and_time.getTime() + eventInfor.event_duration_in_minutes * 60_000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}}`}</div>

                {/*Location*/}
                <div className="text-gray-800 text-[18px] font-bold ml-[20px] mt-[10px]">Location:</div>
                <div className="text-gray-600 text-[15px] font-Nunito ml-[25px] mt-[0px] w-[350px] ">{eventInfor.event_location}</div>

                {/*Provider*/}
                <div className="text-gray-800 text-[18px] font-bold ml-[20px] mt-[10px]">Provider:</div>
                <div className="text-gray-600 text-[15px] font-Nunito ml-[25px] mt-[0px] w-[350px]  mb-[35px]">{eventInfor.showed_event_provider_name}</div>
              </div>
              <div className=" w-[100%] ">
                <div className="text-gray-600 text-[18px] ml-[20px] font-Nunito">{`Total seats: ${eventInfor.event_total_ticket_number}`}</div>
                <div className="text-gray-600 text-[18px] ml-[20px] font-Nunito">{`Available seats: ${eventInfor.event_remaining_ticket_number}`}</div>
                <div className=" w-[300px] h-[60px] text-[21px] rounded-[15px] flex items-center justify-center  font-bold cursor-pointer bg-[#ffcd00] text-[#05618c] hover:shadow-lg transition duration-200 ease-in-out mt-[15px]" onClick={()=>alert(`the event id is:${eventInfor.id}`)}>Join Event</div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
);
}

export default Eventdetail_page;