'use client';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Date_and_time_picker() {
  const [value, onChange] = useState<Value>(null);
  
  const f = new Intl.DateTimeFormat('en-us', { dateStyle: 'full', timeStyle: 'full' ,hourCycle: 'h23'});
  let isValidDate = value instanceof Date && !isNaN(value.getTime());
    if (isValidDate) {
      console.log(f.format(value as Date));
    } else {
      console.log('date is empty or wrong, try again');
    }

  return (
    <div>
      <DateTimePicker onChange={onChange} value={value} className={"text-[20px] w-[400px] h-[50px] bg-white text-black p-[10px]"} minDate={new Date()}/>
      <div className="text-white" >Selected date and time: {value ? value.toString() : 'None'}</div>
    </div>
  );
}

export default Date_and_time_picker;