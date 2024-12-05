'use client';

import { Focus, Bird } from 'lucide-react';
import Card from "@/app/components/Card"
import Upload from "@/app/components/Upload"
import { AnimatePresence, motion } from "framer-motion";

import { useState } from 'react';

const EditPage = () => {

  const [changeScreen, setChangeScreen] = useState("");

  const handleClick = () => {
    console.log("hello")
  }

  const change = (type: string) => {
    setChangeScreen(type)
  }

  return (
    <>
      {changeScreen == "stamp" ? (
        <>
          <Upload handleChange={change} title="Stamp" subtitle="個人情報をスタンプで補正" model="fast model" bg="/images/bg-stamp.svg" image="/images/stamp.svg" />
        </>
      ):
      changeScreen == "aipaint" ? (
        <>
          <Upload handleChange={change} title="AI Paint" subtitle="個人情報をAIが自然な形で塗りつぶす" model="slow model" bg="/images/bg-aipaint.svg" image="/images/aipaint.svg" />
        </>
      ):
      changeScreen == "secure" ? (
        <>
          <Upload handleChange={change} title="Secure Face" subtitle="顔が写っているところも消す" model="slow model" bg="/images/bg-secure.svg" image="/images/secure.png" />
        </>
      ) :
        <AnimatePresence>
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="min-w-80 max-w-4xl mx-auto">
              <div className="mx-6 mt-8 z-3">
                <h1 className="text-4xl font-bold text-white">Edit</h1>

                <div className="mt-6 grid grid-cols-[repeat(2,minmax(0,10rem))] sm:grid-cols-3 gap-4 justify-items-center">
                  <motion.button whileTap={{ scale: 2 }} onClick={() => change("stamp")}>
                    <Card title="Stamp" subtitle="個人情報をスタンプで補正" model="fast model" bg="/images/bg-stamp.svg" image="/images/stamp.svg" />
                  </motion.button>
                  <motion.button whileTap={{ scale: 2 }} onClick={() => change("aipaint")}>
                  <Card title="AI Paint" subtitle="個人情報をAIが自然な形で塗りつぶす" model="slow model" bg="/images/bg-aipaint.svg" image="/images/aipaint.svg" />
                  </motion.button>
                  <motion.button whileTap={{ scale: 2 }} onClick={() => change("secure")}>
                  <Card title="Secure" subtitle="顔が写っているところも消す" model="slow model" bg="/images/bg-secure.svg" image="/images/secure.png" />
                  </motion.button>
                </div>

                <div className="mt-8">
                  <h1 className="text-2xl font-bold text-white mx-2">action</h1>

                  <div className="flex gap-2 mt-1">
                    <motion.button whileTap={{ scale: 1.5 }} onClick={handleClick} className="bg-white/20 hover:bg-white/40 text-white px-8 py-2 rounded-lg font-bold flex ease-in">
                      <Focus className="my-auto mr-2" />Camera
                    </motion.button>

                    <motion.button whileTap={{ scale: 1.5 }} onClick={handleClick} className="bg-white/20 hover:bg-white/40 text-white px-7 py-2 rounded-lg font-bold flex ease-in">
                      <Bird className="my-auto mr-2" />アンケート
                    </motion.button>

                  </div>
                </div>

                <h1 className="text-4xl font-bold text-white mt-8">Discover</h1>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      }
    </>
  )
}

export default EditPage