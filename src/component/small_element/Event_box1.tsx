import { EventInfo } from "@/src/data/sampleData";


let InPageEventInforDefault:any = {
  type: "Music",
  title: "Academy of St. Martin in the Fields Chamber Ensemble",
  provider: "Chamber Music | UK",
  dayOfMonth: "09",
  month: "OCT",
  dayOfWeek: "THU",
  date: "2024-07-15",
  startTime: "18:00",
  time: "18:00 - 20:00",
  location: "Department of Music's Conrad Prebys Concert Hall",
  imageUrl: "/asm-hero.png",
  description: `The Academy Chamber Ensemble was formed in 1967, drawing its membership from the world-renowned chamber orchestra theAcademy of St Martin in the Fields, which was itself founded bySir Neville Marriner in 1958 and is currently led by Music DirectorJoshua Bell. The purpose behind the formation of the ChamberEnsemble was to perform the larger scale chamber music repertoire with players who customarily worked together, instead of the usual string quartet with additional guests. Drawn from the principal players of the orchestra and play-directed by Academy Director / Leader Tomo Keller, the Chamber Ensemble now performs in multiple configurations from wind trios to string octets. Its touring commitments are extensive and include regular tours of Europe and North America, whilst recording contracts with Philips Classics, Hyperion, and Chandos have led to the release of over thirty CDs.

Program
Huw Watkins: New commissioned work
Françaix: Octet
Schubert: Octet in F major for Winds & Strings, D.803This is a detailed description of the event. It provides information about what to expect, who should attend, and any other relevant details.`,
};



let InPageEventInfor:EventInfo;



const Event_box1 = ({InPageEventInfor = InPageEventInforDefault}:{InPageEventInfor?:EventInfo} ) => {

  

  const eventInfor: any = {
    eventName: InPageEventInfor.title,
    eventDate: `${InPageEventInfor.month} ${InPageEventInfor.dayOfMonth} ${InPageEventInfor.dayOfWeek}, ${InPageEventInfor.startTime}`,
    eventType: InPageEventInfor.type,
    eventImage: InPageEventInfor.imageUrl, 

    eventProvider: InPageEventInfor.provider,
    eventLocation: InPageEventInfor.location,
  };

  

  return(
    <div className="group w-[280px] h-[350px]  overflow-hidden rounded-[20px] m-[10px] bg-white transition duration-200 ease-in-out  cursor-pointer hover:shadow-lg">
      <div className="w-[95%] h-[175px] ml-[2.5%] mt-[2.5%] overflow-hidden rounded-[15px]">
        <img src={eventInfor.eventImage} className="mt-[2px] w-full h-full object-cover  transition duration-200 ease-in-out group-hover:scale-105"/> 
      </div>
      <div className="ml-[3%] mt-[10px] w-[90%] h-[175px] ">
        <div className="text-gray-900 text-[15px] font-Nunito font-bold h-[44px]">{eventInfor.eventName}</div>

        <div className="text-gray-600 text-[13px] font-Nunito h-[20px] overflow-hidden">{`By: ${eventInfor.eventProvider}`}</div>
        <div className="text-gray-600 text-[13px] font-Nunito h-[40px] overflow-hidden">{`At: ${eventInfor.eventLocation}`}</div>

        <div className="h-[44px] relative mt-[5px]">
          <div className="text-gray-600 text-lg font-Nunito h-[100%] inline-block">{eventInfor.eventDate}</div>
          <div className="text-orange-400 text-lg font-Nunito h-[100%] inline-block absolute right-0 top-0">{eventInfor.eventType}</div>
        </div>
      </div>
    </div>
  );
}

export default Event_box1;