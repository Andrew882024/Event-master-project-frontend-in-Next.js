import Image from "next/image";

import Text_image_card from "../src/component/Text_image_card";
import Text_image_card2 from "../src/component/Text_image_card2";
import Control_broad_new from "@/src/component/Control_broad_new";
import Link from "next/link";




const Index_page = () => {
  return(<div className="absolute top-0 left-0 bg-gray-50 min-h-screen w-screen overflow-x-hidden">
    <Control_broad_new/>
    <div className="absolute top-[70px] left-0 w-screen bg-gray-50 bg-opacity-90">
      <title>Home Page</title>
      <div className=" mt-[50px] flex flex-col items-center justify-center">
        <div className="flex">
          <div className='text-[55px] font-bold text-gray-900'>Event</div>
          <div className='text-[55px] font-bold text-blue-500 ml-[10px] mr-[10px]'>Master</div>
        </div>
        <div className='text-[20px] text-gray-600'>Discover and book amazing events with ease. Your gateway to unforgettable experiences.</div>
        <div className='text-[20px] text-gray-600 mb-[20px]'>Explore events, manage bookings, and create your own events seamlessly.</div>
        <div className="flex ">  
          <Link href="/Events_page" className="inline-flex bg-blue-500 hover:bg-blue-600 duration-200 ease-in-out text-white text-[18px] justify-center items-center px-[10px] py-[7px] rounded-[5px] cursor-pointer">
            <button className="cursor-pointer">Browse Events</button>
          </Link>
          <Link href="/SignIn_page" className="inline-flex bg-gray-50 hover:bg-gray-100 hover:shadow-md duration-200 ease-in-out border-gray-400 border-[1px] text-black text-[18px] justify-center items-center px-[20px] py-[7px] rounded-[5px] ml-[20px] cursor-pointer">
            <button className="cursor-pointer">Sign In</button>
          </Link>
        </div>
        <div className="h-[3px] w-[200px] bg-gray-300 mt-[30px] mb-[30px] rounded-full"></div>
      </div>
      <div className="text-center text-[25px] font-bold text-gray-900">Upcoming Events</div>
      <div className="text-center text-[15px] text-gray-600 mb-[20px]">Don't miss out on these popular events happening soon on campus</div>
      {/* text image card */}
      
      <Text_image_card />
      <Text_image_card2 />

      <div className="w-full h-[200px] bg-blue-50 mt-[50px] flex flex-col items-center justify-center">
        <div className="text-[28px] font-bold text-gray-900 mb-[10px]">Ready to Host Your Own Event?</div>
        <div className="text-[18px] text-gray-500 mb-[20px]">Join our community of event organizers and share your passion with others.</div>
        <Link href="/SignUp_page" className="inline-flex bg-blue-500 hover:bg-blue-600 duration-200 ease-in-out text-white text-[18px] justify-center items-center px-[20px] py-[7px] rounded-[5px] cursor-pointer">
          <button className="cursor-pointer">Upload Events</button>
        </Link>
    </div>
    </div>
    
  </div>);
}

export default Index_page;