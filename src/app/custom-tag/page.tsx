'use client';

import { useState } from "react"

export default function CustomTagPage() {
  const [ image, setImage ] = useState('')
  console.log({ image });
  return (
    <>
      <section className="dark:text-gray-300 my-10">
        <container>
          <h2 className="text-3xl font-extrabold mb-8">Custom Tags</h2>
          <grid>
            <column className="border border-indigo-300 dark:text-gray-400 p-2 aspect-square rounded-2xl items-center justify-center flex font-bold text-3xl"><a href="#page">Column A</a></column>
            <column className="border border-indigo-300 dark:text-gray-400 p-2 aspect-square rounded-2xl items-center justify-center flex font-bold text-3xl"><a href="#page">Column B</a></column>
            <column className="border border-indigo-300 dark:text-gray-400 p-2 aspect-square rounded-2xl items-center justify-center flex font-bold text-3xl"><a href="#page">Column C</a></column>
          </grid>
        </container>
      </section>
      <section className="dark:text-gray-300">
        <container>
          <h2 className="text-3xl font-extrabold mb-8">The actions for you</h2>
          <div onClick={() => setImage('https://images.unsplash.com/photo-1682687981974-c5ef2111640c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80')} className="hover:bg-indigo-500/20 hover:text-gray-400 cursor-pointer text-center border text-gray-500 border-rose-400 w-56 aspect-square mb-4 flex items-center justify-center">
            { image && <img src={image} alt="" className="w-full h-full" /> }
            { !image && 'Click to load preloaded image' }
          </div>
        </container>
      </section>
    </>
  )
}