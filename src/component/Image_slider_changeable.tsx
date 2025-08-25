"use client";

import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type ImageSliderProps = {
  width: number;
  height: number;
};



const Image_slider_changeable = ({width, height}:ImageSliderProps) => {

  let imgList: string[] = ["/UCSD_1.webp", "/UCSD_2.webp", "/UCSD_3.png"];
  const [imgstate, setImgstate] = useState(0);

  return (
    //<div className={`absolute w-[${width}px] h-[${height}px] bg-white flex items-center justify-center box-border rounded-2xl overflow-hidden border-[3px] border-black`}>
     <div className={`absolute w-[${width}px] h-[${height}px] bg-white flex items-center justify-center box-border rounded-2xl overflow-hidden border-[3px] border-black`}> 
      <div className="w-full h-full flex rounded-2xl overflow-hidden items-center ">
        {imgList.map(url=>(<img src={url} key={url} className="transition duration-300 w-[900px] h-[500px] rounded-2xl bg-cover" style={{ transform: `translateX(${-100 * imgstate}%)` }}/>))} 
      </div>


      <div className="cursor-pointer transition duration-200 ease-in-out absolute right-[60px] bottom-[12px] text-3xl  text-white font-Nunito bg-gray-300 opacity-60 rounded-[10px] w-10 h-10 hover:opacity-100" onClick={() => {setImgstate((imgstate - 1 + imgList.length) % imgList.length)}}>
        <div className="absolute left-[8px] top-[8px]"><ArrowBigLeft className="fill-black text-white"/></div>
      </div>
      <div className="cursor-pointer transition duration-200 ease-in-out absolute right-[10px] bottom-[12px] text-3xl  text-white font-Nunito bg-gray-300 opacity-60 rounded-[10px] w-10 h-10 hover:opacity-100" onClick={() => {setImgstate((imgstate + 1) % imgList.length)}}>
        <div className="absolute right-[8px] top-[8px]"><ArrowBigRight className="fill-black text-white" /></div>
      </div>

      <div className="absolute left-[30px] bottom-[12px] flex">
        {imgList.map((url,index) => (
          <div
            className={
              `m-[5px] text-white border-[1px] h-[12px] w-[12px] rounded-[10px] border-gray-300 font-Nunito${index === imgstate ? ' bg-white' : ''}`
            }
            onClick={() => { setImgstate(index % imgList.length) }}
            key={url}
          ></div>
        ))}
      </div>
    </div>

  );
}

export default Image_slider_changeable;