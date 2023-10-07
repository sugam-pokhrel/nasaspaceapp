"use client";
import React from 'react'
import Navbar from '../daisycompo/Navbar/Navbar';

const page = () => {
  return (
    <>
    <Navbar/>
  <div className='featuresSection p-6'>
    <h1 className='text-center'>Features</h1>
    <div className='featureSection grid grid-cols-3 m-5'>
        <div className='feature text-center'>
          <div className='featureImg'>
            <img src= "./feature1.png" width={"250px"} height={"auto"} className='rounded-2xl'/> 
            </div>
            <h2>
            Project Monetization
            </h2>
            <p>
            In the realm of project monetization, this app empowers users to create and market their projects, offering a platform where they can connect with potential buyers and successfully sell their innovative ventures.
            </p>
            
        </div>
        <div className='feature text-center'>
        <div className='featureImg '>
        <img src= "./feature2.png" width={"250px"} height={"auto"} className='rounded-2xl'/></div>
            <h2>
            Project Task Management
            </h2>
            <p>
            Project management is made simple with this app thanks to a variety of simple features. Users can easily divide and assign tasks, promoting effective teamwork and convenient progress monitoring.
            </p>
          </div>
          <div className='feature text-center'>
        <div className='featureImg'>
          <img src= "./feature3.png" width={"250px"} height={"auto"} className='rounded-2xl'/> </div>
            <h2>
          Team Meetings 
            </h2>
            <p>
  In team meetings, users can easily connect via text and voice, fostering collaboration. They can also share files and ideas, enhancing communication and productivity.
            </p>
          </div>
      </div>
  </div>
    </>
  )
}

export default page