import React from 'react'
import GTA from './BlogMedia/GTA.jpg'
import PC from './BlogMedia/PC.jpg'
import web from './BlogMedia/web.png'
import Foother from '../Components/Foother'
export default function Gamer() {
  document.title = "Blog | From a Gamer to Full Stack Developer"
  return (
    <>
    <div className='max-w-6xl mx-auto my-5 '>
     <h1 className='font font-bold text-blue-500 text-3xl text-center'>A Journey - From a Gamer to Full Stack Developer</h1>
     <div className='flex md:justify-between my-3 md:flex-row flex-col-reverse mx-2 items-center'>
     <div className='font  md:w-[100%]'>

      <h1 className='text-xl fontPara'>Hey 👋</h1>
      <p className='text-gray-500'>Welcome to the blog where I'll be sharing my personal journey, experiences, and maybe a few laughs along the way. Let's dive into this adventure together!</p>

      <h1 className='font-semibold text-2xl my-3'>Late Night Adventures in GTA-SA (2020):</h1>
      <p className='my-3 text-gray-500'>In the vibrant gaming landscape of 2020, my world revolved around the immersive realms of Grand Theft Auto: San Andreas (GTA-SA). Nights were spent in the company of friends on 
        <span className='fontPara'> Teamspeak</span>, navigating the digital streets of San Andreas, and relishing the thrill of engaging in intense battles with rival game hoods. The game's diverse features became the backdrop for countless memories and camaraderie.</p>
      <p className='text-gray-500'>However, the narrative took an unexpected turn when my gaming escapades hit a roadblock. The revelation of my use of <span className='fontPara'> Aimbot</span>, a form of cheating, led to a decisive ban from the server for a daunting 30 days 😭.</p>
      <p className='my-3 text-gray-500'>Refusing to let this setback be the end of my gaming journey, I decided to carve out my own path by establishing a personal server. Seeking guidance, I turned to my cousin, a seasoned full-stack developer. Under his mentorship, I embarked on the journey of learning <span className='fontPara'>PAWN</span>, a programming language essential for creating servers on SA-MP, the online iteration of GTA-SA.</p>
      <h1 className='font-semibold text-2xl my-3'>Discovering a Passion for Programming 💡</h1>
      <p className='my-3 text-gray-500'>As I delved into the intricacies of server creation, my cousin, ever the pragmatist, warned me about the potential pitfalls of investing time in an aging game. Initially dismissing his advice, I found myself captivated by the world of programming that PAWN introduced. The process of coding, debugging, and optimizing the server sparked a newfound passion.</p>
      <p className='my-3 text-gray-500'>Acknowledging the transformative potential of programming skills for the future, I sought a roadmap from my cousin. While the realms of <span className='fontPara'>HTML and CSS</span> felt like familiar terrain, the introduction of <span className='fontPara'> JavaScript</span> proved to be a formidable challenge. The transition from gaming enthusiast to server creator opened up a world of possibilities, reshaping not just my digital adventures but also my understanding of technology and its potential impact on my future endeavors.</p>
     </div>
     <div className=' flex flex-col items-center md:justify-center lg:w-[60%] md:w-[60%]'>
     <img src={GTA} alt="GTA_SA" className='w-[80%] rounded-md ' />
     <p className=' text-gray-500 p-1 m-1 border-lg font-mono text-center '>Grand Theft Auto: San Andreas</p>

      <img src={PC} alt="PC" className='w-[40%] rounded-md mt-6' />
     <p className=' text-gray-500 p-1 m-1 border-lg font-mono '>mZeeDev's PC (2019)</p>

     <img src={web} alt="PC" className='w-[80%] rounded-md mt-6' />
     <p className=' text-gray-500 p-1 m-1 border-lg font-mono  text-center'>mZeeDev's First Website (2021)</p>
     </div>
     </div>
     <p className='text-center text-sm font bg-yellow-600 text-white md:rounded-full rounded-md mx-2 my-6 p-2'>I really miss my friends I met during my gaming period they were from different countries like India, Bangladesh, USA etc. Those year left a very memorable mark on my career which is unforgettable. ❤️</p>
    </div>
    <Foother/>
    </>
  )
}
