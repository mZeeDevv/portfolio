import React from 'react'
import teaching from '../Media/teaching.png'
import Ecma from '../Media/Ecma.png'
import console from '../Media/consoletable.png'
import Higher from '../Media/Higher.png'
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
]
  return (
    <>
     <div>
      <h1 className='text-center text-gray-400 fontDes uppercase font-semibold text-md md:text-xl'>From Learning</h1>
      <h1 className='text-center uppercase font-bold md:text-2xl text-xl'>TO teaching and Guiding</h1>
      <div className='flex md:flex-row mx-1 justify-between my-10 md:mx-28 flex-col'>
       
        <div className=' flex flex-col md:w-[50%]'>
          <h1 className='text-2xl font font-semibold'>Simple Content</h1>
          <p className='fontDes md:leading-7 text-gray-700 my-1 leading-5 text-sm md:text-[15px]'>As a content creator, my mission is to demystify the world of web development and make JavaScript, its frameworks, and Firebase more accessible to everyone. Whether you're a beginner taking your first steps into the coding world or an experienced developer seeking to deepen your knowledge, you're in the right place.</p>
        </div>
        <div className='flex justify-center'>
          <div className='bg-center bg-cover md:h-[300px] md:w-[300px] float_sm h-[200px] w-[200px]' style={{backgroundImage: `url(${teaching})`}}></div>
        </div>
      </div>
     </div>


  <div className='grid md:grid-cols-2 md:space-x-8 lg:grid-cols-3 lg:space-x-3 lg:mx-24'>
  {content.map((item, key) => (
      <div className='md:w-[400px] md:h-[520px] h-[550px] md:my-10 my-4 shadow-md rounded-md hover:scale-110 transition duration-500'>
          <div className='bg-center bg-cover w-full h-[55%] rounded-md' style={{backgroundImage: `url(${item.image})`}}></div>
         <div className='p-3'>
         <p className='text-xs text-gray-600 font my-1'>{item.date}</p>
         <h1 className='text-lg font-semibold'>{item.title}</h1>
         <p className='text-sm text-gray-600 font'>{item.description}</p>
          <button className='font bg-gray-400 text-white m-3 p-3 rounded-md'><a href={item.link}>Read More</a></button>
         </div>
      </div>
     ))}
  </div>
    </>
  )
}
