"use client";
import Control_broad_new from "@/src/component/Control_broad_new";
//import Event_info_picker from "@/src/component/Event_info_picker";
import MyDropzone from "@/src/component/small_element/Upload_image";

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
//import { useState } from 'react';

import { EventInfo } from "@/src/data/sampleData";
import {Preview_eventdetail_page} from "../../src/component/big_component/Preview_detail_page";
import { FullScreenPreview } from "@/src/component/big_component/FullScreenPreview";

const jwtInfo = JSON.parse(localStorage.getItem("JWT_access_token_Info")||"");
const user_id:number = jwtInfo.user.user_id;

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Creating_Event_info = { 
  user_id:number;
  type:string;
  title:string;
  provider:string;
  StartDateAndTime:string;
  lastingTime:number;
  location:string;
  image:string;
  description:string; 
  totalTicketNumber:number;
};



const UploadEvent_page = () =>{
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                        event info small                                         
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const [event_type, set_event_type] = useState<String>("empty");
const [event_title, set_event_title] = useState<String>("empty");
const [event_provider_name, set_event_provider_name] = useState<String>("empty");
const [event_lasting_time_in_minutes, set_event_lasting_time_in_minutes] = useState<number>(0);
const [event_location, set_event_location] = useState<String>("empty");
const [event_description, set_event_description] = useState<String>("empty");
const [event_total_ticket_number, set_event_total_ticket_number] = useState<number>(0);

//tool
const [description_word_count,set_description_word_count] = useState<number>(0);
//image uuid
const [event_image_uuid_from_backend, set_event_image_uuid_from_backend] = useState<String>("empty");

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                       Event_date_and_time_picker                                          
///////////////////////////////////////////////////////////////////////////////////////////////////////////
    const [value, onChange] = useState<Value>(null);
  
    const f = new Intl.DateTimeFormat('en-us', { dateStyle: 'full', timeStyle: 'full' ,hourCycle: 'h23'});
    let isValidDate = value instanceof Date && !isNaN(value.getTime());

      const handleSubmitDate = async (imageurl:string) => {
      if (!isValidDate) {
        console.warn("date is empty or wrong, try again");
        alert('date is empty or wrong, try again');
        return;
      }

      const localTime = new Date((value as Date).getTime() - 7 * 60 * 60 * 1000); // Convert to UTC by subtracting 7 hours
      const creating_event_info: Creating_Event_info = {
        user_id: user_id,
        type:event_type as string,
        title:event_title as string,
        provider:event_provider_name as string,
        StartDateAndTime:localTime.toISOString().slice(0, 19), // UTC ISO 8601
        lastingTime:event_lasting_time_in_minutes as number,
        location:event_location as string,
        image: imageurl as string,
        description:event_description as string,
        totalTicketNumber:event_total_ticket_number as number,
      };
  
      try {
        alert(`time that picked up: ${localTime.toISOString().slice(0, 19)}`);
        const res = await fetch("http://localhost:8000/test_datetime", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwtInfo.access_token}`, },
          body: JSON.stringify(creating_event_info), // <-- send the payload
        });
        const data = await res.json();
        console.log("Response from backend:", data);
      } catch (err) {
        console.error("Error:", err);
        throw err;
      }
    };
  
      //console.log(value);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                       Event_image_picker                                          
///////////////////////////////////////////////////////////////////////////////////////////////////////////
    const [files, setFiles] = useState<(File & { preview: string })[]>([]);
    const [rejected, setRejected] = useState<import('react-dropzone').FileRejection[]>([])
    const removeFile = (name:string) => {
    setFiles(files => files.filter(file => file.name !== name));
    };
    const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: import('react-dropzone').FileRejection[]) => {
      
      if (rejectedFiles?.length) {
        setRejected(previousFiles => [...rejectedFiles]);
        alert(rejectedFiles[0].errors[0].message);
      }
      console.log(acceptedFiles);
      if (acceptedFiles.length) {
        setFiles(previousFiles => [
          // ...previousFiles,
          ...acceptedFiles.map(file =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          )
        ])}
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, 
      accept: {'image/*': []},
      maxSize: 1048576*5,
      maxFiles:1
  
  });// 5MB
  
  const handleImageSubmit = async () => {
    if (!files?.length) return;
  
    const res = await fetch("http://localhost:8000/upload-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename: files[0].name, content_type: files[0].type }),
    });

    const { url, fields } = await res.json();

    set_event_image_uuid_from_backend(fields.key);
    alert(fields.key+"test1");
    const formData = new FormData();
    //files.forEach(file => formData.append('file', file));
    const file = files[0];
    Object.entries(fields).forEach(([k, v]) => formData.append(k, v as string)); // adds 'key'
    formData.append("file", file);
  
    formData.append('upload_preset', 'friendsbook');
  
    const cloudinaryUrl = url //"http://localhost:8000/upload"//process.env.NEXT_PUBLIC_CLOUDINARY_URL;
    if (!cloudinaryUrl) {
      alert('Cloudinary URL is not defined.');
      return;
    }
    const data = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: formData
     })//.then(res => res.json());
    if (data.status !== 204) {
      alert('Uploading image failed.');
      throw new Error('Uploading image failed.');
    }
    
    console.log(data.status);
    return fields.key;
  };

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                         preview                                          
///////////////////////////////////////////////////////////////////////////////////////////////////////////

const preview_event_info: EventInfo = {
  eventId: "sampleEventId",
  type: event_type as string,
  title: event_title as string,
  provider: event_provider_name as string,
  dayOfMonth: isValidDate ? (value as Date).getDate().toString() : "DD",
  month: isValidDate ? (value as Date).toLocaleString('en-US', { month: 'short' }).toUpperCase() : "MMM",
  dayOfWeek: isValidDate ? (value as Date).toLocaleString('en-US', { weekday: 'short' }).toUpperCase() : "DDD",
  date: isValidDate ? new Intl.DateTimeFormat('en-CA',{year:'numeric',month:'2-digit',day:'2-digit'}).format(value as Date) : "Date",
  startTime: isValidDate ? (value as Date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) : "HH:MM",
  time: isValidDate ? `${(value as Date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}-${new Date((value as Date).getTime() + event_lasting_time_in_minutes * 60_000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}` : "HH:MM",
  location: event_location as string,
  imageUrl: files.length > 0 ? files[0].preview : "https://via.placeholder.com/150",
  description: event_description as string,
  totalTicketNumber: event_total_ticket_number as number,
  remainingTicketNumber: event_total_ticket_number as number,
}

const [showPreview, setShowPreview] = useState<Boolean>(false);



///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                         return                                          
///////////////////////////////////////////////////////////////////////////////////////////////////////////


  return(<div className="absolute top-0 left-0 bg-gray-50 min-h-screen w-full">
    <Control_broad_new/>
    <title>Upload Event Page</title>
    <div className="absolute top-[70px] min-h-[1000px] w-full bg-gray-50 ">
      <div className="flex justify-center text-center">
      <div className=" text-[30px] text-gray-900 font-Nunito mt-[10px] mb-[20px] ml-[]">Create New Event</div>
      </div>
      <div className="flex justify-center">
      <div className="w-[800px] bg-gray-200 rounded-[20px] min-h-[800px] mb-[100px] box-border shadow-lg">

{/*//////////////////////////////////////////////////// image picker ///////////////////////////////////////////////////////*/}
        <div className='text-[25px] text-blue-600 mt-[20px] mb-[5px] ml-[30px]'>Upload image</div>
        <div className="ml-[30px]"> 
          <form>
            <div {...getRootProps({className:"w-[740px] h-[180px] border-[2px] border-dashed border-gray-300 bg-gray-100 flex flex-col items-center justify-center cursor-pointer shadow-lg rounded-[10px]"})}>
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p className='text-[20px] text-gray-700'>Drop the image here ...</p> :
                  <p className='text-[20px] text-gray-700'>Drag image here, or click to select image</p>
              }
            </div>
            {/* Preview */}
            <ul className='text-[20px] text-gray-700'>
              {files.map(file => (
                <li key={file.name + file.preview}> <img src={file.preview} alt="" className='w-[100px] h-[100px] object-contain inline-block'/>{file.name} {<button className='text-[20px] text-gray-700 border-2 border-black cursor-pointer' onClick={()=>removeFile(file.name)}>remove image</button>}</li>         
              ))}
            </ul>
          </form>
        </div>
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

{/*//////////////////////////////////////////////////// event info small 1 ///////////////////////////////////////////////////////*/}
<div>
    <div className='text-[20px] text-gray-900 mt-[15px] mb-[0px] ml-[30px]'>Title:</div>
    <input type="text" className="ml-[40px] w-[500px] h-[40px] mb-[5px] bg-gray-200 text-black text-[20px] p-2 outline-none border-b-[2px] border-gray-900 focus:border-blue-600" 
      onChange={(e) => set_event_title(e.target.value)} placeholder="please enter your event title"/>
</div>
<div>
    <div className='text-[20px] text-gray-900 mt-[15px] mb-[0px] ml-[30px]'>Type:</div>
    <input type="text" className="ml-[40px] w-[500px] h-[40px] mb-[5px] bg-gray-200 text-black text-[20px] p-2 outline-none border-b-[2px] border-gray-900 focus:border-blue-600" 
      onChange={(e) => set_event_type(e.target.value)} placeholder="please enter your event type"/>
</div>
<div>
    <div className='text-[20px] text-gray-900 mt-[15px] mb-[0px] ml-[30px]'>Provider's Name:</div>
    <input type="text" className="ml-[40px] w-[500px] h-[40px] mb-[5px] bg-gray-200 text-black text-[20px] p-2 outline-none border-b-[2px] border-gray-900 focus:border-blue-600" 
      onChange={(e) => set_event_provider_name(e.target.value)} placeholder="please enter event provider's name"/>
</div>
<div>
    <div className='text-[20px] text-gray-900 mt-[15px] mb-[0px] ml-[30px]'>Location:</div>
    <input type="text" className="ml-[40px] w-[700px] h-[40px] mb-[5px] bg-gray-200 text-black text-[20px] p-2 outline-none border-b-[2px] border-gray-900 focus:border-blue-600" 
      onChange={(e) => set_event_location(e.target.value)} placeholder="please enter event location"/>
</div>


{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

{/*////////////////////////////////////////////////////// Date picker //////////////////////////////////////////////////////////*/}
      <div className="flex mt-[10px]">
        <div>
          <div className="text-[20px] text-gray-900 font-Nunito mt-[0px] mb-[5px] ml-[30px]">Start Date and Time:</div>
          <div className="ml-[30px] ">
            <div>
              <DateTimePicker onChange={onChange} value={value} className={"text-[20px] w-[400px] ml-[10px] h-[40px] bg-gray-200 text-black "}  minDate={new Date()} />
              <div className="text-black" >Selected date and time: {value ? value.toString() : 'None'}</div>                
            </div>
          </div>
        </div>

        <div>
          <div className='text-[20px] text-gray-900 mt-[0px] mb-[5px] ml-[30px]'>Lasting Time In Minutes:</div>
          <input type="number" className="ml-[40px] w-[100px] h-[40px] mb-[5px] bg-gray-200 text-black text-[20px] p-2 outline-none border-[1px] rounded-[15px] border-gray-900 focus:border-blue-600" 
            onChange={(e) => set_event_lasting_time_in_minutes(Number(e.target.value))} placeholder="0"/>
        </div>
      </div>
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

{/*//////////////////////////////////////////////////// event info small 2 ///////////////////////////////////////////////////////*/}
<div>
    <div className='text-[20px] text-gray-900 mt-[15px] mb-[0px] ml-[30px]'>Total Ticket Number:</div>
    <input type="number" className="ml-[40px] w-[100px] h-[40px] mb-[5px] bg-gray-200 text-black text-[20px] p-2 outline-none border-[1px] rounded-[15px] border-gray-900 focus:border-blue-600" 
      onChange={(e) => set_event_total_ticket_number(Number(e.target.value))} placeholder="0"/>
</div>

<div>
    <div className='text-[20px] text-gray-900 mt-[15px] mb-[5px] ml-[30px]'>Description:</div>
    <textarea className="ml-[40px] w-[700px] min-h-[100px] mb-[5px] bg-gray-200 text-black text-[15px] p-[15px] outline-none border-[2px] pb-[30px] border-gray-900 rounded-[15px] focus:border-blue-600" 
      onChange={(e) => {
        set_event_description(e.target.value);
        set_description_word_count(e.target.value.length);
      }} placeholder="please enter event description (no more than 10000 character)"/>
    <div className={`text-[15px] mr-[80px] mt-[-40px] mb-[0px] flex justify-end ${description_word_count>10000?"text-red-600":"text-gray-500"}`}>
      <div>{`${description_word_count}/10000`}</div>
    </div>
</div>

{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

{/*//////////////////////////////////////////////////// submit button //////////////////////////////////////////////////////////*/}
        <button
          type="button" className="bg-blue-600 text-white p-2 rounded mt-[30px] ml-[30px] mb-[100px] w-[100px] shadow-lg hover:bg-blue-700 transition-colors duration-[300ms] cursor-pointer"
          onClick={async () => {

            if(event_type==="empty"||event_title==="empty"||event_provider_name==="empty"||event_location==="empty"||event_description==="empty"){
              alert("some event info is empty, please check again");
              return;
            }
            else if(event_lasting_time_in_minutes<=0||event_total_ticket_number<=0){
              alert("event lasting time and event total ticket number cannot be less or equal to 0")
              return;
            }
            else if(description_word_count>10000){
              alert("description should have no more than 10000 character")
              return;
            }
            else if(files.length <= 0){
              alert("you need to upload a image")
              return;
            }
            try{
              const imageurlholder = await handleImageSubmit();  
              console.log("test:"+event_image_uuid_from_backend);
              await handleSubmitDate(imageurlholder as string);   
            }
            catch{
              alert("submition failed, something is wrong");
              return;
            }

            alert("submition succeed");
          }}
        >
          Submit
        </button>
        <button
          type="button" // important if inside a <form>
          className="bg-blue-600 text-white ml-[520px] px-4 py-2 rounded cursor-pointer w-[100px] hover:bg-blue-700 shadow-lg  transition-colors duration-[300ms]"
          onClick={() => setShowPreview(true)}
        >
          Preview
        </button>

      {showPreview && (
        <FullScreenPreview event={preview_event_info} onClose={() => setShowPreview(false)} />
      )}
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      </div>
      </div>
    </div>
    
    
  </div>

);
}

export default UploadEvent_page;


