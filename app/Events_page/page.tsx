"use client"
import { useQuery } from "@tanstack/react-query";
import Control_broad from "../../src/component/Control_broad";
import Event_box1 from "../../src/component/small_element/Event_box1";
import {EventInfo, EventInfoList} from "@/src/data/sampleData";
import { EventInfoFromDB } from "@/src/data/dataFromDB";
import Event_box1_db from "@/src/component/small_element/Event_box1_db";
import { fetchEventInfoFromDB } from "@/src/data/dataFromDB";

const Events_page = () =>{

  const {data, error,isLoading, isError} = useQuery<EventInfoFromDB[]>({
    queryKey: ['EventInfoFromDB'],
    queryFn: fetchEventInfoFromDB,
    staleTime: 60 * 60 * 1000, // 1 hour
    refetchInterval: 60 * 60 * 1000, // 1 hour
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  console.log(EventInfoList[1]);
  
  return(<div className="absolute top-0 left-0 bg-gray-100 min-h-screen w-screen" style={{backgroundImage: "url('/UCSD_1.webp')", backgroundSize: 'cover'}}>
    <Control_broad/>
    <title>Events Page</title>
    <div className="absolute top-[115px] min-h-[1000px] w-full bg-gray-100 flex justify-center">
      <div>
      <div className=" text-gray-500 text-[20px] font-Nunito mt-[10px]">
            <div className="inline-block m-2 cursor-pointer text-black pt-[2px] pb-[4px] pl-[10px]  pr-[10px] border-[1px] border-gray-500 rounded-[20px] hover:bg-blue-500 hover:text-white hover:border-blue-600" >All Events</div>
            <div className="inline-block m-2 cursor-pointer text-black pt-[2px] pb-[4px] pl-[10px]  pr-[10px] border-[1px] border-gray-500 rounded-[20px] hover:bg-blue-500 hover:text-white hover:border-blue-600" >Work Shop</div>
            <div className="inline-block m-2 cursor-pointer text-black pt-[2px] pb-[4px] pl-[10px]  pr-[10px] border-[1px] border-gray-500 rounded-[20px] hover:bg-blue-500 hover:text-white hover:border-blue-600" >Show</div>
            <div className="inline-block m-2 cursor-pointer text-black pt-[2px] pb-[4px] pl-[10px]  pr-[10px] border-[1px] border-gray-500 rounded-[20px] hover:bg-blue-500 hover:text-white hover:border-blue-600" >Fun Activities</div>
      </div>
      <div className=" w-[1250px] bg-gray-100 rounded-[20px] box-border">
      <div className="  m-[10px]">
        <div className="text-[15px] text-gray-500 ">Event in this week:</div>
        <div className=" flex flex-wrap">
          {/* {EventInfoList.map(EventInfo=>{
            return(<Event_box1 InPageEventInfor={EventInfo} key={EventInfo.eventId}/>);
          })} */}
          {data?.map((post) => {
            return(<Event_box1_db InPageEventInfor={post} key={post.id}/>);
            // <div key = {post.id} className="text-black">{post.id}</div>
          } )}
          <Event_box1_db />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
        </div>
      </div>
      <div className="  m-[10px] mt-[30px]">
        <div className="text-[15px] text-gray-500 ">Event in current month:</div>
        <div className=" flex flex-wrap">
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
        </div>
      </div>
      <div className="  m-[10px] mt-[30px]">
        <div className="text-[15px] text-gray-500 ">Event later:</div>
        <div className=" flex flex-wrap">
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
          <Event_box1 />
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>);
}

export default Events_page;