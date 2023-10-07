"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">Check For some projects</p>
        {/* <button onClick={() => signOut()}>
          Sign Out
        </button> */}
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} >
    Get started now 
    </button>
  );
};

export default SigninButton;