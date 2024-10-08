import React from 'react'
import firebase from '../Media/bfirebase.png'
import history from '../Media/bhistory.png'
import functions from '../Media/bfunctions.png'
import Footer from '../Components/Foother'
import rules from '../Media/brulesd.png'
import domc from '../Media/bdom.png'
import BBG from '../Media/BBG.png'
import { useNavigate } from 'react-router-dom'

export default function Blog() {
  document.title = "mZeeDev | Blog Articles"
  const navi = useNavigate();
  const blogs = [
    {
      title: "Exporting Grid Data to Excel file | Bryntum",
      picture: BBG,
     des: "Ever thought of exporting your grid data to an Excel file with just one click? If yes, it’s not that hard. Bryntum allows you to export the grid data to an Excel file effortlessly.",
     link: "/blog/exporting-bryntum-grid",
     read: "5 Minute read",
     Date: "15 Aug, 2024"
    },
  {
    title: "From a Gamer to Full Stack Developer",
    picture: history,
   des: "Read how a full time gamer become Full Stack Developer. What was the motivation behind it and how he achieved it.",
   link: "/blog/from-a-gamer-to-full-stack-developer",
   read: "6 Minute read",
   Date: "2 November 2023"
  },
  {
    title: "Firebase Functions",
    picture: functions,
   des: "Ever listen about Firebase Functions? If not then read this article to know about Firebase Functions and how to use them.",
   link: "/blog/firebase-functions",
   read: "5 Minute read",
   Date: "12 November 2023"
  },
  {
    title: "Firebase Realtime Database Rules",
    picture: rules,
   des: "Firebase Realtime Database Rules are very important to secure your database. Read this article to know more about Firebase Realtime Database Rules.",
   link: "/blog/firebase-realtime-database-rules",
   read: "3 Minute read",
   Date: "20 January 2024"
  },
  {
    title: "JavaScript DOM Manipulation",
    picture: domc,
   des: "JavaScript DOM Manipulation is very important to make your website dynamic. Read this article to know more about JavaScript DOM Manipulation.",
   link: "/blog/javascript-dom-manipulation",
   read: "6 Minute read",
   Date: "12 January 2024"
  },

  ]
  return (
    <>
    <div className='md:mx-16 flex flex-col my-3 mx-3'>
    <h1 className=' text-gray-400 fontDes uppercase font-semibold text-md md:text-xl'>Insights & Perspectives 💡</h1>
    <h1 className='uppercase font-bold md:text-2xl text-xl'>Blog Articles</h1>
    <div className='flex items-center md:space-x-4 shadow-xl rounded-md flex-col md:flex-row bg-white'>
      <img src={firebase} alt="blog_firebase" className='md:h-[45%] md:w-[45%] rounded-md h-[30%] w-full'/>
       <div className='w-full'>
       <div className='flex justify-between fontDes text-gray-500 my-2'>
        <p>9 December 2023</p>
        <p className='mr-2'>8 minute read</p>
      </div>
      <h1 className='md:text-2xl text-xl my-4 font-bold'>Adding Firebase to JavaScript Project</h1>
      <p className='fontDes text-gray-600 font-xs'>The complete guide of how to add Firebase to your JavaScript project. Firebase can be very useful while working on a full-stack project.</p>
      <button className='font bg-gray-900 text-white md:px-3 md:py-2 mt-4 rounded-md font-semibold p-2 mb-3' onClick={() => navi("/blog/FirebaseInJavaScript-full")}><a>Read More</a></button>
       </div>
    </div>
   
    <div className='grid md:grid-cols-2 my-5 mx-3 md:gap-4 lg:grid-cols-3 gap-3'>
      {blogs.map((blog, key) => (
      <div className='flex shadow-xl rounded-md flex-col bg-white' key={key}>
      <img src={blog.picture} alt="blog_" className='rounded-md h-[55%] w-full'/>
       <div className='w-full p-2'>
       <div className='flex justify-between fontDes text-gray-500 my-2'>
        <p>{blog.Date}</p>
        <p className='mr-2'>{blog.read}</p>
      </div>
      <h1 className='md:text-2xl text-xl my-4 font-bold'>{blog.title}</h1>
      <p className='fontDes text-gray-600 font-xs'>{blog.des}</p>
      <button className='font bg-gray-900 text-white md:px-3 md:py-2 mt-4 rounded-md font-semibold p-2 mb-3' onClick={() => navi(blog.link)}><a>Read More</a></button>
       </div>
    </div>
      ))}
    </div>
    </div>
    <Footer/>
    </>
  )
}
