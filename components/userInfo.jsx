import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const UserInfo = ({session}) => {
    const router = useRouter();
    if (session==null) {
        router.push("/")
    }
    console.log(session);
  return (
    <div className='flex justify-center items-center flex-col'>
      <Image
        src={session?.user?.image}
        alt="deena-img"
        width={100}
        height={100}
        className='rounded-full'
      />
      <h2 className='text-[30px] font-semibold '>{session?.user?.name}</h2>
      <h2 className='text-gray-500'>{session?.user?.email}</h2>
    </div>
  );
}

export default UserInfo;
