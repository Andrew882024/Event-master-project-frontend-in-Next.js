'use client';
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


function Event_info_picker() {
  const [value, onChange] = useState<Value>(null);
  



////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  const f = new Intl.DateTimeFormat('en-us', { dateStyle: 'full', timeStyle: 'full' ,hourCycle: 'h23'});
  const isValidDate = value instanceof Date && !isNaN(value.getTime());
    if (isValidDate) {
      console.log(f.format(value as Date));
    } else {
      console.log('date is empty or wrong, try again');
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////


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
      const res = await fetch("http://localhost:8000/pick_datetime", {
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

  


////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <DateTimePicker onChange={onChange} value={value} className={"text-[20px] w-[500px] h-[40px] bg-gray-200 text-black"}  minDate={new Date()} />
      <div className="text-black" >Selected date and time: {value ? value.toString() : 'None'}</div>
      <button className="bg-blue-500 text-white p-2 rounded mt-2" onClick={() => {
        handleSubmit();
      }}>Submit</button>
    </div>
  );
}

export default Event_info_picker;