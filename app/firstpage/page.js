'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import {GrLinkNext} from "react-icons/gr"

const FirstPage = () => {
    const router = useRouter()
    const {data: session} = useSession();
    // if (session !== session) {
    //     router.push("/firstpage")
    // }
    // else if(session===session?.user.email){
    //     router.push("/")
    // }

  return (
    <div className="w-md-screen h-screen flex justify-center items-center flex-col" style={{
        backgroundImage: `url("https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600")`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <h1 className="text-white font-bold text-[50px]">
        Welcome To My Website
      </h1>
      <button
        type="button"
        className="text-white bg-gradient-to-br mt-4 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      onClick={()=>signIn()}
      >
        Login <GrLinkNext />
      </button>
    </div>
  );
}

export default FirstPage
