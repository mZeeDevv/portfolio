import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Foother() {
  return (
    <>
    <div className='mt-24 border-t border-gray-400 pt-4 flex justify-between items-center'>
        <h1 className='font-semibold font2 text-gray-500 text-3xl ml-2 '><a href='mzee.dev'>&copy;mZeeDev</a></h1>
       <div className='flex text-3xl space-x-3 mr-2'>
       <a href='https://www.linkedin.com/in/mzeedev/'><FaLinkedin/></a>
        <a href='https://www.instagram.com/mzeedev/'><FaSquareInstagram/></a>
        <a href='https://twitter.com/mZeeDev'><FaSquareXTwitter/></a>
       </div>
    </div>
    </>
  )
}
