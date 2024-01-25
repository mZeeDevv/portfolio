import React from 'react'
import Bone from './BlogMedia/Bone.png'
import Bonetwo from './BlogMedia/2Bone.png'
import three from './BlogMedia/three.png'
import Foother from '../Components/Foother'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function FirebasexJava() {
  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);
  const navi = useNavigate()
  return (
  <>
  <div className='max-w-6xl md:mx-auto my-5 font mx-3 '>
  <h1 className='font font-bold text-blue-500 text-3xl text-center'>Adding Firebase to your JavaScript Project</h1>
 <p className='my-4 text-gray-600 md:text-xl'>Hey, Ever thought of elevating your JavaScript project to new heights of functionality and real-time capabilities? In this blog, we'll delve into the process of integrating Firebase into your JavaScript project.</p>
 <p className='text-gray-600 md:text-xl'>There are four easy steps to achieve this.</p>
 <ul className=' list-disc px-10 my-3'>
       <li className='text-black md:text-xl'>Create a Firebase project and register your app</li>
       <li className='text-black md:text-xl'>Install the SDK and initialize Firebase</li>
       <li className='text-black md:text-xl'>Access Firebase in your app</li>
    </ul>
  <h1 className='md:text-2xl text-xl font-semibold my-3'> ┈➤ Create a Firebase project and register your app</h1>
  <p className='text-gray-600 md:text-xl'>Before you can add Firebase to your JavaScript app, you need to create a Firebase project and register your app with that project. This step is quite simple</p>
  <p className='md:text-xl text-gray-600 text-sm my-3'> 👉 In Firebase console, Click <span className='text-blue-700 cursor-pointer'><a href='https://console.firebase.google.com/'>Add Project</a></span></p>
   <div className='flex justify-center flex-col items-center my-3'>
   <img src={Bone} alt="add_pro" className='rounded-md md:w-[50%]' />
   <p className=' text-gray-600 font2 font-bold'>Add Project</p>
   </div>
   <p className='md:text-xl text-gray-600 text-sm'>👉 After adding a project, The Firebase will ask you a few questions regarding the project. for example name and location </p>
  <h1 className='md:text-2xl text-xl font-semibold my-3'>┈➤ Install the SDK and initialize Firebase</h1>
  <p className='md:text-xl text-gray-600 text-sm'>This is the step to link your Firebase project with your web app. After this step your firebase will be initialize. 
  The step have further <span className='fontPara'> two</span> steps.</p>
  <p className='md:text-xl text-gray-600 text-sm mt-3'> 👉 Install Firebase using npm:</p>
  <div className='flex justify-center items-center my-10'>
    <p className='bg-[#031525] text-[#f1f3f4] font-mono py-5 rounded-md px-28 cursor-pointer'><span className='text-[#f1f3f4]'> $ </span> npm install firebase</p>
  </div>
  <p className='md:text-xl text-gray-600 text-sm mt-3'> 👉 Initialize Firebase in your app and create a Firebase App object:</p>
  <div className='flex justify-center flex-col items-center my-3'>
   <img src={Bonetwo} alt="add_pro" className='rounded-md md:w-[70%]' />
   <p className=' text-gray-600 text-center text-sm md:text-lg'>You can get your own firebaseConfig at Project Configuration</p>
   </div>
  <h1 className='md:text-2xl text-xl font-semibold my-3'>┈➤ Access Firebase in your app</h1>
  <p className='md:text-xl text-gray-600 text-sm mt-3'> We are in last step. You can know just access Firebase in your app. This step us quite simple and easy. Remember that Firebase services (like Cloud Firestore, Authentication, Realtime Database, Remote Config, and more) are available to import within individual sub-packages.</p>
  <div className='flex justify-center flex-col items-center my-4'>
   <img src={three} alt="add_pro" className='rounded-md md:w-[70%]' />
   <p className=' text-gray-600 text-center text-sm md:text-lg'>The above example shows that how can you fetch a collection of data <span className='fontPara'> listings</span> from Firebase Firestore.</p>
   </div>
  </div>
  <p className='text-center font-semibold'>Found this blog useful? I'm open for suggestion and feedback. <a className='text-blue-700 cursor-pointer' onClick={() => navi("/contact")}>Send me a message</a></p>
    <Foother/>
  </>
    
  )
}
