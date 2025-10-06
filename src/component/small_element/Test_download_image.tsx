"use client";
import { useState } from 'react';
import React from 'react';
import { serverUrl } from '@/src/data/severUrl';


const Test_download_image = () => {
  const [imageName, setImageName] = useState<string | null>(null);
  
  const handleDownload = async (filename: string) => {
      const res = await fetch(`${serverUrl}/download-url/${filename}`);
      const { url } = await res.json();

      window.open(url, "_blank");
  }


  return(
    <div>
      <div className='text-[30px] text-blue-600'>Test download image from cloudinary</div>
      <div className='text-[20px] text-gray-600'>Image name:</div>
      <input type="text" value={imageName ?? ''} onChange={(e) => setImageName(e.target.value)} placeholder="Enter image name" className="border border-gray-300 rounded p-2 w-64 text-black"/>
      <button onClick={()=>handleDownload(imageName as string )} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Download Image</button>
    </div>
  );
}
  
export default Test_download_image;