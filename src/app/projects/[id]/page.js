"use client";


import React,{useState,useEffect} from 'react'
import Navbar from '../../daisycompo/Navbar/Navbar';
import Link from 'next/link';
const page = ({params}) => {
  console.log(params)

  
  return (
    <>
    <Navbar/>
    <div className='ProjectDetailSection text-center'>
      <div className='ProdetailSection'>
      <img src='https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={"60%"}></img>
      <h1 className='text-center'>Making a full stack website</h1>
      <p className='text-center'>Certainly! However, I'll need more specific information about the project in order to provide a meaningful paragraph. Please provide details such as the project's name, purpose, goals, and any other relevant information, and I'll be happy to write a paragraph for you.The Sustainable Urban Gardens Initiative is a transformative project aimed at creating vibrant, eco-friendly urban green spaces in our community. Our mission is to combat food insecurity, promote sustainable living, and enhance the overall well-being of residents. This initiative includes establishing community gardens in vacant urban lots, offering gardening workshops, and distributing fresh produce to underserved neighborhoods. Additionally, we plan to implement rainwater harvesting systems and solar-powered irrigation to reduce environmental impact. Our project not only fosters a stronger sense of community but also contributes to healthier, more sustainable cities by fostering urban agriculture and environmental stewardship.</p>
      <span className='mt-5 text-green-300'>Uploaded by HannyCode</span>
     <Link href={"/Team"} ><button className='teamBtn bg-green-300 text-black p-3 m-4 rounded-md float-right bol d'>Join Team</button></Link>
      </div>
   
    </div>
</>

  )
}

export default page