"use client";
import React from 'react'
import Link from 'next/link'
import SigninButton from '../../components/Signin';
import { useSession } from 'next-auth/react';
export default function Home() {

  const { data: session } = useSession();
  if(!session){
    return (
      <>
      <div className='mainSection grid grid-cols-2 '>
        <div className='mainContent'>
          <h1 className=''><b >Explore</b>  the <b>SciMarket</b> for Open Science Project</h1>
          <p className='infoPara '>
          We created you a platform where you can share you ideas and share your sci-fi projects and teach you how to cooperate.
          </p>
          <SigninButton/>
          {/* <btton className="mainBtn" onClick={()=>{
            console.log("hi")
            signIn()
          }}>Get Started</btton> */}
          <Link href="/About">
          <span className='underline'>How it works?</span></Link>
        </div>
        {/* buttons */}
       
        <div className='mainImg'>
         <div className='ImgBox1 '>
          <img src='https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={"350px"} height={"auto"} className='rounded-2xl'/>
         </div>
         <div className='ImgBox2'>
         <img src='https://images.pexels.com/photos/7925847/pexels-photo-7925847.jpeg?auto=compress&cs=tinysrgb&w=600' width={"350px"} height={"auto"} className='rounded-2xl'/>
         </div>
         <div className='ImgBox3'>
         <img src='https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg?auto=compress&cs=tinysrgb&w=600' width={"350px"} height={"auto"} className='rounded-2xl mt-4'/>
         </div>
        </div>
      </div>
      <div className='detailSection grid grid-cols-2 mt-5'>
        <div className='words p-5' >
          <p>We let you to explore and connect with
   the experts and collaborate in different science projects. </p>
        </div>
        <div className='title'>
          <h2 className=''>What we <br></br>actually do?</h2>
        </div>
      </div>
      <div className='featureSection grid grid-cols-3 mt-4'>
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
      <div className='interestSection grid grid-cols-2'>
        <div>
          <h2 className='text-2xl'>Ready for your project ?</h2>
          <p>
          Let's get started. 
          </p>
        </div>
        <div className='btnSection'>
          <button className='joinBtn'>Let's begin</button>
        </div>
        </div>
  
      </>
    )

  }

  else{
    return (
   <>

   hello world
   
   </>
    )
  }
  
}
