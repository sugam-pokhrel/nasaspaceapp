"use client"
import Navbar from '../daisycompo/Navbar/Navbar'
import React from 'react'
const page = () => {
  return (
  <>
  <Navbar/>
  <div className='aboutSection grid grid-cols-2'>
    <div className='aboutSectionLeft'>
      <h2 className='text-3xl '>What is <b >SciMarket</b> ?</h2>
      <p>lorem</p>
      </div>
      <div className='aboutSectionRight'>
        <img src='./sciMart.png' width='auto'></img>
        </div>
  </div>
  <div className='aboutSection2 grid grid-cols-2'>
    <div className='aboutSectionLeft'>
    <img src='./sciMart.png' width='auto'></img>

      </div>
      <div className='aboutSectionRigh2'>
        <h2 className='text-3xl'>Why <b>SciMarket</b>? </h2>
        <p>lorem</p>
        </div>
  </div>
  </>
  
    )
}

export default page