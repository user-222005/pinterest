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
    <div className="flex justify-center items-center flex-col">
      <Image
        src={session?.user?.image}
        alt="deena-img"
        width={100}
        height={100}
        className="rounded-full"
      />
      <h2 className="text-[30px] font-semibold ">{session?.user?.name}</h2>
      <h2 className="text-gray-500">{session?.user?.email}</h2>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        share
      </button>
    </div>
  );
}

export default UserInfo;
