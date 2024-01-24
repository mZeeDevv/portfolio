import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import insta from '../Media/insta.png'
import Github from '../Media/Github.png'
import link from '../Media/Link.png'
import Foother from '../Components/Foother'
export default function Contact() {
  const navi = useNavigate();
  document.title = "mZeeDev | Contact"
const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [message, setMessage] = useState(" ")
console.log(message)

  return (
    <>
      <div className='md:mx-16 flex flex-col my-3 mx-3'>
      <h1 className='text-gray-400 fontDes uppercase font-semibold text-md md:text-xl'>We Want to Hear from You</h1>
      <h1 className='uppercase font-bold md:text-2xl text-xl mb-10'>Contact Me</h1>
        <div>
        <p className='max-w-5xl mx-auto'>Fill out the form below or shoot me an email.</p>
        <div className='max-w-5xl mx-auto md:px-10 md:py-10 py-3 px-3 shadow-md bg-white'>
        <form  name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className='flex space-x-2' >
            <div className='md:w-[50%]'>
            <label className='fontDes text-gray-500' htmlFor="text">Full Name <span className='font-semibold text-red-600'>*</span></label>
            <input type="text" className='border-2 border-gray-300 rounded-md p-2 w-full' id='text' name='name' required
            value={name} onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className='md:w-[50%]'>
            <label className='fontDes text-gray-500' htmlFor="email">Email <span className='font-semibold text-red-600'>*</span></label>
            <input type="email" className='border-2 border-gray-300 rounded-md p-2 w-full' id='email' name='email' required
            value={email} onChange={(e) => setEmail(e.target.value)}
            />
            </div>
          </div>
          <label className='fontDes text-gray-500 p-3' htmlFor="message">Message <span className='font-semibold text-red-600'>*</span></label>
          <textarea
          required
                className='border-2 border-gray-300 rounded-md p-2 w-full'
                name='message'
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
          <button type="submit" className='font bg-gray-600 text-white p-3 rounded-sm'>Send message</button>
        </form>
        </div>
        </div>
        <h1 className='text-gray-400 fontDes uppercase font-semibold text-md md:text-xl mt-4'>OR CONNECT To me on</h1>
      <h1 className='uppercase font-bold md:text-2xl text-xl mb-10'>SOcial Media</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-6'>
        <div className=' bg-white shadow-md p-3 cursor-pointer flex flex-col justify-center' onClick={() => window.open('https://www.instagram.com/mzeedev/')}>
          <img src={insta} alt="insta" className='md:w-[70%] mx-auto w-[30%]'/>
          <h1 className='md:text-xl  text-center font'>mZeeDev</h1>
        </div>
        <div className=' bg-white shadow-md p-3 cursor-pointer flex flex-col justify-center' onClick={() => window.open('https://github.com/mZeeDevv')}>
          <img src={Github} alt="insta" className='md:w-[70%] mx-auto w-[30%]'/>
          <h1 className='md:text-xl  text-center font'>mZeeDevv</h1>
        </div>
        <div className=' bg-white shadow-md p-3 cursor-pointer flex flex-col justify-center' onClick={() => window.open('https://www.linkedin.com/in/mzeedev/')}>
          <img src={link} alt="insta" className='md:w-[70%] mx-auto w-[30%]'/>
          <h1 className='md:text-xl  text-center font'>Hamza Shaukat</h1>
        </div>
      </div>
      </div>
    <Foother/>
    </>
  )
}
