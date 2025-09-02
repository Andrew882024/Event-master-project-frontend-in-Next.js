"use client";
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { useState } from 'react';

function MyDropzone() {
  // const [files, setFiles] = useState([]);
  // const onDrop = useCallback((acceptedFiles:File[]) => {
  //   // Do something with the files
  //   console.log(acceptedFiles);
  //   if (acceptedFiles.length) {
  //   setFiles(previousFiles => [...previousFiles,
  //       ...acceptedFiles.map(file =>
  //         Object.assign(file, { preview: URL.createObjectURL(file) })])
  //   }
  // }, [])
  const [files, setFiles] = useState<(File & { preview: string })[]>([]);
  const [rejected, setRejected] = useState<import('react-dropzone').FileRejection[]>([])
  const removeFile = (name:string) => {
  setFiles(files => files.filter(file => file.name !== name));
  };
  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: import('react-dropzone').FileRejection[]) => {
    // Do something with the files
    // if (files.length >= 1) {
    //   alert('You should not upload two images. Please delete the first one before adding another.');
    //   return;
    // }
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

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!files?.length) return;

  const formData = new FormData();
  files.forEach(file => formData.append('file', file));

  formData.append('upload_preset', 'friendsbook');

  const cloudinaryUrl = "http://localhost:8000/upload"//process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  if (!cloudinaryUrl) {
    alert('Cloudinary URL is not defined.');
    return;
  }
  const data = await fetch(cloudinaryUrl, {
    method: 'POST',
    body: formData
  }).then(res => res.json());

  console.log(data);
};

  return (
    <form onSubmit={handleSubmit}>
      <div {...getRootProps({className:"w-[600px] h-[180px] border-[2px] border-dashed border-gray-300 bg-gray-100 flex flex-col items-center justify-center cursor-pointer shadow-lg rounded-[10px]"})}>
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
  )
}

export default MyDropzone