"use client"
import Navbar from '../daisycompo/Navbar/Navbar'
import React from 'react'
const page = () => {
  return (
  <>
  <Navbar/>
  <h1 className='text-center'>About</h1>  
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
        <p><b>Facilitating Project Initiation:</b> SciMarket streamlines the start of science-based projects by connecting researchers, making it easier for them to embark on scientific endeavors.
        <br />
<b>Promoting Open Science:</b> The platform encourages open science by featuring project listings that emphasize transparency, peer review, and interdisciplinary teamwork. This fosters a culture of sharing and collaboration in the scientific community.
<br />
<b>
Comprehensive Project Management: </b>SciMarket offers a suite of project management tools, including project tracking, private meetings, and version control, to help researchers efficiently manage their scientific projects.
<br />

<b>Data Security:</b> While promoting collaboration, SciMarket also prioritizes user data security to safeguard sensitive research information.
<br />
<b>Future Enhancements: </b>The platform is poised to introduce additional features such as paid projects and a marketplace for buying and selling materials, enhancing its utility for scientists. </p>
        </div>
  </div>
  </>
  
    )
}

export default page