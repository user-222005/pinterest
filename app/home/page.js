'use client'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'

const HomePage = ({main}) => {
    const {data: session} = useSession();

  return (
    <div>
      {main.map((item,id)=>{
        return(
            <Image src={item.image} alt='img' width={200} height={200} />
        )
      })}
    </div>
  )
}

export default HomePage;
