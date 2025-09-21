"use client"
import { serverUrl } from "@/src/data/severUrl";
import Control_broad_new from "@/src/component/Control_broad_new";





const Dev = () =>{
  const test_bearer_token = async() =>{
    console.log(localStorage.getItem("access_token"));
    const res = await fetch(`${serverUrl}/test_post_for_jwt_bearer`, {
      method:'POST', 
      headers: {"Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("access_token")}`,},
      body: JSON.stringify({"id":"1", "user_name":"test"})})
    const output = await res.json();
    console.log(output);
  }

  return(

    <div className="absolute top-0 left-0 bg-gray-300 min-h-screen w-screen flex items-center justify-center ">
      <Control_broad_new/>
      <title>Dev Page</title>
      <div>
        {/* <div className='text-[30px] text-blue-600'>Upload image</div>
        <div><MyDropzone/></div>
        <div className='text-[30px] text-blue-600 mt-[50px]'>Download image</div>
        <div><Test_download_image/></div>
        <Load_image/> */}
        {/* <div className='text-[30px] text-blue-600'>Testing Query</div>
        {data?.map((post,key) => (<div key = {key} className="text-black">{post.event_imageUrl}</div>) )} */}
        <button className="text-[20px] text-black border-[2px] border-black cursor-pointer hover:shadow-lg" onClick={() => {
          console.log(JSON.parse(localStorage.getItem("JWT_access_token_Info")||"").user.user_id);
        }}>test button</button>
      </div>
    </div>
  );
}

export default Dev;