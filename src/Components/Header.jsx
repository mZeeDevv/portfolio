import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Header() {
  const Navigator = useNavigate();
  return (
    <>
    <div className='py-5 border-b border-gray-300 '>
    <div className='flex items-center lg:space-x-96 lg:max-w-5xl max-w-2xl mx-auto'>
    <h1 className='text-2xl lg:text-3xl font-bold lg:inline font2 cursor-pointer hidden'>mZee.dev</h1>
    <ul className='flex lg:space-x-10 w-full justify-center space-x-3 text-xs'>
      <li className='font md:text-xl hover:scale-110 transition-all duration-500 hover:underline text-gray-700 cursor-pointer' onClick={() => Navigator("/")}>Home</li>
      <li className='font md:text-xl hover:scale-110 transition-all duration-500 hover:underline text-gray-700 cursor-pointer' onClick={() => Navigator("/blog")}>Blog</li>
      <li className='font md:text-xl hover:scale-110 transition-all duration-500 hover:underline text-gray-700 cursor-pointer' onClick={() => Navigator("/projects")}>Projects</li>
      <li className='font md:text-xl hover:scale-110 transition-all duration-500 hover:underline text-gray-700 cursor-pointer' onClick={() => Navigator("/events")}>Events</li>
      <li className='font md:text-xl hover:scale-110 transition-all duration-500 hover:underline text-gray-700 cursor-pointer' onClick={() => Navigator("/contact")}>Contact</li>
    </ul>
    </div>
    </div>

    </>
  )
}
