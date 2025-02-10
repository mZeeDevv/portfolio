import React from 'react'

export default function New() {
  return (
   <>
    <div className='text-center text-2xl font-semibold pt-5'>
       I'm working on something amazing. Visit again soon!
    </div>
    <div className='text-center text-xl font-semibold py-2 text-blue-700'>
        Get free source code of this Portfilo from <a href="https://github.com/mZeeDevv/portfolio" className='underline'>HERE!</a>
    </div>
    <div
    className='flex justify-center items-center py-3'>
        <button
        className='p-3 font-semibold bg-blue-700 rounded-md text-white'
        onClick={()=>window.open('/old-/')}>
            Preview
        </button>
    </div>
   </>
  )
}
