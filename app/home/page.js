'use client'
import { app } from '@/utils/firebase';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import Home from '../page';
import Image from 'next/image';

const HomePage = () => {
  const db = getFirestore(app);
  const [post,setPost]= useState([])
  const {data: session} = useSession();

  useEffect(()=>{
    getPost();
  },[])

  const getPost =async ()=>{
    const querySnapshot = await getDocs(collection(db, "user"));
    console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setPost((value)=>[...value,doc.data()])
        // console.log(doc.id, " => ", doc.data());
      });
  }
    return(
      <div className='mt-7 px-2 md:px-5 columns-2 md:columns-3 lg:columns-4 xl:columns-5 space-y-6 mx-auto'>
        {post.map((item,index)=>{
          return(
            <div key={index}>
              <Image src={item.image} alt='userimage' height={200} width={200}/>
            </div>
          )
        })}
      </div>
  )
}

export default HomePage;
