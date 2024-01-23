import React from 'react'
import firebase from '../Media/bfirebase.png'
import history from '../Media/bhistory.png'

export default function Blog() {
  document.title = "mZeeDev | Blog Articles"
  const blogs = [
  {
    title: "Adding Firebase to JavaScript Project",
    picture: history,
   des: "Read how a full time gamer become Full Stack Developer. What was the motivation behind it and how he achieved it.",
   link: "",
   read: "6 Minutes",
   Date: "2 November 2023"
  }
  ]
  return (
    <>
    <div className='md:mx-16 flex flex-col my-3 mx-1'>
    <h1 className=' text-gray-400 fontDes uppercase font-semibold text-md md:text-xl'>Insights & Perspectives 💡</h1>
    <h1 className='uppercase font-bold md:text-2xl text-xl'>Blog Articles</h1>
    <div className='flex items-center md:space-x-4 shadow-xl rounded-md flex-col md:flex-row'>
      <img src={firebase} alt="blog_firebase" className='md:h-[45%] md:w-[45%] rounded-md h-[30%] w-full'/>
       <div className='w-full'>
       <div className='flex justify-between fontDes text-gray-500 my-2'>
        <p>9 December 2023</p>
        <p className='mr-2'>8 minutes</p>
      </div>
      <h1 className='md:text-2xl text-xl my-4 font-bold'>Adding Firebase to JavaScript Project</h1>
      <p className='fontDes text-gray-600 font-xs'>The complete guide of how to add Firebase to your JavaScript project. Firebase can be very useful while working on a full-stack project.</p>
      <button className='font bg-gray-900 text-white md:px-3 md:py-2 mt-4 rounded-md font-semibold p-2 mb-3'><a>Read More</a></button>
       </div>
    </div>
   
    <div className='grid md-grid-cols-2 bg-red-200'>
      {blogs.map((blog) => (
        <div>
      <div className='flex items-center md:space-x-4 shadow-xl rounded-md flex-col'>
      <img src={blog.picture} alt="blog_firebase" className='md:h-[45%] md:w-[45%] rounded-md h-[30%] w-full'/>
       <div className='w-full'>
       <div className='flex justify-between fontDes text-gray-500 my-2'>
        <p>{blog.Date}</p>
        <p className='mr-2'>{blog.read}</p>
      </div>
      <h1 className='md:text-2xl text-xl my-4 font-bold'>{blog.title}</h1>
      <p className='fontDes text-gray-600 font-xs'>{blog.des}</p>
      <button className='font bg-gray-900 text-white md:px-3 md:py-2 mt-4 rounded-md font-semibold p-2 mb-3'><a>Read More</a></button>
       </div>
    </div>
        </div>
      ))}
    </div>
  



    </div>
    </>
  )
}
