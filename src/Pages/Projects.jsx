import React from 'react'
import techno from '../Media/techno.png'
import CodSoft from '../Media/codesoft.png'
import realthor from '../Media/realthor.jpg'
import laugh from '../Media/laugh.jpeg'
import mechanics from '../Media/mechanics.jpg'
import weather from '../Media/weather.png'
import motors from '../Media/Motors.png'
import multi from '../Media/mutli.jpg'
import photogra from '../Media/photogra.jpg'
import api from '../Media/API.jpg'
import Foother from '../Components/Foother'
export default function Projects() {
  document.title = "mZeeDev | Projects"
  const projects = [
    {
      title: "Realthor Clone",
      image: realthor,
      link: "https://github.com/mZeeDevv/portfolio_react",
      des: "A clone of a real estate website with some functionalities. This project is made with ReactJS, TailwindCSS and Firebase.",
    },
    {
      title: "Automobile Workshop",
      image: motors,
      link: "https://test-sessions.github.io/Mechanic/index.html",
      des: "Project created for Hackathon hosted by Major League Hacking (MLH) in 2023. The project is connected with Firebase and fully functional.",
    },
    {
      title: "Automobile Workshop V2",
      image: mechanics,
      link: "https://github.com/mZeeDevv/Hackathon_Project_MLH-V2",
      des: "A project created for auto mobile workshop owner to provide his services. This project contact contact page (fully functional), Locations and offers.",
    },
    {
      title: "Photographer Website",
      image: photogra,
      link: "https://mzeedevv.github.io/Photographer-Website/",
      des: "A website that a Photographer can use to provide his services. By using this website he can introduce his self, sell this services and many more.",
    },
    {
      title: "Joke Generator",
      image: laugh,
      link: "https://mzeedevv.github.io/Joke_Generator/",
      des: "Some of bad jokers are stored in JavaScript file using arrays. Use can get different type of jokes on each click. This project is made with HTML, CSS and JavaScript.",
    },
    {
      title: "Weather App",
      image: weather,
      link: "https://mzeedevv.github.io/weather_app",
      des: "A weather app created with using a free API. This app can provide a user his city weather information such as Feels like, Humidity and Wind Speed.",
    },
    {
      title: "Multiplication App",
      image: multi,
      link: "https://github.com/mZeeDevv/Multiplication-app",
      des: "A Multiplication app/Quiz in which your score will be save in local storage, added some awesome background and effect too. Later this will be modified even more ! :)",
    },
    {
      title: "Api Projects",
      image: api,
      link: "https://github.com/mZeeDevv/All_API_Projects",
      des: "A Repository which contact some API projects that I've been created using free APIs. There is a song application which is under development will be added after I completed it.",
    },
  ]
  return (
   <>
    <div className='md:mx-16 flex flex-col my-3 mx-3 font'>
      <h1 className='md:text-xl font-bold text-blue-500'>Curious to know what I have been doing? Here's the history of my work.</h1>
      <div className='flex md:space-x-3 flex-col md:flex-row space-y-3'>
        <div className='md:w-[50%] shadow-md p-5'>
          <img src={CodSoft} alt="Int_ship" className='rounded-full md:w-[30%] border border-black w-[50%]' />
          <h1 className='text-lg font-bold my-3'>CodSoft</h1>
          <h1 className='text-lg text-gray-600'>Web Developer Intern</h1>
          <p className='text-gray-500 font'>Duration : 4 weeks</p>
          <div className=' flex items-center justify-center'>
            <a href='https://drive.google.com/file/d/1i5fySiD39OP1RxsDEEk3taW6WZ5Lhtjq/view'><button className='font bg-gray-900 text-white md:px-3 md:py-2 mt-4 rounded-md font-semibold p-2 mb-3'>Offer Letter</button></a>
          </div>
        </div>
        <div className='md:w-[50%] shadow-md p-2'>
          <img src={techno} alt="tech_no" className='md:w-[10%] bg-black rounded-full w-[20%]' />
          <h1 className='text-lg font-bold my-3'>TechnoHacks EduTech</h1>
          <h1 className='text-lg text-gray-600'>Web Developer | C++ Programmer</h1>
          <p className='text-gray-500 font'>Duration : 4 weeks</p>
          <div className=' flex items-center justify-center'>
            <a href='https://drive.google.com/file/d/1i5fySiD39OP1RxsDEEk3taW6WZ5Lhtjq/view'><button className='font bg-gray-900 text-white md:px-3 md:py-2 mt-4 rounded-md font-semibold p-2 mb-3'>Offer Letter</button></a>
          </div>
        </div>
      </div>
      <h1 className='md:text-3xl text-2xl font-bold text-center my-10'>Projects </h1>
     <div className='grid md:grid-cols-2 gap-24 lg:grid-cols-3 lg:gap-12'>
    {projects.map((project, key) => (
      <div key={key} className='bg-white'>
       <img src={project.image} alt="project" className='w-full rounded-md h-[60%]' />
        <div className='px-3 shadow-md'>
        <h1 className='text-xl font-bold my-3'>{project.title}</h1>
        <p className='text-gray-500 font'>{project.des}</p>
        <div className='flex justify-center'> 
        <a href={project.link}><button className='font bg-gray-900 text-white md:px-3 md:py-2 mt-4 rounded-md font-semibold p-2 mb-2'>Project Preview</button></a>
        </div>
        </div>
        </div>
    ))}
     </div>
    </div>
    <Foother/>
   </>
  )
}
