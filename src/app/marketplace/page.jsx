"use client";
import Link from 'next/link'
import React,{useState,useEffect} from 'react'

import Navbar from '../daisycompo/Navbar/Navbar';
// Sample data for products


function Marketplace() {
  // let [products,setProducts] = [
  //   {
  //     id: 1,
  //     title: 'Project Title',
  //     description: 'Project Description',
  //     img: "https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   },
  //   {
  //     id: 2,
  //     title: 'Project Title 2',
  //     description: 'Description of project',
  //     img: "https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
  //   },
  //   // Add more products here
  // ];

  let [products,setProducts]=useState([{}]);

  useEffect(() => {

   
     getPosts();

  }
  ,[])

  let getPosts=async(e)=>{
    let data=await fetch('api/upload')
    let res=await data.json()
  console.log(res.data)
  setProducts(res.data)
   

}
  
  return (
    <>
    {/* <Navbar/> */}
    <div  className="container mx-auto p-4">
      <h1 className="text-3xl  text-cente mb-4">Welcome to the SciMarket</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <Link key={product.id} href={'/projects/'+product.id}>
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <img src={product.imgUrl}></img>
            <h2 className="text-xl text-black mt-5 mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
           
            <button className="mt-2 px-4 py-2">
               
            </button>
          </div>
          </Link>
        ))}
      </div>
    </div>
    
    </>
  );
}

export default Marketplace;
