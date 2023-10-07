// "use client";
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className=" p-4 nav">
    <div className="container mx-auto">
   
      <ul className="flex ">
      <Link href="/">
           <img src='./sciMart.png' width={"104px"} className='logo'></img>
          </Link>
        <li className='navLinks'>
          <Link href="/About">
          About
          </Link>
        </li>
        <li className='navLinks'>
          <Link href="/Features">
           Features
          </Link>
        </li>
      </ul>
    </div>
    <button className='btn loginBtn' onClick={()=>{
      console.log("hello world");
    }}>Login</button>
  </nav>
  )
}
export default Navbar