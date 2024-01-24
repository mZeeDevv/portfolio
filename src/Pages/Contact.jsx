import React from 'react'

export default function Contact() {
  document.title = "mZeeDev | Contact"
  return (
    <>
      <div className='md:mx-16 flex flex-col my-3 mx-3'>
      <h1 className='text-gray-400 fontDes uppercase font-semibold text-md md:text-xl'>We Want to Hear from You</h1>
      <h1 className='uppercase font-bold md:text-2xl text-xl mb-10'>Contact Us</h1>
        <div>
        <p className='max-w-5xl mx-auto'>Fill out the form below or shoot me an email.</p>
        <div className='max-w-5xl mx-auto md:px-10 md:py-10 py-3 px-3 shadow-md bg-white'>
        <form className='' name='contact' method='POST' data-netlify="true" onSubmit="submit">
          <div className='flex space-x-2' >
            <div className='md:w-[50%]'>
            <label className='fontDes text-gray-500' for="text">Full Name <span className='font-semibold text-red-600'>*</span></label>
            <input type="text" className='border-2 border-gray-300 rounded-md p-2 w-full' id='text' name='name'/>
            </div>
            <div className='md:w-[50%]'>
            <label className='fontDes text-gray-500' for="email">Email <span className='font-semibold text-red-600'>*</span></label>
            <input type="email" className='border-2 border-gray-300 rounded-md p-2 w-full' id='email' name='email'/>
            </div>
          </div>
          <label className='fontDes text-gray-500 p-3' for="message">Message <span className='font-semibold text-red-600'>*</span></label>
          <textarea className='border-2 border-gray-300 rounded-md p-2 w-full' name='message' id='message'></textarea>
          <button type='submit' className='font bg-gray-300 text-white p-3 rounded-sm'>Send message</button>
        </form>
        </div>
        </div>
      </div>
    </>
  )
}
