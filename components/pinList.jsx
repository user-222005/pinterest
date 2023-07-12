import { app } from '@/utils/firebase';
// import { getFirestore } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
// import React, { useEffect, useState } from 'react'

const PinList = ({pin}) => {
    // const db = getFirestore(app);
    const {data: session} = useSession();


  return (
    <div  className='grid grid-cols-4 mt-4'>
        {pin.map((item,id)=>{
            return(
                <div>
                    <Image src={item.image} alt='user-img' height={250} width={250} />
                    <h2>{item.title}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default PinList;
