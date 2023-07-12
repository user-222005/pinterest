'use client'
import PinList from '@/components/pinList';
import UserInfo from '@/components/userInfo';
import { app } from '@/utils/firebase';
// import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { data } from 'autoprefixer';
import HomePage from '../home/page';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const router = useRouter()
  const [pin,setPin] = useState([])
  console.log("pin",pin);
    const {data: session} = useSession();
    const db = getFirestore(app)
    // if (session !== null) {
    //   router.push("/firstpage")
    // }

    useEffect(()=>{
      getPinList();   
  },[])

  const getPinList =async ()=>{
      const q = query(collection(db, "user"), where("email", "==", session?.user.email));
      // console.log(q);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id
        setPin((values)=>[...values,data])
      // doc.data() is never undefined for query doc snapshot
      console.log(doc.id, " => ", doc.data());
      });
  }
    

  return (
    <div>
      <UserInfo session={session} />
      <PinList pin = {pin} />
    </div>
  )
}

export default Profile
