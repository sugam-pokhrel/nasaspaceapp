"use client";


import React,{useState,useEffect} from 'react'
import Navbar from '../../daisycompo/Navbar/Navbar';
import Link from 'next/link';
const page = ({params}) => {
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


  
 

  
  return (
    <>
    
    <div className='ProjectDetailSection grid grid-cols-2'>
      <div className='ProdetailSection'>
      <img src={imgUrl}></img>
      <h1>{title}</h1>
      <p className='text-justify'>{description}</p>
      <span className='mt-5 text-green-300'>{email}</span>
     <Link href={"/Team"} ><button className='teamBtn bg-green-300 text-black p-3 m-4 rounded-md float-right bol d'>Join Team</button></Link>
      </div>
   
    </div>
</>

  )
}

export default page