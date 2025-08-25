import Control_broad from "../../src/component/Control_broad";

//style={{backgroundImage: "url('/UCSD_1.webp')", backgroundSize: 'cover'}}

let InPageEventInfor:object = {
  type: "Music",
  title: "Academy of St. Martin in the Fields Chamber Ensemble",
  provider: "Chamber Music | UK",
  date: "2024-07-15",
  time: "18:00 - 20:00",
  location: "Department of Music's Conrad Prebys Concert Hall",
  imageUrl: "/asm-hero.png",
  description: `The Academy Chamber Ensemble was formed in 1967, drawing its membership from the world-renowned chamber orchestra theAcademy of St Martin in the Fields, which was itself founded bySir Neville Marriner in 1958 and is currently led by Music DirectorJoshua Bell. The purpose behind the formation of the ChamberEnsemble was to perform the larger scale chamber music repertoire with players who customarily worked together, instead of the usual string quartet with additional guests. Drawn from the principal players of the orchestra and play-directed by Academy Director / Leader Tomo Keller, the Chamber Ensemble now performs in multiple configurations from wind trios to string octets. Its touring commitments are extensive and include regular tours of Europe and North America, whilst recording contracts with Philips Classics, Hyperion, and Chandos have led to the release of over thirty CDs.

Program
Huw Watkins: New commissioned work
Françaix: Octet
Schubert: Octet in F major for Winds & Strings, D.803This is a detailed description of the event. It provides information about what to expect, who should attend, and any other relevant details.`,
}

const Eventdetail_page = (eventInfor:object = InPageEventInfor) =>{
  return(
    <div className="absolute top-0 left-0 bg-gray-100 min-h-screen w-screen" >
      <Control_broad/>
      <title>Event Detail Page</title>
      <div className="absolute top-[115px] min-h-[1000px] w-full bg-gray-100 flex justify-center border-[2px] border-black">
          <div className="w-[1160px] min-h-[1000px] border-[2px] border-black flex justify-center">
            <div className="w-[1150px] h-[490px] border-[2px] border-black rounded-[10px] bg-green-100 text-black">
              <div className="inline-flex w-[570px] h-[490px] border-[2px] border-black">
                <div className="ml-[50px] mt-[50px] h-[30px] pl-[10px] pr-[10px] text-orange-400 border-[2px] border-black"></div>
              </div>
              <div className="inline-flex w-[570px] h-[490px] border-[2px] border-black"></div>
            </div>
          </div>
      </div>
    </div>
);
}

export default Eventdetail_page;