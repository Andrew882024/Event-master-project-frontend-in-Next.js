export type EventInfo = {
  eventId: string;
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
  eventId: "id_1",
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


export const EventInfoList: EventInfo[] = [{
  eventId: "id_1",
  type: "Music",
  title: "Academy of St. Martin in the Fields Chamber Ensemble",
  provider: "Chamber Music | UK",
  dayOfMonth: "09",
  month: "OCT",
  dayOfWeek: "THU",
  date: "2025-07-15",
  startTime: "18:00",
  time: "18:00 - 20:00",
  location: "Department of Music's Conrad Prebys Concert Hall",
  imageUrl: "/asm-hero.png",
  description: `The Academy Chamber Ensemble was formed in 1967, drawing its membership from the world-renowned chamber orchestra theAcademy of St Martin in the Fields, which was itself founded bySir Neville Marriner in 1958 and is currently led by Music DirectorJoshua Bell. The purpose behind the formation of the ChamberEnsemble was to perform the larger scale chamber music repertoire with players who customarily worked together, instead of the usual string quartet with additional guests. Drawn from the principal players of the orchestra and play-directed by Academy Director / Leader Tomo Keller, the Chamber Ensemble now performs in multiple configurations from wind trios to string octets. Its touring commitments are extensive and include regular tours of Europe and North America, whilst recording contracts with Philips Classics, Hyperion, and Chandos have led to the release of over thirty CDs.`
},
{
  eventId: "id_2",
  type: "Show",
  title: "Soul Science Lab: Make a Joyful Noize",
  provider: "Family",
  dayOfMonth: "04",
  month: "SEP",
  dayOfWeek: "THU",
  date: "2025-09-04",
  startTime: "7:30 pm",
  time: "2 hours",
  location: "Epstein Family Amphitheater",
  imageUrl: "/webhero.png",
  description: `Make a Joyful Noize (MAJN) is a multimedia experience that blends music, film and movement to capture the visceral and contagious energy of Black joy. Joy gives us a reason to live, even when it seems life has forsaken us. Black joy is entertainment, therapy, self-love, and salvation. It is the thing that allows us to still laugh and love.

Soul Science Lab (SSL) is a music and multimedia duo powered by Chen Lo and Asante Amin. The two are storytellers who inspire the future with hip hop, jazz, soul and stunning visuals installations. The duo’s current projects include Soundtrack ’63, Make a Joyful Noize (commissioned by Carnegie Hall), and The Renaissance Mixtape (commissioned by the Apollo Theater). SSL has released three studio albums: Footprints, The Visitor: Alter Destiny, and Plan for Paradise. SSL has also developed a culturally responsive education platform for music creatives and educators at Soul Science University—just call them innovative Afro-futuristic griots.`,
},
{
  eventId: "id_3",
  type: "Show",
  title: "(Canceled) Celebrate Ameri’KANA",
  provider: "Global Music",
  dayOfMonth: "16",
  month: "SEP",
  dayOfWeek: "TUE",
  date: "2025-09-16",
  startTime: "7:30 PM",
  time: "2 hours",
  location: "Epstein Family Amphitheater",
  imageUrl: "/amerikana-hero.png",
  description: `Featuring Rubén Albarrán from Cafe Tacvba, Making Movies, and La Lulu
Founded by the Latin Grammy-nominated band Making Movies, Celebrate AMERI’KANA is a traveling festival celebrating the diverse colors of American music. Looking to redefine “Americana,” the festival highlights the crossroads of languages and rhythms that shape the musical identity of the Americas.

This year, the festival welcomes Rubén Albarrán, the legendary frontman of Café Tacvba and one of Latin America’s most influential and innovative artists. For over three decades, Rubén has shaped the sound of Latin rock, blending traditional Mexican music with alternative rock, electronic, and experimental styles—pushing artistic boundaries at every turn. With a voice Billboard calls “a multifaceted wonder,” Rubén has captivated audiences around the world, whether delivering a piercing ballad, an explosive punk chorus, or an electrifying DJ set.

Beyond his iconic work with Café Tacvba, Rubén has collaborated with artists like Calle 13, Natalia Lafourcade, Julieta Venegas, and Gustavo Santaolalla. Under his DJ moniker Pinche Pinchadiscos, he brings that same boundary-defying spirit to the dance floor, spinning global beats with the energy and theatricality that have defined his career. From massive festivals like Rock al Parque and Ruido Fest to sold-out club nights in Berlin and Bogotá, Rubén’s performances are celebrations of rhythm, resistance, and cultural pride.

Making Movies is a band based in the United States with a sound Rolling Stone describes as “an eclectic blend of rumbero percussions, delicate organs, and grungy fuzz rock.” Led by Panamanian singer/guitarist Enrique Chi, Mexican-American percussionist and keyboardist Juan-Carlos Chaurand, and drummer Duncan Burnett, the band rose to acclaim through a decade of relentless touring in the US and Latin America.

The band collaborated with Rubén Blades on the single “No Te Calles,” which NPR included in their Best of 2019 list and became the opening track of his album Paraiso Road Gang, nominated for Latin Grammy Album of the Year. They’ve also toured alongside Los Lobos, Ozomatli, Hurray For the Riff Raff, Thievery Corporation, and more.

La Lulu, a Latin Grammy-winning violinist, vocalist, and dancer whose explosive stage presence channels the soul of cumbia through a New York lens. Born in Cali, Colombia and raised in NYC, La Lulu fuses salsa, spanglish rhymes, and unapologetic energy into music that is both deeply rooted and fiercely contemporary.`,
},
{
  eventId: "id_4",
  type: "Music",
  title: "Nate Smith and Keyon Harrold",
  provider: "Jazz | USA",
  dayOfMonth: "23",
  month: "SEP",
  dayOfWeek: "TUE",
  date: "2025-09-23",
  startTime: "7:30 PM",
  time: "2 hours",
  location: "Epstein Family Amphitheater",
  imageUrl: "/nate-keyon-hero.jpg",
  description: `Celebrating John Coltrane
Don’t miss this one-night-only powerhouse jazz double bill. Drumming virtuoso Nate Smith and visionary trumpeter Keyon Harrold each take the spotlight—delivering two electrifying sets from two of today’s most acclaimed and innovative jazz artists.

About Nate Smith

Nate Smith is a drummer, composer, & producer from Chesapeake, Virginia. His visceral, instinctive, and deep-rooted style of drumming and his talent as a composer and arranger has led to three GRAMMY® nominations and work with esteemed artists, including: Pat Metheny, Dave Holland, Brittany Howard, Van Hunt, The Fearless Flyers, Norah Jones, Childish Gambino, Jon Batiste, and Somi. Smith fuses his original compositions with an eclectic mix of music, including everything from jazz to R&B to hip-hop to pop. In recent years, Smith’s viral videos have been viewed by millions of people, underscoring his popularity as one of the most influential drummers of his generation. 

About Keyon Harrold

Keyon Harrold first came into the International spotlight for his work as the trumpet voice behind the Grammy winning Don Cheadle film Miles Ahead, and his critically acclaimed album, The Mugician, (Sony Legacy / Mass Appeal). As a bandleader, he has created a compelling new statement with a riveting mix of jazz, Afrobeat, soul, spoken word, hip-hop, blues, rock, and even American folk. As a soloist, his distinctly warm trumpet sound simmers in the middle register; creating drama without aggrandizing, and mesmerizing live audiences with an emotionally charged concert presentation. Wynton Marsalis has stated “Keyon Harrold is the future of the trumpet”. In addition to being one of the leading voices in Jazz Music, Keyon Harrold has collaborated with many of the top hip hop and pop artists including: Snoop Dogg, Jay Z, Beyonce, Rihanna, Eminem, Maxwell, and Anthony Hamilton, and rock legends Keith Richards and Jeff Beck. These experiences broadened his musical horizons beyond jazz to include funk, Afrobeat, R&B, rock and roll, and hip hop.`,
},
{
  eventId: "id_5",
  type: "Show",
  title: "Bia Ferreira",
  provider: "Global Music | Brazil",
  dayOfMonth: "24",
  month: "SEP",
  dayOfWeek: "WED",
  date: "2025-09-24",
  startTime: "8 PM",
  time: "2 hours",
  location: "Epstein Family Amphitheater",
  imageUrl: "/biaferreira-hero.png",
  description: `Bia Ferreira is a Brazilian singer, composer, and artivist whose “Música de Mulher Preta” (Black Woman Music) confronts racism, homophobia, and champions feminism and love through powerful, socially conscious songs.

As a teenager, Bia left home with just her guitar and began traveling across Brazil, performing wherever she could—on streets, in cafés, and in any venue that welcomed her. Her music carried messages of love while boldly addressing feminism, racism, and homophobia, reaching anyone willing to listen.

Her breakthrough came during a Sofar Sounds session, where she performed “Cota Não É Esmola.” The song went viral, amassing over 13 million views on YouTube. Since 2017, Bia has performed throughout Brazil and across Europe. A standout moment came in October 2022 at WOMEX in Lisbon, where her showcase was hailed as one of the festival’s best. It marked a turning point, allowing her message—sung entirely in Portuguese—to resonate with global audiences.

`,
},
{
  eventId: "id_6",
  type: "Show",
  title: "LA LOM",
  provider: "Global Music | USA",
  dayOfMonth: "26",
  month: "SEP",
  dayOfWeek: "FRI",
  date: "2025-09-26",
  startTime: "7 pm",
  time: "2 hours",
  location: "Epstein Family Amphitheater",
  imageUrl: "/lalom-hero.png",
  description: `Opener: El Marchante
The Los Angeles League of Musicians, LA LOM, are an instrumental trio formed in Los Angeles in 2021. They blend the sounds of Cumbia Sonidera, 60’s soul ballads and classic romantic boleros that emanate from radios, backyard parties and dance clubs of Los Angeles with the twang of Peruvian Chicha and Bakersfield Country.`,
}
];