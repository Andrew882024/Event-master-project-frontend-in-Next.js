"use client"
import { useQuery } from "@tanstack/react-query";
import Control_broad_new from "../../src/component/Control_broad_new";
import {EventInfo, EventInfoList} from "@/src/data/sampleData";
import { EventInfoFromDB } from "@/src/data/dataFromDB";
import Event_box1_db from "@/src/component/small_element/Event_box1_db";
import { fetchEventInfoFromDB } from "@/src/data/dataFromDB";
import { Filter } from "lucide-react";
import { useState } from "react";

const Events_page = () =>{
  const [currentTab, setCurrentTab] = useState("All Events");
  const [currentSelect, setCurrentSelect] = useState("Upcoming Events");

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
  console.log(data);

  const upcomingEvents = data?.filter(event => new Date(event.event_start_date_and_time) >= new Date());
  const historyEvents = data?.filter(event => new Date(event.event_start_date_and_time) < new Date());
  
  return(<div className="absolute top-0 left-0 bg-gray-50 min-h-screen w-screen overflow-x-hidden">
    <Control_broad_new/>
    <title>Events Page</title>
    <div className="absolute top-[70px] min-h-[1000px] w-full bg-gray-50 flex justify-center">
      <div>
        <div className="text-[35px] font-bold text-gray-900 mt-[15px] ml-[20px]">Campus Events</div>
        <div className="text-[15px] text-gray-500 mb-[25px] ml-[20px]">Discover the latest events happening on campus. From workshops to shows, find something that piques your interest!</div>
        {/* filter */}
        <div className="ml-[18px] w-[1180px] h-[150px] bg-gray-100 mt-[10px] mb-[10px] border-[1px] border-gray-300 rounded-[10px] box-border shadow-sm">
        <div className=" mt-[5px] ml-[20px] mb-[0px]"> 
          <Filter className="inline-block w-[20px] h-[20px] mr-[5px] mt-[-7px] text-gray-900"/> 
          <div className="inline-block text-[18px] text-gray-900 font-bold m-[10px]">Events Filter</div>
        </div>
        {/* filter tabs */}
        <div className="mt-[25px] ml-[-5px] flex">
          {/* left part */}
          <div className=" ml-[25px]">
            <div className=" text-[14px] text-gray-500 mb-[0px]">Filter by event type:</div>
            {/* tabs */}
            <ul className="mt-[5px] ml-[5px] mb-[10px] h-[27px] w-[900px] bg-gray-200 rounded-[5px] flex justify-center items-center gap-[5px] border-[1px] border-gray-300 box-border">
                <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[16%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "All Events"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("All Events")}}>All Events</li>
                <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[16%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "WorkShop"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("Workshop")}}>Workshop</li>
                <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[16%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "Show"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("Show")}}>Show</li>
                <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[16%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "Music"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("Music")}}>Music</li>
                <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[16%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "Sports"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("Sports")}}>Sports</li>
                <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[16%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "Others"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("Others")}}>Others</li>             
            </ul>
          </div>
          {/* right part */}
          <div className=" ml-[35px]">
            <div className=" text-[14px] text-gray-500 mb-[0px]">Select:</div>
            <select className=" mt-[5px] w-[200px] h-[27px] bg-gray-200 rounded-[5px] text-gray-900 text-[14px] border-[1px] outline-none border-gray-300 box-border cursor-pointer" onChange={(e)=>{setCurrentSelect(e.target.value),console.log(e.target.value)}}>
              <option value="Upcoming Events">Upcoming Events</option>
              <option value="History Events">History Events</option>
            </select>
          </div>
        </div>
    </div>

      {/* show events */}
      <div className=" w-[1250px] bg-gray-50 rounded-[20px] box-border">
      <div className="  m-[10px]">
        {/* <div className="text-[15px] text-gray-500 ">{currentSelect}:</div> */}
        <div className=" flex flex-wrap">
        {currentSelect === "Upcoming Events" && (
          <>
          {currentTab === "All Events" && upcomingEvents?.reverse().map((post: EventInfoFromDB | undefined) => {
            if (!post) return null;
            return (<Event_box1_db InPageEventInfor={post} key={post.id} />);
          })}

          {/* Example for filtered events, adjust filter logic as needed */}
          {((currentTab != "All Events")&&currentTab != "Other") && upcomingEvents?.reverse().filter(p => (p.event_type ?? "").trim() === currentTab).toReversed().map((post) => {
            return (<Event_box1_db InPageEventInfor={post} key={post.id} />);
          })}

          {(currentTab === "Others") && upcomingEvents?.reverse().filter(p => !["workshop","show","music","sports"].includes((p.event_type ?? "").trim().toLowerCase())).toReversed().map((post) => {
            return (<Event_box1_db InPageEventInfor={post} key={post.id} />);
          })}
          
          </>
        )}

        {currentSelect === "History Events" && (
          <>
          {currentTab === "All Events" && historyEvents?.map((post: EventInfoFromDB | undefined) => {
            if (!post) return null;
            return (<Event_box1_db InPageEventInfor={post} key={post.id} />);
          })}

          {/* Example for filtered events, adjust filter logic as needed */}
          {((currentTab != "All Events")&&currentTab != "Other") && historyEvents?.filter(p => (p.event_type ?? "").trim() === currentTab).toReversed().map((post) => {
            return (<Event_box1_db InPageEventInfor={post} key={post.id} />);
          })}

          {(currentTab === "Others") && historyEvents?.filter(p => !["workshop","show","music","sports"].includes((p.event_type ?? "").trim().toLowerCase())).toReversed().map((post) => {
            return (<Event_box1_db InPageEventInfor={post} key={post.id} />);
          })}
          
          </>
        )}
          
        </div>
      </div>
      {/* <div className="  m-[10px] mt-[30px]">
        <div className="text-[15px] text-gray-500 ">Event in current month:</div>
        <div className=" flex flex-wrap">
          
        </div>
      </div>
      <div className="  m-[10px] mt-[30px]">
        <div className="text-[15px] text-gray-500 ">Event later:</div>
        <div className=" flex flex-wrap">
          
        </div>
      </div> */}
      </div>
    </div>
    </div>
  </div>);
}

export default Events_page;