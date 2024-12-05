'use client';

import Image from "next/image";
import { ScanEye, X } from 'lucide-react';


const HomePage = () => {
  const handleClick = () => {
    console.log("hello")
  }

  const close = () => {
    console.log("hello")
  }

  return (
    <>
      <div className="w-screen h-dvh position fixed top-0 z-[-1]">
        <div className="position relative block blur-[150px] w-full h-full ">
          <Image
            className="w-full h-full"
            src="/images/bg-stamp.svg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="h-[65vh] flex flex-col justify-between min-w-80 max-w-4xl mx-auto">
        <div className="mx-6 mt-8">
          <div className="flex justify-between w-auto">
            <h1 className="text-4xl font-bold text-white">Edit</h1>
            <button onClick={close} className="bg-white/20 w-10 h-10 rounded-full"><X className="w-6 h-6 m-2"/></button>
          </div>
          <div className="flex">
            <h1 className="text-4xl font-bold text-white/50">Stamp</h1>
            <p className="rounded-full bg-white/30 px-4 py-2 font-bold ml-5">Fast model</p>
          </div>
          <p className="text-lg mt-3">個人情報をスタンプで補正</p>
        </div>

        <Image
          src="/images/stamp.svg"
          alt=""
          width={150}
          height={150}
          className="mx-auto"
        />


        <div className="pm-10">
          <div className="flex">
            <button onClick={handleClick} className="ml-auto bg-white/20 hover:bg-white/40 text-white px-10 py-2 rounded-lg font-bold flex mt-10 ease-in mx-1">
              <ScanEye className="my-auto mr-2" />Upload
            </button>

            <button onClick={handleClick} className="mr-auto bg-white/20 hover:bg-white/40 text-white px-10 py-2 rounded-lg font-bold flex mt-10 ease-in mx-1">
              <X className="my-auto mr-2" />Cancel
            </button>
          </div>
          <p className="text-sm mt-3 text-center text-white/50">撮影済み画像をアップロード</p>
        </div>
      </div>
    </>
  )
}

export default HomePage