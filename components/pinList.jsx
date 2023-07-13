// import { app } from '@/utils/firebase';
// import { getFirestore } from 'firebase/firestore';
// import { useSession } from 'next-auth/react';
import Image from 'next/image';
// import UserTag from './userTag';
// import React, { useEffect, useState } from 'react'

const PinList = ({pin}) => {
    // const db = getFirestore(app);
    // const {data: session} = useSession();


  return (
    <div  className='mt-7 px-2 md:px-5 columns-1 md:columns-2 lg:columns-4 xl:columns-5 space-y-6 mx-auto'>
        {pin.map((item,id)=>{
            return(
                <div key={id} className='flex flex-col items-center'>
                    <Image src={item.image} alt='fight' width={300} height={300}  className='shadow-md rounded-3xl'/>
                    {/* <h2 className='font-semibold text-[25px]'>{item.title}</h2> */}
                </div>
            )
        })}
    </div>
  )
}

export default PinList;
