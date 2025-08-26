import Control_broad from "../../src/component/Control_broad";
import { EventInfo } from "@/src/data/sampleData";
import { InPageEventInforDefault } from "@/src/data/sampleData";

//style={{backgroundImage: "url('/UCSD_1.webp')", backgroundSize: 'cover'}}



const Eventdetail_page = ({eventInfor = InPageEventInforDefault}:{eventInfor?:EventInfo}) =>{
  return(
    <div className="absolute top-0 left-0 bg-gray-50 min-h-screen w-screen overflow-x-hidden" >
      <Control_broad/>
      <title>Event Detail Page</title>
      <div className="absolute top-[115px] min-h-[1000px] w-full bg-gray-200">
        <div className="flex justify-center w-full">
          <div className="mt-[10px] w-[1160px] min-h-[490px]  flex justify-center">
            <div className="absolute w-[1150px] h-[490px] ded-[10px]  text-black rounded-[10px]" style={{ backgroundColor: '#d8ffd8' }}>
              <div className="absolute left-[2px] top-[0px] inline-block w-[570px] h-[490px] ">
                <div className="ml-[30px] mt-[85px]  pl-[10px] pr-[10px] w-[500px] h-[250px] text-black text-[45px]  font-Nunito flex items-center justify-center">{eventInfor.title}</div>
                <div className="ml-[35px] mt-[0px] h-[20px] pl-[5px] pr-[10px] w-[500px] text-gray-600 text-[15px] ">{`Start at: ${eventInfor.month} ${eventInfor.dayOfMonth} ${eventInfor.dayOfWeek}, ${eventInfor.startTime}`}</div>
                <div className="ml-[35px] mt-[0px] h-[20px] pl-[5px] pr-[10px] w-[500px] text-gray-600 text-[15px] ">{`By: ${eventInfor.provider}`}</div>
              </div>
              
              {/* right part image*/}
              <div className="absolute right-[0px] top-[0px] inline-flex w-[570px] h-[490px]  items-center justify-center ">
                <img src={eventInfor.imageUrl} className="w-[490px] h-[290px] object-cover rounded-[10px]"/>
              </div>
            </div>
          </div>
          </div>
          <div className="flex justify-center w-full">
          <div className=" mt-[20px] w-[1200px] min-h-[800px]  flex justify-center">
            {/*left part*/}
            <div className=" w-[690px] min-h-[800px] mr-[50px]">
              <div className="text-blue-900 text-[35px] font-Nunito">About</div>
              <div className="text-gray-600 text-[15px] ml-[20px] mt-[10px]">{eventInfor.description}</div>
            </div>
            {/*right part*/}
            <div className=" w-[400px] min-h-[800px] ">
              <div className=" w-[100%] min-h-[300px]">
                <div className="text-blue-900 text-[35px] font-Nunito">Event details</div>

                {/*Date&time*/}
                <div className="text-gray-800 text-[18px] font-bold ml-[20px] mt-[10px]">Date&time:</div>
                <div className="text-gray-600 text-[15px] font-Nunito ml-[25px] mt-[0px] w-[350px] ">{`${eventInfor.date} (${eventInfor.month} ${eventInfor.dayOfMonth} ${eventInfor.dayOfWeek}) `}</div>
                <div className="text-gray-600 text-[15px] font-Nunito ml-[25px] mt-[0px] w-[350px] ">{`time:${eventInfor.time}`}</div>

                {/*Location*/}
                <div className="text-gray-800 text-[18px] font-bold ml-[20px] mt-[10px]">Location:</div>
                <div className="text-gray-600 text-[15px] font-Nunito ml-[25px] mt-[0px] w-[350px] ">{eventInfor.location}</div>

                {/*Provider*/}
                <div className="text-gray-800 text-[18px] font-bold ml-[20px] mt-[10px]">Provider:</div>
                <div className="text-gray-600 text-[15px] font-Nunito ml-[25px] mt-[0px] w-[350px]  mb-[35px]">{eventInfor.provider}</div>
              </div>
              <div className=" w-[100%] ">
                <div className="text-gray-600 text-[18px] ml-[20px] font-Nunito">Total seats: 250</div>
                <div className="text-gray-600 text-[18px] ml-[20px] font-Nunito">Available seats: 136</div>
                <div className=" w-[300px] h-[60px] text-[21px] rounded-[15px] flex items-center justify-center  font-bold cursor-pointer bg-[#ffcd00] text-[#05618c] hover:shadow-lg transition duration-200 ease-in-out mt-[15px]" >Sign Up A Seet</div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
);
}

export default Eventdetail_page;