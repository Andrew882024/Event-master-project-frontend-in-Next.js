"use client";
import Control_broad from "@/src/component/Control_broad";
//import Event_info_picker from "@/src/component/Event_info_picker";
import MyDropzone from "@/src/component/small_element/Upload_image";

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Creating_Event_info = { 
  type:string;
  title:string;
  provider:string;
  StartDateAndTime:string;
  lastingTime:number;
  location:string;
  image:string;
  description:string; 
};



const UploadEvent_page = () =>{
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                       Event_info_picker                                          
///////////////////////////////////////////////////////////////////////////////////////////////////////////
    const [value, onChange] = useState<Value>(null);
  
    const f = new Intl.DateTimeFormat('en-us', { dateStyle: 'full', timeStyle: 'full' ,hourCycle: 'h23'});
    let isValidDate = value instanceof Date && !isNaN(value.getTime());
      if (isValidDate) {
        console.log(f.format(value as Date));
      } else {
        console.log('date is empty or wrong, try again');
      }
  
  
      const handleSubmit = async () => {
      if (!isValidDate) {
        console.warn("date is empty or wrong, try again");
        return;
      }
      const creating_event_info: Creating_Event_info = {
        type:"sampleType",
        title:"sampleTitle",
        provider:"sampleProvider",
        StartDateAndTime:(value as Date).toISOString(), // UTC ISO 8601
        lastingTime:0,
        location:"samepleLocation",
        image:"sampleImage",
        description:"sampleDescription",
      };
  
      try {
        const res = await fetch("http://localhost:8000/test_datetime", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(creating_event_info), // <-- send the payload
        });
        const data = await res.json();
        console.log("Response from backend:", data);
      } catch (err) {
        console.error("Error:", err);
      }
    };
  
      console.log(value);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                       Event_info_picker                                          
///////////////////////////////////////////////////////////////////////////////////////////////////////////





  return(<div className="absolute top-0 left-0 bg-gray-50 min-h-screen w-full">
    <Control_broad/>
    <title>Upload Event Page</title>
    <div className="absolute top-[115px] min-h-[1000px] w-full bg-gray-50 ">
      <div className="flex justify-center text-center">
      <div className=" text-[30px] text-gray-900 font-Nunito mt-[10px] mb-[20px] ml-[]">Create New Event</div>
      </div>
      <div className="flex justify-center">
      <div className="w-[800px] bg-gray-200 rounded-[20px] min-h-[800px] box-border shadow-lg">
        <div className='text-[30px] text-blue-600 mt-[20px] mb-[5px] ml-[30px]'>Upload image</div>
        <div className="ml-[30px]"><MyDropzone/></div>
        <div className="text-[20px] text-gray-900 font-Nunito mt-[0px] mb-[5px] ml-[30px]">Event Date and Time:</div>
        <div className="ml-[30px] ">
          <div>
                <DateTimePicker onChange={onChange} value={value} className={"text-[20px] w-[500px] h-[40px] bg-gray-200 text-black"}  minDate={new Date()} />
                <div className="text-black" >Selected date and time: {value ? value.toString() : 'None'}</div>
                
              </div>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded mt-2" onClick={() => {
                  handleSubmit();
                }}>Submit</button>
      </div>
      </div>
    </div>
    
    
  </div>

);
}

export default UploadEvent_page;