"use client";
import Control_broad from "@/src/component/Control_broad";
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
  
  
      const handleSubmitDate = async () => {
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
  
  const handleImageSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!files?.length) return;
  
    const res = await fetch("http://localhost:8000/upload-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename: files[0].name, content_type: files[0].type }),
    });
  
    const { url, fields } = await res.json();
  
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
  
    console.log(data);
  };




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
        <div className="ml-[30px]">
          
          <form onSubmit={handleImageSubmit}>
            <div {...getRootProps({className:"w-[740px] h-[180px] border-[2px] border-dashed border-gray-300 bg-gray-100 flex flex-col items-center justify-center cursor-pointer shadow-lg rounded-[10px]"})}>
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p className='text-[20px] text-gray-700'>Drop the files here ...</p> :
                  <p className='text-[20px] text-gray-700'>Drag 'n' drop some files here, or click to select files</p>
              }
            </div>
            {/* Preview */}
            <ul className='text-[20px] text-gray-700'>
              {files.map(file => (
                <li key={file.name + file.preview}> <img src={file.preview} alt="" className='w-[100px] h-[100px] object-contain inline-block'/>{file.name} {<button className='text-[20px] text-gray-700 border-2 border-black cursor-pointer' onClick={()=>removeFile(file.name)}>remove image</button>}</li>         
              ))}
            </ul>
            <button type="submit" className='border-[2px] border-black rounded-[10px] text-[18px] text-gray-700 hover:shadow-lg cursor-pointer '>Upload</button>
            
          </form>
    </div>


        <div className="text-[20px] text-gray-900 font-Nunito mt-[0px] mb-[5px] ml-[30px]">Event Date and Time:</div>
        <div className="ml-[30px] ">
          <div>
                <DateTimePicker onChange={onChange} value={value} className={"text-[20px] w-[500px] h-[40px] bg-gray-200 text-black"}  minDate={new Date()} />
                <div className="text-black" >Selected date and time: {value ? value.toString() : 'None'}</div>
                
              </div>
        </div>
        <button
          type="button" className="bg-blue-500 text-white p-2 rounded mt-2"
          onClick={async () => {
            await handleImageSubmit();  
            await handleSubmitDate();   
          }}
        >
          Submit All
        </button>
      </div>
      </div>
    </div>
    
    
  </div>

);
}

export default UploadEvent_page;