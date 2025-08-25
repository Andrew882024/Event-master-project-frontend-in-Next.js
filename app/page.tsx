import Image from "next/image";

import Control_broad from "../src/component/Control_broad";
import Text_image_card from "../src/component/Text_image_card";
import Text_image_card2 from "../src/component/Text_image_card2";

const Index_page = () => {
  return(<div className="absolute top-0 left-0 bg-gray-100 min-h-screen w-screen" style={{backgroundImage: "url('/UCSD_1.webp')", backgroundSize: 'cover'}}>
    <Control_broad />
    <div className="absolute top-[120px] left-0 w-screen bg-gray-100 bg-opacity-90">
      <Text_image_card />
      <Text_image_card2 />
    </div>
  </div>);
}

export default Index_page;