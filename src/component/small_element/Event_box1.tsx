
const Event_box1 = () => {

  const eventInfor: any = {
    eventName: "Academy of St. Martin in the Fields Chamber Ensemble",
    eventDate: "OCT 09 THU",
    eventType: "Music",
    eventImage: "/asm-hero.png", 
  };

  return(
    <div className="w-[280px] h-[270px]  overflow-hidden rounded-[20px] m-[10px] hover:bg-gray-300 cursor-pointer">
      <div className="w-[95%] h-[65%] ml-[2.5%] mt-[2.5%]">
        <img src={eventInfor.eventImage} className="mt-[2px] w-full h-full object-cover rounded-[15px]"/> 
      </div>
      <div className="ml-[3%] mt-[3%] w-[90%] h-[32.5%] ">
        <div className="text-gray-900 text-[15px] font-Nunito font-bold h-[50%]">{eventInfor.eventName}</div>
        <div className="h-[50%] relative mt-[5px]">
          <div className="text-gray-600 text-lg font-Nunito h-[100%] inline-block">{eventInfor.eventDate}</div>
          <div className="text-orange-400 text-lg font-Nunito h-[100%] inline-block absolute right-0 top-0">{eventInfor.eventType}</div>
        </div>
      </div>
    </div>
  );
}

export default Event_box1;