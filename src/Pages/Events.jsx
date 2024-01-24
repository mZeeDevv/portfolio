import React from 'react'
import CUI from '../Media/cui.jpg'
import iiui from '../Media/iiui.jpg'
export default function Events() {
  const events = [
    {
      image: CUI,
      title: "Hackathon 101 Guide",
      des: "Come and discover the exciting opportunities that hackathons offer and kickstart your journey into the world of innovation and problem-solving. Don't miss this chance to ignite your passion for technology and make lasting connections with fellow developers. Join us for Hackathon 101 and set yourself up for hackathon success!",
      link: "https://gdsc.community.dev/events/details/developer-student-clubs-comsats-university-sahiwal-campus-presents-hackathon-101-code-collaborate-create-your-hackathon-guide/",
      date: "Saturday, October 14, 2023",
      duration: "1 Hour"
    },
    {
      image: iiui,
      title: "Hackaware",
      des: "Ever wondered how hackathons can supercharge your skills and open new doors in tech?🤔❓ We're excited to bring you the Awareness of Hackathon session, hosted by the Google Developer Student Club (GDSC) at IIUI, featuring the incredible speaker, Hamza Shaukat!",
      link: "https://gdsc.community.dev/events/details/developer-student-clubs-international-islamic-university-islamabad-presents-hackaware/",
      date: "Saturday, November 19, 2023",
      duration: "1 Hour"
    },

  ]
  return (
    <div className='md:mx-16 flex flex-col my-3 mx-3'>
    <h1 className=' text-gray-400 fontDes uppercase font-semibold text-md md:text-xl'>Chronicles of mZeeDev 💡</h1>
    <h1 className='uppercase font-bold md:text-xl text-md'>Past Gems & Upcoming Marvels</h1>
     {events.map((event, key) => (
     <div className='flex shadow-xl rounded-md my-5 flex-col lg:flex-row' key={key}>
     <img src={event.image} alt="blog_" className='rounded-md lg:w-[35%] w-full'/>
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
  )
}
