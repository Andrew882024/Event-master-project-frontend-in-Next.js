export type EventInfo = {
  type: string;
  title: string;
  provider: string;
  dayOfMonth: string;
  month: string;
  dayOfWeek: string;
  date: string;
  startTime: string;
  time: string;
  location: string;
  imageUrl: string;
  description: string;
  totalTicketNumber?: number;
  remainingTicketNumber?: number;
};

export let InPageEventInforDefault:EventInfo = {
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


// const EventInfoList: EventInfo[] = [{
//   type: "Music",
//   title: "Academy of St. Martin in the Fields Chamber Ensemble",
//   provider: "Chamber Music | UK",
//   dayOfMonth: "09",
//   month: "OCT",
//   dayOfWeek: "THU",
//   date: "2024-07-15",
//   startTime: "18:00",
//   time: "18:00 - 20:00",
//   location: "Department of Music's Conrad Prebys Concert Hall",
//   imageUrl: "/asm-hero.png",
//   description: `The Academy Chamber Ensemble was formed in 1967, drawing its membership from the world-renowned chamber orchestra theAcademy of St Martin in the Fields, which was itself founded bySir Neville Marriner in 1958 and is currently led by Music DirectorJoshua Bell. The purpose behind the formation of the ChamberEnsemble was to perform the larger scale chamber music repertoire with players who customarily worked together, instead of the usual string quartet with additional guests. Drawn from the principal players of the orchestra and play-directed by Academy Director / Leader Tomo Keller, the Chamber Ensemble now performs in multiple configurations from wind trios to string octets. Its touring commitments are extensive and include regular tours of Europe and North America, whilst recording contracts with Philips Classics, Hyperion, and Chandos have led to the release of over thirty CDs.`
// },
// {
//   type: "Show",
//   title: "",
//   provider: "",
//   dayOfMonth: "",
//   month: "",
//   dayOfWeek: "",
//   date: "",
//   startTime: "",
//   time: "",
//   location: "Epstein Family Amphitheater",
//   imageUrl: "/webhero.png",
//   description: ``,
// }
// {
//   type: "Show",
//   title: "",
//   provider: "",
//   dayOfMonth: "",
//   month: "",
//   dayOfWeek: "",
//   date: "",
//   startTime: "",
//   time: "",
//   location: "Epstein Family Amphitheater",
//   imageUrl: "/webhero.png",
//   description: ``,
// }
// {
//   type: "Show",
//   title: "",
//   provider: "",
//   dayOfMonth: "",
//   month: "",
//   dayOfWeek: "",
//   date: "",
//   startTime: "",
//   time: "",
//   location: "Epstein Family Amphitheater",
//   imageUrl: "/webhero.png",
//   description: ``,
// }
// {
//   type: "Show",
//   title: "",
//   provider: "",
//   dayOfMonth: "",
//   month: "",
//   dayOfWeek: "",
//   date: "",
//   startTime: "",
//   time: "",
//   location: "Epstein Family Amphitheater",
//   imageUrl: "/webhero.png",
//   description: ``,
// }
// {
//   type: "Show",
//   title: "",
//   provider: "",
//   dayOfMonth: "",
//   month: "",
//   dayOfWeek: "",
//   date: "",
//   startTime: "",
//   time: "",
//   location: "Epstein Family Amphitheater",
//   imageUrl: "/webhero.png",
//   description: ``,
// }
// ];