import React from 'react'
import CUI from '../Media/cui.jpg'
import iiui from '../Media/iiui.jpg'
import mlsa from '../Media/MLSA.jpg'
import coming from '../Media/coming.png'
import Edopedevs from '../Media/Edopedevs.png'
import innovate from '../Media/innovate.jpg'
import Foother from '../Components/Foother'
import maaz from '../Media/maaz.jpg'
import web from '../Media/WebS.png'
export default function Events() {
  const events = [
    {
      image: mlsa,
      title: "Da JavaScript Hour",
      des: "Event all about JavaScript, JavaScript and JavaScript. Our JavaScript event for Beginners event! If you've ever wanted to learn coding but didn't know where to start, this is your chance. Join us this Friday for a fun and easy introduction to JavaScript.",
      link: "https://stdntpartners-my.sharepoint.com/:v:/g/personal/wardah_abbasi_studentambassadors_com/EVX4UkR2sipKjoudAbpZTWkBPgs9GW7wIrTHUDe9MTu6RQ?e=wsos1D ",
      date: "Friday, October 26, 2024",
      duration: "1.5 Hour"
    },
    {
      image: iiui,
      title: "Hackaware",
      des: "Ever wondered how hackathons can supercharge your skills and open new doors in tech?🤔❓ We're excited to bring you the Awareness of Hackathon session, hosted by the Google Developer Student Club (GDSC) at IIUI, featuring the incredible speaker, Hamza Shaukat!",
      link: "https://gdsc.community.dev/events/details/developer-student-clubs-international-islamic-university-islamabad-presents-hackaware/",
      date: "Saturday, November 19, 2023",
      duration: "1 Hour"
    },
    {
      image: CUI,
      title: "Hackathon 101 Guide",
      des: "Come and discover the exciting opportunities that hackathons offer and kickstart your journey into the world of innovation and problem-solving. Don't miss this chance to ignite your passion for technology and make lasting connections with fellow developers. Join us for Hackathon 101 and set yourself up for hackathon success!",
      link: "https://gdsc.community.dev/events/details/developer-student-clubs-comsats-university-sahiwal-campus-presents-hackathon-101-code-collaborate-create-your-hackathon-guide/",
      date: "Saturday, October 14, 2023",
      duration: "1 Hour"
    },
    {
      image: Edopedevs,
      title: "The 2023 Web Developer",
      des: "Your niche is where you thrive! Discover yours at 'The 2023 Web Developer' event and stand out in the web dev cosmos.We are happy to see people learning new things and even more happy to see them talking and sharing knowledge with others on socials.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7136008060346454016",
      date: "Saturday, November 4, 2023",
      duration: "1.5 Hour (As a Host)"
    },
    {
      image: web,
      title: "Web Spark Series ",
      des: "Web Spark Series is a series of events that will help you learn the basics of web development. The series will cover the basics of HTML, CSS, and JavaScript. So join us to get your hands dirty with code and learn the basics of web development.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7157442096721756160",
      date: "Sunday, 28th January, 2024",
      duration: "Bootcamp"
    },
    {
      image: innovate,
      title: "Innovate-U Conference'24",
      des: "The theme Empowering Tomorrow Navigating the Intersection of Emerging IT Technologies set the stage for an inspiring exploration into the world of cutting-edge technologies and their impact on the job market.Our esteemed lineup of speakers, each an industry expert, explored key domains essential for success in todays IT landscape",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7165771320444477441?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7165771320444477441%29",
      date: "Tuesday, 20th February, 2024",
      duration: "7 Hours"
    },
    {
      image: maaz,
      title: "Introduction to Artificial Intelligence",
      des: "Join us as we delve into the fascinating world of Artificial Intelligence. From fundamental concepts to practical applications, this workshop is designed to equip you with the knowledge and skills to thrive in the AI-driven era. Join us for a dynamic workshop exploring the journey from research to commercialization in Artificial Intelligence, featuring Maaz Ali Nadeem. Gain insights into the exciting prospects of AI and its real-world applications.",
      link: "https://www.linkedin.com/posts/computer-science-society-css_ai-artificialintelliegence-activity-7169602712710365185-hGGJ?utm_source=share&utm_medium=member_desktop",
      date: "Thursday, 7th March, 2024",
      duration: "2 Hours"
    },
    {
      image: coming,
      title: "Exploring Firebase ",
      des: "Firebase is a Backend-as-a-Service (BaaS) app development platform that provides hosted backend services such as a realtime database, cloud storage, authentication, crash reporting, machine learning, remote configuration, and hosting for your static files.",
      link: "",
      date: "9 February, 2024",
      duration: "TBD"
    },
  ]
  return (
  <>
    <div className='md:mx-16 flex flex-col my-3 mx-3'>
    <h1 className=' text-gray-400 fontDes uppercase font-semibold text-md md:text-xl'>Chronicles of mZeeDev 💡</h1>
    <h1 className='uppercase font-bold md:text-xl text-md'>Past Gems & Upcoming Marvels</h1>
     {events.map((event, key) => (
     <div className='flex shadow-md rounded-md my-5 flex-col lg:flex-row bg-white ' key={key}>
     <img src={event.image} alt="blog_" className='rounded-sm lg:w-[35%] w-full lg:border-r-2 md:border-gray-500 border-b border-gray-600'/>
      <div className='w-full p-2 flex flex-col justify-center'>
      <div className='flex justify-between fontDes text-gray-500 my-2'>
       <p>{event.date}</p>
       <p className='mr-2'>{event.duration}</p>
     </div>
     <h1 className='md:text-2xl text-xl my-4 font-bold uppercase'>{event.title}</h1>
     <p className='fontDes text-gray-600 font-xs'>{event.des}</p>
     <button className='font bg-gray-900 text-white md:px-3 md:py-2 mt-4 rounded-md font-semibold p-2 mb-3 lg:w-[30%] w-[60%]'><a href={event.link}>Complete Event Details</a></button>
      </div>
   </div>
     ))}

    </div>
    <Foother/>
    </>
  )
}
