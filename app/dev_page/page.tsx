import Event_box1 from "../../src/component/small_element/Event_box1";
import Image_slider_changeable from "@/src/component/Image_slider_changeable";


const Dev = () =>{
  return(
    <div className="absolute top-0 left-0 bg-gray-100 min-h-screen w-screen flex items-center justify-center">
      <title>Dev Page</title>
        <Image_slider_changeable width={900} height={400} />
    </div>
  );
}

export default Dev;