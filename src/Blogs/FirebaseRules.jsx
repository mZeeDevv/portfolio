import React, { useState } from 'react'
import { useEffect } from 'react';
import BR1 from '../Blogs/BlogMedia/BR1.png'
export default function FirebaseRules() {
  const [content, setContent] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <div className='max-w-6xl mx-auto my-5 '>
     <h1 className='font font-bold text-blue-500 text-3xl text-center'>Firebase Realtime Database Rule</h1>
     <div className='flex md:justify-between my-3 md:flex-row flex-col-reverse mx-2 items-center'>
      <div>
      <p className='my-3 text-gray-500'>When working with Firebase, it's important to use Firestore Database for saving different types of data. However, you must familiarize yourself with its security rules before using it. Without proper security, your data can be vulnerable, while overly strict rules might cause issues with accessibility. Striking the right balance is key to ensuring both safety and functionality. 
Firestore has some smart and straightforward security rules to help keep the database running safe and smooth. These rules decide what behaviors to allow for the client side.

      </p>
      <h1 className='text-2xl font-semibold'>Why Firebase Rules Are Important?</h1>
      <ol className='my-3 text-gray-500 list-disc space-y-2'>
        <li><span className='text-black font-semibold'>Data Security</span>: If rules are too open (e.g., public access), your data can be easily read, modified, or even deleted by anyone.</li>
        <li><span className='text-black font-semibold'>Privacy</span>: Sensitive data, such as user profiles or private messages, should be accessible only to authorized users.</li>
        <li><span className='text-black font-semibold'>Access Control</span>: You may want different levels of access for different users (e.g., admins vs. regular users), which is possible with customized rules.</li>
        <li><span className='text-black font-semibold'>Data Integrity</span>: Validation rules help ensure that only valid data is saved, preventing issues with incorrect or malicious data.</li>
        <li><span className='text-black font-semibold'>Cost Management</span>: If anyone can write to your database, it could lead to unnecessary usage, increasing costs.</li>
      </ol>
      <h1 className='text-2xl font-semibold my-3'>Accessing Rules Page</h1>
      <div className='flex  justify-center items-center flex-col text-center'>
        <img src={BR1} alt='rules'/>
        <p className='text-gray-500 p-1 m-1 font-mono'>You can view and edit your Firestore database security rules by navigating to the Rules tab in the Firestore section of your Firebase console.</p>
      </div>
      <h1 className='text-2xl font-semibold my-3'>Key Firestore Security Rules</h1>
     
      </div>
     </div>
      </div>
  )
}
