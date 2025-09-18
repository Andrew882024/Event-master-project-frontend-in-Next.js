import Image from "next/image";

import Text_image_card from "../src/component/Text_image_card";
import Text_image_card2 from "../src/component/Text_image_card2";
import Control_broad_new from "@/src/component/Control_broad_new";




const Index_page = () => {
  return(<div className="absolute top-0 left-0 bg-gray-100 min-h-screen w-screen overflow-x-hidden">
    <Control_broad_new/>
    <div className="absolute top-[70px] left-0 w-screen bg-gray-100 bg-opacity-90">
      <Text_image_card />
      <Text_image_card2 />
    </div>
  </div>);
}

export default Index_page;