"use client"
import { serverUrl } from "@/src/data/severUrl";
import Control_broad_new from "@/src/component/Control_broad_new";





const Dev = () =>{

  return(

    <div className="absolute top-0 left-0 bg-gray-300 min-h-screen w-screen flex items-center justify-center ">
      <Control_broad_new/>
      <title>Dev Page</title>
      <div>
        <button className="text-[20px] text-black border-[2px] border-black cursor-pointer hover:shadow-lg" onClick={() => {
          
        }}>test button</button>
      </div>
    </div>
  );
}

export default Dev;