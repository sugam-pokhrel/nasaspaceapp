"use client";
import Link from 'next/link';
import React from 'react';
import { signOut } from 'next-auth/react';
const Navbar = () => {
  // Replace with your session logic
 // Replace with your sign out logic

  return (
    <>
      {/* <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/">
            <img src="./sciMart.png" width="100px" />
          </Link>
          <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex-row">
            <li>
              <Link href="/about">
               About
              </Link>
            </li>
            <li>
              <Link href="/features">
                Features
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='user' />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              
              <li><button>Profile</button></li>

            
              <li><button>Settings</button></li>
              
              <li><button onClick={() => signOut()}>Logout</button></li>
              
              
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;