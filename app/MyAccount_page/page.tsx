"use client"

import { serverUrl } from "@/src/data/severUrl";
import Control_broad_new from "@/src/component/Control_broad_new";

const MyAccount_page = () =>{

  const jwtInfo = JSON.parse(localStorage.getItem("JWT_access_token_Info")||"");
  const user_id:number = jwtInfo.user.user_id;

  if(jwtInfo === null || jwtInfo === undefined){
    return(
      <div className="abosolute top-0 left-0 w-screen h-screen bg-gray-200 flex justify-center items-center">
        <div className="text-black text-3xl">You are not signed in, please sign in first</div>
      </div>
    );
  }

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
    }

    getUserInfo();
    getUserBookedEventsInfo();
    getEventsThatProvidedByTheUser();

  return(
    <div>
      <div className="abosolute top-0 left-0 w-screen min-h-[500px]] bg-gray-200">
        <Control_broad_new/>
        <div className="text-black text-5xl">MyAccount_page</div>
        <div className="ml-[200px] text-black text-[30px]">user profile</div>
        <div className="ml-[200px] w-[1300px] h-[200px] bg-gray-300 mt-[20px] rounded-[20px] flex justify-center items-center">
          <div className="text-black text-[20px]">Functionality not implemented</div>
        </div>
        <div className="ml-[200px] text-black text-[30px]">booked events</div>
        <div className="ml-[200px] w-[1300px] h-[200px] bg-gray-300 mt-[20px] rounded-[20px] flex justify-center items-center">
          <div className="text-black text-[20px]">Functionality not implemented</div>
        </div>
        <div className="ml-[200px] text-black text-[30px]">My booking history</div>
        <div className="ml-[200px] w-[1300px] h-[200px] bg-gray-300 mt-[20px] rounded-[20px] flex justify-center items-center">
          <div className="text-black text-[20px]">Functionality not implemented</div>
        </div>
        <div className="ml-[200px] text-black text-[30px]">My events</div>
        <div className=" ml-[200px] mb-[100px] w-[1300px] h-[200px] bg-gray-300 mt-[20px] rounded-[20px] flex justify-center items-center">
          <div className="text-black text-[20px]">Functionality not implemented</div>
        </div>
        <div className="ml-[200px] bg-gray-200 w-[500px] h-[10px]"></div>
      </div>
    </div>
);
}

export default MyAccount_page;