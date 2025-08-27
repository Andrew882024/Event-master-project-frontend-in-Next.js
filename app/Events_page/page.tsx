import Control_broad from "../../src/component/Control_broad";
import Event_box1 from "../../src/component/small_element/Event_box1";
import {EventInfo, EventInfoList} from "@/src/data/sampleData";

const Events_page = () =>{

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
          {EventInfoList.map(EventInfo=>{
            return(<Event_box1 InPageEventInfor={EventInfo} key={EventInfo.eventId}/>);
          })}
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