'use client'
import Image from 'next/image'
import React from 'react'
import { HiSearch,HiBell,HiChat } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react"
const Header = () => {
    const {data: session} = useSession()
    console.log("Session", session);

  return (
    <div className="flex gap-3 md:gap-2 items-center p-4">
      <Image
        src="/images/pinterest.png"
        alt="pinterest img"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />
      <button className="bg-black text-white p-2 rounded-full px-4">
        Home
      </button>
      <button className="font-semibold p-2 rounded-full px-4">Explore</button>
      <div className="bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch className="text-[25px] text-gray-500 md:hidden" />
        <input
          type="text"
          placeholder="search"
          className="bg-transparent outline-none "
        />
      </div>
      <HiBell className="text-[20px] md:text-[40px] text-gray-500" />
      <HiChat className="text-[20px] md:text-[40px] text-gray-500" />
      {session==null?
      <button
        className="bg-blue-500 text-white rounded-lg px-4 p-2"
        onClick={() => signIn()}
      >
        SignIn
      </button>
      :
      <>
      <button
        className="bg-green-500 text-white rounded-lg px-4 p-2"
        onClick={() => signOut()}
      >
        SignOut
      </button>
      <Image
        src={session?.user.image}
        alt="man-img"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />
      </>
      }
    </div>
  );
}

export default Header
