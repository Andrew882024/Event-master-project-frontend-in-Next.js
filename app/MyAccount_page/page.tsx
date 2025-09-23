"use client"

import { serverUrl } from "@/src/data/severUrl";
import Control_broad_new from "@/src/component/Control_broad_new";
import {useState, useEffect, useRef} from "react";
import { User, Mail, Hash, Shield, Calendar, Clock, MapPin, Users, Edit3, Trash2, Eye, Settings } from "lucide-react"
import { UserInfoMyAccount, UserBookedEventsInfoMyAccount, EventsThatProvidedByTheUserMyAccount } from "@/src/data/dataForMyAccount";
import Event_box_my_account from "@/src/component/small_element/Event_box_my_account";
import Event_box_provider_my_account from "@/src/component/small_element/Event_box_provider_my_account";



const MyAccount_page = () =>{
  const [currentTab, setCurrentTab] = useState<string>("Profile");
  const [userInfo, setUserInfo] = useState<UserInfoMyAccount | null>(null);
  const [userBookedEventsInfo, setUserBookedEventsInfo] = useState<UserBookedEventsInfoMyAccount>([]);
  const [eventsThatProvidedByTheUser, setEventsThatProvidedByTheUser] = useState<EventsThatProvidedByTheUserMyAccount>([]);
  const [userBookedEventsInfoUpComing, setUserBookedEventsInfoUpComing] = useState<UserBookedEventsInfoMyAccount>([]);
  const [userBookedEventsInfoHistory, setUserBookedEventsInfoHistory] = useState<UserBookedEventsInfoMyAccount>([]);
 
  const ran = useRef(false);
  useEffect(() => {

    if(localStorage.getItem("JWT_access_token_Info") === null){
      alert("You are not signed in, please sign in first.");
      window.location.href = "/";
      return;
    }

    if (ran.current) return;
    ran.current = true;

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
        setUserBookedEventsInfoUpComing(output.filter((event: { event_start_date_and_time: Date; }) => new Date(event.event_start_date_and_time) >= new Date()));
        setUserBookedEventsInfoHistory(output.filter((event: { event_start_date_and_time: Date; }) => new Date(event.event_start_date_and_time) < new Date()));
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
      <div className="abosolute top-0 left-0 w-screen min-h-[1000px] bg-gray-50 overflow-x-hidden">
        <div className="">
          <Control_broad_new/>
        </div>
        <div className="w-full min-h-[800px] flex justify-center items-start">
          <div className="w-[1200px] min-h-[100px]  bg-gray-50">
            {/* Header */}
            <div className="mt-[25px]">
              <h1 className="text-[32px] text-gray-900 font-bold">My Account</h1>
              <div className="test-[20px] text-gray-500">Manage your profile and event activities</div>
            </div>

            {/* tabs navibar */}
            <ul className="mt-[25px] mb-[10px] h-[25px] w-full bg-gray-200 rounded-[5px] flex justify-center items-center gap-[5px] ">
              <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[24.5%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "Profile"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("Profile")}}>Profile</li>
              <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[24.5%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "Upcoming Events"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("Upcoming Events")}}>Upcoming Events</li>
              <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[24.5%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "History Events"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("History Events")}}>History Events</li>
              <li className={`text-[14px] text-gray-900  cursor-pointer hover:text-gray-900 w-[24.5%] h-[85%] rounded-[5px] inline-flex justify-center items-center ${currentTab === "My Events"?"bg-gray-50":"hover:bg-gray-50/80"}`} onClick={()=>{setCurrentTab("My Events")}}>My Events</li>
            </ul>

            {/* Profile Content */}
            <div className={`w-full min-h-[380px] bg-gray-50 ${currentTab === "Profile"?"":"hidden"}`}>
              <div className="w-full h-[230px] flex justify-center items-center ">
                <div className="w-full h-[210px] bg-gray-200 rounded-[10px] p-[15px] border-[1px] border-gray-300 box-border">

                  <div className="w-full h-[40px] flex justify-start items-center">
                    <User className="mt-[-5px] ml-[5px] h-[20px] w-[20px] text-black"/>
                    <div className="text-[15px] text-black ml-[10px] mt-[3px]">User Information {userBookedEventsInfoUpComing[0]?userBookedEventsInfoUpComing[0].event_id:""}</div>
                  </div>

                  <div className="ml-[-10] w-full h-[150px] rounded-[10px] box-border flex justify-start items-start">
                    <div className="w-[10%] h-full inline-flex justify-start items-start ">
                      <img src={"/default user image.png"} className="w-[80px] h-[80px] mt-[20px] ml-[20px] border-[2px] border-gray-600 rounded-[50%]"/>
                    </div>
                    <div className="w-[40%] h-full inline-flex flex-col justify-start items-center pl-[20px]">
                      <div className="w-full h-[30px] mt-[10px] flex">
                        <User className="mt-[3px] h-[20px] w-[20px] text-gray-600"/>
                        <div className="ml-[5px] w-[80%] h-full text-[15px] text-gray-900 flex justify-start items-center pr-[10px]">Username: {userInfo?.user_name}</div>
                      </div>
                      <div className="w-full h-[30px] mt-[0px] flex">
                        <Mail className="mt-[3px] h-[20px] w-[20px] text-gray-600"/>
                        <div className="ml-[5px] w-[80%] h-full text-[15px] text-gray-900 flex justify-start items-center pr-[10px]">Email: {userInfo?.email}</div>
                      </div>     
                      <div className="w-full h-[30px] mt-[0px] flex">
                        <Calendar className="mt-[3px] h-[20px] w-[20px] text-gray-600"/>
                        <div className="ml-[5px] w-[80%] h-full text-[15px] text-gray-900 flex justify-start items-center pr-[10px]">
                          Member Since: {userInfo?.created_at ? new Date(userInfo.created_at).toLocaleDateString("en-US", {month: "long",day: "numeric",year: "numeric",}) : ""}
                        </div>
                      </div>
                      <div className="w-full h-[30px] mt-[0px] flex">
                        <button className="ml-[0px] w-[100px] h-[30px] bg-blue-500 text-white text-[14px] rounded-[5px] mt-[10px] hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer" onClick={()=>{alert("This function is not available yet.")}}>
                          <Settings className="inline-flex ml-[0px] mr-[5px] h-[16px] w-[16px] mt-[-3px] cursor-pointer items-center justify-center"/>
                          Edit Profile
                        </button>
                        <button className="ml-[20px] w-[100px] h-[30px] bg-gray-50 text-gray-900 text-[14px] rounded-[5px] mt-[10px] border-[1px] border-gray-600 box-border hover:shadow-lg  cursor-pointer" onClick={()=>{
                          localStorage.removeItem("JWT_access_token_Info");
                          alert("You have successfully signed out, you will be redirected to the home page.");
                          window.location.href = "/";
                        }}>
                          Sign out
                        </button>
                      </div>
                    </div>

                    <div className="w-[40%] h-full inline-flex flex-col justify-start items-start">
                      <div className="w-full h-[30px] mt-[10px] flex">
                        <Hash className="mt-[3px] h-[20px] w-[20px] text-gray-600"/>
                        <div className="ml-[5px] w-[80%] h-full text-[15px] text-gray-900 flex justify-start items-center pr-[10px]">User ID: {userInfo?.id}</div>
                      </div>
                      <div className="w-full h-[30px] mt-[0px] flex">
                        <Shield className="mt-[3px] h-[20px] w-[20px] text-gray-600"/>
                        <div className="ml-[5px] w-[80%] h-full text-[15px] text-gray-900 flex justify-start items-center pr-[10px]">Roles: {userInfo?.roles.join(", ")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[120px] flex items-center justify-center">
                <div className="w-[32%] h-[90%] text-[20px] flex flex-col justify-center items-center rounded-[20px] bg-gray-200 border-[1px] border-gray-300 box-border">
                  <div className="text-[25px] font-bold text-blue-600">{userBookedEventsInfoUpComing.length}</div>
                  <div className="text-[15px] text-gray-900">Upcoming Events</div>
                </div>
                <div className="w-[32%] h-[90%] text-[20px] flex flex-col justify-center items-center rounded-[20px] bg-gray-200 mx-[24px] border-[1px] border-gray-300 box-border">
                  <div className="text-[25px] font-bold text-blue-600">{userBookedEventsInfoHistory.length}</div>
                  <div className="text-[15px] text-gray-900">History Events</div>
                </div>
                <div className="w-[32%] h-[90%] text-[20px] flex flex-col justify-center items-center rounded-[20px] bg-gray-200 border-[1px] border-gray-300 box-border">
                  <div className="text-[25px] font-bold text-blue-600">{eventsThatProvidedByTheUser.length}</div>
                  <div className="text-[15px] text-gray-900">Total Events Provided</div>
                </div>
              </div>
            </div>
            

            {/* Upcoming Events Content */}
            <div className={` w-full min-h-[380px] bg-gray-50 text-black ${currentTab === "Upcoming Events"?"":"hidden"}`}>
              <div className="w-[1200px] min-h-[500px] bg-gray-200 rounded-[10px] p-[15px] border-[1px] border-gray-300 box-border">
                <div className="text-[18px] text-black ml-[10px] font-bold">Upcoming Events ({userBookedEventsInfoUpComing.length})</div>
                <div>{userBookedEventsInfoUpComing.toReversed().map((eventInfoMap) => (
                  <Event_box_my_account eventInfo = {eventInfoMap} key={eventInfoMap.booking_id}/>
                ))}</div>
              </div>
              {/* Upcoming Events Content */}
            </div>

            {/* History Events Content */}
            <div className={`w-full min-h-[380px] bg-gray-50 text-black ${currentTab === "History Events"?"":"hidden"}`}>
              <div className="w-[1200px] min-h-[500px] bg-gray-200 rounded-[10px] p-[15px] border-[1px] border-gray-300 box-border">
                <div className="text-[18px] text-black ml-[10px] font-bold">History Events ({userBookedEventsInfoHistory.length})</div>
                <div>{userBookedEventsInfoHistory.map((eventInfoMap) => (
                  <Event_box_my_account eventInfo = {eventInfoMap} key={eventInfoMap.booking_id}/>
                ))}</div>
              </div>
              {/* History Events Content */}
            </div>

            {/* My Events Content */}
            <div className={`w-full min-h-[380px] bg-gray-50 text-black ${currentTab === "My Events"?"":"hidden"}`}>
              <div className="w-[1200px] min-h-[500px] bg-gray-200 rounded-[10px] p-[15px] border-[1px] border-gray-300 box-border">
                <div className="text-[18px] text-black ml-[10px] font-bold">My Events ({eventsThatProvidedByTheUser.length})</div>
                <div>{eventsThatProvidedByTheUser.map((eventInfoMap) => (
                  <Event_box_provider_my_account eventInfo = {eventInfoMap} key={eventInfoMap.event_id}/>
                ))}</div>
              </div>
              {/* My Events Content */}
            </div>


          </div>
        </div>

      </div>
    </div>
);
}

export default MyAccount_page;