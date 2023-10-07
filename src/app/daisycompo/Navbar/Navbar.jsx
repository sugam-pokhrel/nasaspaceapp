"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link'
import React from 'react'
const page = () => {

  const { data: session } = useSession();

  console.log(session)
  return (
  <>
  <div className="navbar bg-base-100">
  <div className="flex-1">
   <Link href={"/"}><img src="./sciMart.png" width={"100px"}></img></Link>
   <Link href={"/about"}>About</Link>
<Link href={"/features"}>Features</Link>

  </div>
  
  <div className="flex-none">
    <div className="dropdown dropdown-end">
     
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><button>Settings</button></li>
        <li ><button onClick={signOut}>Logout</button></li>
      </ul>
    </div>
  </div>
</div>
  
  
  </>
  
    )
}

export default page