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
      <p>SciMarket is a web app that addresses the challenge of fostering openness, transparency, and interdisciplinary teamwork within the scientific community, indirectly contributing to broader space research goals It eases the process of starting a science based project as it unites researchers, promoting open science through project listings that emphasize transparency, peer review, and interdisciplinary teamwork. This web app offers project tracking, private meetings, version control, and collaboration tools while safeguarding user data. It will have additional features like paid projects and a marketplace for buying and selling materials.</p>
      </div>
      <div className='aboutSectionRight'>
        <img src='./sciMart.png' width='auto'></img>
        </div>
  </div>
  <div className='aboutSection2 grid grid-cols-2'>
    <div className='aboutSectionLeft2'>
    <img src='https://i.pinimg.com/736x/6c/a2/77/6ca277362ea9818d785e045de853402c.jpg' width='auto'></img>

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