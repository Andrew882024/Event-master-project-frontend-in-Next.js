"use client"
import Event_box1 from "../../src/component/small_element/Event_box1";
import Image_slider_changeable from "@/src/component/Image_slider_changeable";
import MyDropzone from "@/src/component/small_element/Upload_image";
import Test_download_image from "@/src/component/small_element/Test_download_image";
import Load_image from "@/src/component/small_element/Load_image";
import { useQuery, useMutation} from "@tanstack/react-query";
import { EventInfoFromDB } from "@/src/data/dataFromDB";
import { fetchEventInfoFromDB } from "@/src/data/dataFromDB";
import { serverUrl } from "@/src/data/severUrl";





const Dev = () =>{
  // const {data, error,isLoading, isError} = useQuery<EventInfoFromDB[]>({
  //   queryKey: ['EventInfoFromDB'],
  //   queryFn: fetchEventInfoFromDB,
  //   staleTime: 60 * 60 * 1000, // 1 hour
  //   refetchInterval: 60 * 60 * 1000, // 1 hour
  // });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error: {(error as Error).message}</div>;
  // }

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