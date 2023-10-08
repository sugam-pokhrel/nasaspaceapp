"use client";


import { useSession } from 'next-auth/react';
import { ID } from 'appwrite';
import {db} from '../../../../utils/appwrite'
import React,{useState,useEffect} from 'react'
import Navbar from '../../daisycompo/Navbar/Navbar';
import Link from 'next/link';
const page = ({params}) => {
  let {data:session}=useSession();

  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [imgUrl,setImgUrl]=useState('');
  const [email,setEmail]=useState('');




  console.log(params.id)

  useEffect(() => {
    getData();
    
    
    


  },[])



  let getData=async()=>{
    let res=await fetch(`/api/getpost`,{
      method:'POST',
      body:JSON.stringify({id:params.id})
    });

    let data=await res.json();
    console.log(data.data)
   setTitle(data.data.title);
   setDescription(data.data.description);
   setImgUrl(data.data.imgUrl);
   setEmail(data.data.createdBy);

    
  }

  const hello=async(e)=>{
    e.preventDefault();
    const promise=await db.createDocument('65222748daef2f88b6c6','6522274ce5a6ec0def39',ID.unique(),{
      teamid:params.id,
      members:[{email:session.user.email,role:"adm"}],
      teamname:title,
      email:session.user.email


    })




  }

  
 

  
  return (
    <>
    
    <div className='ProjectDetailSection grid grid-cols-2'>
      <div className='ProdetailSection'>
      <img src={imgUrl}></img>
      <h1>{title}</h1>
      <p className='text-justify'>{description}</p>
      <span className='mt-5 text-green-300'>{email}</span>
      {session&&session.user.email===email &&  <button  onClick={(e)=>hello(e)} className='teamBtn bg-green-300 text-black p-3 m-4 rounded-md float-right bol d'>Create a team</button>}



   
      </div>
   
    </div>
</>

  )
}

export default page