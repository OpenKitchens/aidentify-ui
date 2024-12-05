'use client';

import { Focus, Bird } from 'lucide-react';
import Card from "@/app/components/Card"


const EditPage = () => {
  const handleClick = () => {
    console.log("hello")
  }

  return (
    <>
      <div className="min-w-80 max-w-4xl mx-auto">
        <div className="mx-6 mt-8">
          <h1 className="text-4xl font-bold text-white">Edit</h1>

          <div className="mt-6 grid grid-cols-[repeat(2,minmax(0,10rem))] sm:grid-cols-3 gap-6 justify-items-center">
            <Card title="Stamp" subtitle="個人情報をスタンプで補正" model="fast model" bg="/images/bg-stamp.svg" image="/images/stamp.svg" />
            <Card title="AI Paint" subtitle="個人情報をAIが自然な形で塗りつぶす" model="slow model" bg="/images/bg-aipaint.svg" image="/images/aipaint.svg" />
            <Card title="Secure Face" subtitle="顔が写っているところも消す" model="slow model" bg="/images/bg-secure.svg" image="/images/secure.png" />
          </div>

          <div className="mt-8">
            <h1 className="text-2xl font-bold text-white mx-2">action</h1>

            <div className="flex mt-2">
              <button onClick={handleClick} className="bg-white/20 hover:bg-white/40 text-white px-7 py-2 rounded-lg font-bold flex ease-in">
                <Focus className="my-auto mr-2" />Camera
              </button>

              <button onClick={handleClick} className="bg-white/20 hover:bg-white/40 text-white px-7 py-2 rounded-lg font-bold flex ease-in">
                <Bird className="my-auto mr-2" />アンケート
              </button>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mt-8">Discover</h1>
        </div>
      </div>
    </>
  )
}

export default EditPage