"use client";
import Control_broad from "@/src/component/Control_broad";
import Event_info_picker from "@/src/component/Event_info_picker";



const UploadEvent_page = () =>{
  return(<div className="absolute top-0 left-0 bg-gray-50 min-h-screen w-full">
    <Control_broad/>
    <title>Upload Event Page</title>
    <div className="absolute top-[115px] min-h-[1000px] w-full bg-gray-900 flex justify-center ">
      <Event_info_picker/>
    </div>
    
  </div>

);
}

export default UploadEvent_page;