"use client"

import { serverUrl } from "@/src/data/severUrl";
import Control_broad_new from "@/src/component/Control_broad_new";
import {useState, useEffect} from "react";
import { User, Mail, Hash, Shield, Calendar, Clock, MapPin, Users, Edit3, Trash2, Eye, Settings } from "lucide-react"



type UserInfo = {
  id: number;
  user_name: string;
  email: string;
  created_at: Date;
  roles: string[];
}

type UserBookedEventsInfo = {
  booking_id: number;
  event_description: string;
  event_id: number;
  event_image: string;
  event_lasting_time: number;
  event_location: string;
  event_provider_id: number;
  event_start_date_and_time: Date;
  event_title: string;
  event_type: string;
  number_of_tickets_booked: number;
  ticket_code: string;
}[]

type EventsThatProvidedByTheUser = {
  event_description: string;
  event_id: number;
  event_image: string;
  event_lasting_time: number;
  event_location: string;
  event_provider_id: number;
  event_start_date_and_time: Date;
  event_title: string;
  event_type: string;
  event_total_ticket_number: number;
  event_remaining_ticket_number: number;
}[]


const MyAccount_page = () =>{
  const [currentTab, setCurrentTab] = useState<string>("Profile");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [userBookedEventsInfo, setUserBookedEventsInfo] = useState<UserBookedEventsInfo>([]);
  const [eventsThatProvidedByTheUser, setEventsThatProvidedByTheUser] = useState<EventsThatProvidedByTheUser>([]);

  // const jwtInfo = JSON.parse(localStorage.getItem("JWT_access_token_Info")||"");
  // const user_id:number = jwtInfo.user.user_id;

  //   const jwtInfo =
  //   typeof window !== "undefined"
  //     ? (() => {
  //         try {
  //           const raw = window.localStorage.getItem("JWT_access_token_Info");
  //           return raw ? JSON.parse(raw) : null;
  //         } catch {
  //           return null;
  //         }
  //       })()
  //     : null;

  // const user_id: number | null = jwtInfo?.user?.user_id ?? null;

  //   if(jwtInfo === null || jwtInfo === undefined){
  //     return(
  //       <div className="abosolute top-0 left-0 w-screen h-screen bg-gray-200 flex justify-center items-center">
  //         <div className="text-black text-3xl">You are not signed in, please sign in first</div>
  //       </div>
  //     );
  //   }
  
useEffect(() => {
  const jwtInfo = JSON.parse(localStorage.getItem("JWT_access_token_Info")||"");
  const user_id:number = jwtInfo.user.user_id;

  const getUserInfo = async() =>{
    const res = await fetch(serverUrl+`/getUserInfo/${user_id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtInfo.access_token}`,
      },
    })
    const output = await res.json();
    console.log("getUserInfo:");
    console.log(output);
    setUserInfo(output);
    };

    const getUserBookedEventsInfo = async() =>{
      const res = await fetch(serverUrl+`/getUserBookedEventsInfo/${user_id}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtInfo.access_token}`,
        },
      })
      const output = await res.json();
      console.log("getUserBookedEventsInfo:");
      console.log(output);
      setUserBookedEventsInfo(output);
    };

    const getEventsThatProvidedByTheUser = async() =>{
      const res = await fetch(serverUrl+`/getEventsThatProvidedByTheUser/${user_id}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtInfo.access_token}`,
        },
      })
      const output = await res.json();
      console.log("getEventsThatProvidedByTheUser:");
      console.log(output);
      setEventsThatProvidedByTheUser(output);
    }
    if(user_id){
      getUserInfo();
      getUserBookedEventsInfo();
      getEventsThatProvidedByTheUser();
    }
},[]);
    
    
  return(
    <div className="">
      <div className="abosolute top-0 left-0 w-screen min-h-[1000px] bg-gray-200 overflow-x-hidden">
        <div className="border-2 border-black">
          <Control_broad_new/>
        </div>
        <div className="w-full min-h-[800px] flex justify-center items-start">
          <div className="w-[1200px] min-h-[100px] border-2 border-black bg-gray-50">
            {/* Header */}
            <div className="mt-[25px]">
              <h1 className="text-[32px] text-gray-900 font-bold">My Account</h1>
              <div className="test-[20px] text-gray-500">Manage your profile and event activities</div>
            </div>

            {/* tabs navibar */}
            <ul className="mt-[25px] mb-[25px] h-[25px] w-full bg-gray-200 rounded-[5px] flex justify-center items-center gap-[5px]">
              <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[24.5%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "Profile"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("Profile")}}>Profile</li>
              <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[24.5%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "Upcoming Events"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("Upcoming Events")}}>Upcoming Events</li>
              <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[24.5%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "History Events"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("History Events")}}>History Events</li>
              <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[24.5%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "My Events"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("My Events")}}>My Events</li>
            </ul>

            {/* Profile Content */}
            <div className={`w-full min-h-[380px] border-2 border-black bg-white ${currentTab === "Profile"?"":"hidden"}`}>
              <div className="w-full h-[230px] flex justify-center items-center ">
                <div className="w-full h-[210px] bg-gray-200 rounded-[10px] p-[15px] ">

                  <div className="w-full h-[40px] flex justify-start items-center bg-blue-500">
                    <User className="mt-[0px] ml-[5px] h-[20px] w-[20px] text-black"/>
                    <div className="text-[15px] text-black ml-[10px] mt-[3px]">User Information</div>
                  </div>

                  <div className="w-full h-[150px] bg-white rounded-[10px] box-border flex justify-start items-start">
                    <div className="w-[10%] h-full inline-flex justify-start items-start ">
                      <img src={"/default user image.png"} className="ml-[20px] w-[80px] h-[80px] mt-[20px] ml-[10px] border-[2px] border-gray-600 rounded-[50%]"/>
                    </div>
                    <div className="w-[40%] h-full inline-flex flex-col justify-start items-center bg-red-200 pl-[20px]">
                      <div className="w-full h-[30px] mt-[20px] flex">
                        <User className="mt-[3px] h-[20px] w-[20px] text-gray-600"/>
                        <div className="ml-[5px] w-[80%] h-full text-[15px] text-gray-900 flex justify-start items-center pr-[10px]">Username:{}</div>
                      </div>
                      <div className="w-full h-[30px] mt-[10px] flex">
                        <Mail className="mt-[3px] h-[20px] w-[20px] text-gray-600"/>
                        <div className="ml-[5px] w-[80%] h-full text-[15px] text-gray-900 flex justify-start items-center pr-[10px]">Email:</div>
                      </div>     
                      <div className="w-full h-[30px] mt-[10px] flex">
                        <Calendar className="mt-[3px] h-[20px] w-[20px] text-gray-600"/>
                        <div className="ml-[5px] w-[80%] h-full text-[15px] text-gray-900 flex justify-start items-center pr-[10px]">Member Since:</div>
                      </div>
                    </div>
                    <div className="w-[40%] h-full inline-flex justify-start items-center"></div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[150px] bg-green-500 flex"></div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
);
}

export default MyAccount_page;