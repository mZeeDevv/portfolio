import React from 'react'
import teaching from '../Media/teaching.png'
import Ecma from '../Media/Ecma.png'
import console from '../Media/consoletable.png'
import Higher from '../Media/Higher.png'
import Foother from '../Components/Foother'
import Firebase from '../Media/Firebase.png'
import Hannan from '../Media/Hannan.jpeg'
import Laiba from '../Media/laiba.jpeg'
import Arsalan from '../Media/Arsalan.jpeg'
import Ayesha from '../Media/Ayesha.png'
export default function Learing() {
 const content = [{
  title: 'ES16 Features', 
  description: 'The ECMAScripts 2023 features are mind-blowing 😶‍🌫️.  ECMA is best known for its work on the standardization of programming languages, including JavaScript.The most notable standard developed by ECMA....',
  image: Ecma,
  date: "26 Dec 2023",
  link: "https://www.instagram.com/p/C1T7io_t71I/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
 },
  {
    title: 'Higher Order Functions', 
  description: 'In JavaScript, a higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. Higher-order functions enable you to abstract over actions....',
  image: Higher,
  date: "25 Dec 2023",
  link: "https://www.instagram.com/p/C1QkAzZICng/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: 'Creating Table in Console', 
  description: 'If you want to create a table-like structure in the console using plain JavaScript, you can use a combination of console.log statements to print rows and columns. This can be achieve with two diff....',
  image: console,
  date: "11 Jan 2024",
  link: "https://www.instagram.com/p/C1942t-tydN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: 'Firebase in JavaScript', 
  description: 'To add Firebase to your JavaScript project, you wll need to follow these general steps. Firebase provides a set of services such as Realtime Database, Authentication, Cloud Firestore, Cloud Functions, Hosting, etc. The specific services you need wil....',
  image: Firebase,
  date: "5 Jan 2024",
  link: "https://www.instagram.com/p/C1uOLCetOu6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
]
  return (
    <>
     <div>
      <h1 className='text-center text-gray-400 fontDes uppercase font-semibold text-md md:text-xl'>From Learning</h1>
      <h1 className='text-center uppercase font-bold md:text-2xl text-xl'>TO teaching and Guiding</h1>
      <div className='flex md:flex-row mx-1 justify-between my-10 lg:mx-28 flex-col md:mx-3'>
       
        <div className=' flex flex-col md:w-[50%]'>
          <h1 className='text-2xl font font-semibold'>Simple Content</h1>
          <p className='fontDes md:leading-7 text-gray-700 my-1 leading-5 text-sm md:text-[15px]'>As a content creator, my mission is to demystify the world of web development and make JavaScript, its frameworks, and Firebase more accessible to everyone. Whether you're a beginner taking your first steps into the coding world or an experienced developer seeking to deepen your knowledge, you're in the right place.</p>
        </div>
        <div className='flex justify-center'>
          <div className='bg-center bg-cover md:h-[300px] md:w-[300px] float_sm h-[200px] w-[200px]' style={{backgroundImage: `url(${teaching})`}}></div>
        </div>
      </div>
     </div>

  <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-6  gap-6 md:max-w-7xl md:mx-auto mx-3'>
  {content.map((item, key) => (
      <div className='shadow-md rounded-md bg-white' key={key}>
      <img src={item.image} alt={`content{${key}}`} className='w-full rounded-md h-[420px]'/>
      <div className='px-3 my-3'>
         <p className='text-xs text-gray-600 font my-1'>{item.date}</p>
         <h1 className='text-lg font-semibold'>{item.title}</h1>
         <p className='text-sm text-gray-600 font'>{item.description}</p>
          <button className='font bg-gray-900 text-white p-2 m-2 rounded-md font-semibold'><a href={item.link}>Read More</a></button>
         </div>
  </div>
     ))}
  </div>



    <div className='flex justify-center items-center'>
  <button className='font bg-gray-900 text-white m-3 p-3 rounded-md hover:bg-gray-500 transition duration-300 '><a href='https://www.instagram.com/mzeedev/'>Explore More</a></button>
    </div>
   

   <div className='bg-gray-900 text-white font py-10'>
    <h1 className='text-center font-semibold uppercase text-xl text-gray-300'>Experts Speak</h1>
    <h1 className='text-center uppercase text-2xl font-bold'>Leadership and Developer Feedback</h1>
    <div className=' grid md:grid-cols-2 md:mx-24 my-4'>

      <div className='bg-white text-black p-4 my-4 mx-3'>
        <div className='flex items-center space-x-3'>
        <div className='rounded-full w-[70px] h-[70px]'>
          <img src={Hannan} alt="hanna_img" className='rounded-full w-[100%]' />
        </div>
       <div>
       <h1 className=' font-semibold'>Hannan Khan</h1>
        <p className='text-xs text-gray-500'>Technical Community Manager @  International Connector</p>
       </div>
        </div>
        <p className='my-2 text-gray-500 text-sm'>I’ve had the pleasure of seeing Hamza grow to be a one of the most promising voices in the Pakistani tech community. His knowledge of web technologies and his active participation in community building space are admirable to say the least. I’m eager to see what he is able to achieve next!</p>
      </div>


      <div className='bg-white text-black p-4 my-4 mx-3'>
        <div className='flex items-center space-x-3'>
        <div className='rounded-full w-[70px] h-[70px] bg-gray-500'>
        <img src={Arsalan} alt="hanna_img" className='rounded-full w-[100%]' />
        </div>
       <div>
       <h1 className=' font-semibold'>Arsalan Khattak</h1>
        <p className='text-gray-400 text-sm'>DevRel @ Bryntum </p>
       </div>
        </div>
        <p className='my-2 text-gray-500 text-sm'>REVIEW HERE --- In JavaScript, a higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result</p>
      </div>


      <div className='bg-white text-black p-4 mx-3 my-3'>
        <div className='flex items-center space-x-3'>
        <div className='rounded-full w-[70px] h-[70px] bg-gray-500'>
        <img src={Laiba} alt="hanna_img" className='rounded-full w-[100%]' />
        </div>
       <div>
       <h1 className=' font-semibold'>Laiba Shehryar</h1>
        <p className='text-sm text-gray-400'>Campus Lead @ Microsoft Learn Student Ambassadors - IIUI</p>
       </div>
        </div>
        <p className='my-2 text-gray-500 text-sm'>
        I've witnessed Hamza's remarkable journey, evolving into a prominent figure in the Pakistan's tech community. I am thoroughly impressed by his profound insights into the tech industry, coupled with a remarkable perception that showcases his exceptional understanding. Hamza's dedication, hard work, and persistence in the tech community are truly admirable. His contributions to various tech communities are noteworthy. I look forward to witnessing his future accomplishments!
        </p>
      </div>

      <div className='bg-white text-black p-4 mx-3 my-3'>
        <div className='flex items-center space-x-3'>
        <div className='rounded-full w-[70px] h-[70px]'>
        <img src={Ayesha} alt="hanna_img" className='rounded-full w-[100%]' />
        </div>
       <div>
       <h1 className=' font-semibold'>Ayesha Tahir Awan</h1>
        <p className='text-sm text-gray-400'>Campus Lead @ Google Developer Student Club - IIUI</p>
       </div>
        </div>
        <p className='my-2 text-gray-500 text-sm'>A big shoutout to our Rockstar Technical Team Lead, Hamza. He is undeniably the heart and soul of our GDSC crew.

Hamza is the brains behind "DevConnect," the pioneering tech community at IIUI. He not only built an outstanding tech team in the boys' campus but also ensured we could keep rocking those bootcamps by designing agendas and developing teams for solution challenges together. Always ready to share his tech skills and lend a hand, Hamza has been a speaker at numerous tech events.

In short, Hamza is the real MVP and a crucial asset to our organization. High-fives all around for making GDSC awesome! 
</p>
      </div>
    </div>
   </div>
   <Foother/>
    </>
  )
}
