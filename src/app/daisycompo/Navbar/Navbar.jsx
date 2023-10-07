import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href={"/"}><a><img src="./sciMart.png" width={"100px"}></img></a></Link>
          <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-5 flex-space-between w-100 flex-row">
            <li><Link href={"./about"}><a className="mr-4">About</a></Link></li>
            <li><Link href={"./features"}><a className="mr-4">Features</a></Link></li>
          </ul>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end"></div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              <div className="flex-none">
                <div className="dropdown dropdown-end"></div>
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
                    {session ? (
                      <li><button onClick={() => signOut()}>Logout</button></li>
                    ) : (
                      <li><button onClick={() => signIn()}>Login</button></li>
                    )}
                  </ul>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;