import Event_box1 from "../../src/component/small_element/Event_box1";
import Image_slider_changeable from "@/src/component/Image_slider_changeable";
import MyDropzone from "@/src/component/small_element/Upload_image";
import Test_download_image from "@/src/component/small_element/Test_download_image";


const Dev = () =>{
  return(
    <div className="absolute top-0 left-0 bg-gray-100 min-h-screen w-screen flex items-center justify-center ">
      <title>Dev Page</title>
      <div>
        <div className='text-[30px] text-blue-600'>Upload image</div>
        <div><MyDropzone/></div>
        <div className='text-[30px] text-blue-600 mt-[50px]'>Download image</div>
        <div><Test_download_image/></div>
      </div>
    </div>
  );
}

export default Dev;