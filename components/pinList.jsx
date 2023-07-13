import { app } from '@/utils/firebase';
// import { getFirestore } from 'firebase/firestore';
// import { useSession } from 'next-auth/react';
import Image from 'next/image';
import UserTag from './userTag';
// import React, { useEffect, useState } from 'react'

const PinList = ({pin}) => {
    // const db = getFirestore(app);
    // const {data: session} = useSession();


  return (
    <div  className='mt-7 px-2 md:px-5 columns-2 md:columns-3 lg:columns-4 xl:columns-5 space-y-6 mx-auto'>
        {pin.map((item,id)=>{
            return(
                <div key={id}>
                    <Image src={item.image} alt='fight' height={300} width={250} className='shadow-md rounded-3xl'/>
                    <h2 className='font-semibold text-[25px]'>{item.title}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default PinList;
