import React from 'react'
import { useEffect } from 'react';
import Header from '../Components/Header' 

export default function FirebaseRules() {
  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className='text-2xl font-bold text-center'>This will be update soon</h1>
    </div>
  )
}
