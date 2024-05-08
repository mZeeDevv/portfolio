import React from 'react'
import profile from '../Media/0507.png'
import bg from '../Media/blue.png'
import google from '../Media/google.png'
import microsoft from '../Media/microsoft.png'
import devconnect from '../Media/Devconnect.jpg'
import dopeDevs from '../Media/dopedevs.png'
import Learing from './Learing'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navi = useNavigate()
  document.title = "mZeeDev | Home"
  return (
 <>
 <div className='flex flex-col md:flex-row max-w-6xl mx-auto md:my-16 my-3 md:space-x-7'>
     <div className='relative md:h-[400px] md:w-[400px] flex justify-center '>
     <div className=' md:top-3 absolute md:left-2 w-[300px] -z-10 h-[300px] border border-gray-300 bg-center bg-cover md:w-[400px] md:h-[400px] rounded-lg top-1 right-12'
       style={{ backgroundImage: `url(${bg})`}}></div>
       <div className='w-[300px] h-[300px] border border-gray-300 bg-center bg-cover md:w-[400px] md:h-[400px] rounded-md hover:scale-105 transition-all duration-500 '
       style={{ backgroundImage: `url(${profile})`}}></div>
     </div>

     <div className='px-1 md:w-[80%] w-full'>
      <h1 className='md:text-xl font font-semibold text-md my-2'>Hey 👋</h1>
      <h1 className='md:text-3xl text-2xl font my-2'>I'm <span className='font-bold text-blue-500'>Hamza Khattak</span></h1>
      <p className='fontDes md:leading-7 text-gray-700 my-1 leading-5 text-sm md:text-[15px]'>As an undergraduate Computer Science student at <a href='https://www.iiu.edu.pk/' className='fontPara '>International Islamic University Islamabad</a>,
       I am deeply immersed in the dynamic world of technology. 
      Specializing as a full-stack web developer, 
      my toolkit includes expertise in JavaScript, React, Vite, and Firebase, allowing me to craft seamless and interactive web experiences.</p>
      <p className='fontDes md:leading-7 text-gray-700 my-2 leading-5 text-sm md:text-[15px]'>
      Beyond the realm of coding, I have found a passion for <a className='fontPara' href='https://www.instagram.com/mzeedev/'>content creation</a>, focusing on demystifying the intricacies of Firebase and JavaScript. Through engaging and informative content, I aim to share my knowledge with the broader community, fostering a culture of learning and collaboration.
      </p>
      <p className='fontDes md:leading-7 text-gray-700 my-1 leading-5 text-sm md:text-[15px]'>In addition to my technical pursuits, I proudly serve as a <a className='fontPara' href='https://mvp.microsoft.com/en-US/studentambassadors/profile/86b7d203-f220-4c65-9d1f-dbb3046a8f8d'>Microsoft Student Ambassador</a>. 
       And Technical Team Lead at <a className='fontPara' href='https://www.linkedin.com/company/google-developer-student-club-international-islamic-university-islamabad/'>Google Developers Student Club </a> 
        International Islamic University Islamabad.
      </p>
      <p className='fontDes text-sm md:text-[15px]'>👉 Read  <span className='fontPara cursor-pointer' onClick={() => navi("/blog/from-a-gamer-to-full-stack-developer")}>How I started my Technical journey from a game</span></p>
     </div>
 </div>

   <div className=' border-t border-b border-gray-400 my-7 py-3 bg-white'>
    <h1 className='text-center md:text-3xl font py-3 text-xl font-semibold'>Communities I'm Part Of</h1>
    <div className='grid md:grid-cols-3 md:max-w-6xl mx-auto grid-cols-2 lg:grid-cols-4'>
     <div className='bg-center bg-cover md:w-[100px] md:h-[100px]  w-[70px] h-[70px] m-3' style={{backgroundImage: `url(${google})`}}></div>
     <div className='bg-center bg-cover md:w-[100px] md:h-[100px] w-[70px] h-[70px] m-3' style={{backgroundImage: `url(${microsoft})`}}></div>
     <div className='bg-center bg-cover md:w-[100px] md:h-[100px]  w-[70px] h-[70px] m-3' style={{backgroundImage: `url(${dopeDevs})`}}></div>
     <div className='bg-center bg-cover md:w-[100px] md:h-[100px]  w-[70px] h-[70px] m-3 rounded-sm' style={{backgroundImage: `url(${devconnect})`}}></div>
    </div>
   </div>
   <div>
    <Learing/>
   </div>

 </>    
  )
}
