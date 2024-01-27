import React from 'react'
import Header from '../Components/Header' 
import { useEffect } from 'react';

export default function FirebaseFun() {
  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className='text-2xl font-bold text-center'>This will be update soon</h1>

    </div>
  )
}
