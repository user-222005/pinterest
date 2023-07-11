'use client'
import UserInfo from '@/components/userInfo';
import { app } from '@/utils/firebase';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Profile = () => {
    // const [userInfo,setUserInfo]= useState();
    const {data: session} = useSession();
    // const db = getFirestore(app)

    // useEffect(()=>{
    //     getUserPost()
    // },[session])

    // const getUserPost = async () => {
    //   const docRef = doc(db, "user");
    //   const docSnap = await getDoc(docRef);

    //   if (docSnap.exists()) {
    //     setUserInfo(docSnap.data())
    //   } else {
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // };

  return (
    <div>
      <UserInfo session={session} />
    </div>
  )
}

export default Profile
