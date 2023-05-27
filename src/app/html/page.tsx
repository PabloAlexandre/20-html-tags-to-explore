'use client';

import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen relative w-full flex flex-col items-center justify-center">
      <div aria-hidden className="rounded-md h-full w-full relative items-center justify-center flex flex-col blur-xl bg-gradient-radial from-indigo-600/70 to-indigo-300/10 opacity-50" />
      <section className='top-2/4 -translate-x-2/4 -translate-y-2/4 left-2/4 absolute z-10'>
        <h1 dir="ltr" className='font-extralight text-6xl'>The <strong className="font-extrabold">HTML</strong> Tags</h1>
        {/* <input type="text" className="border-emerald-400 border rounded-md bg-black/50 mt-8 w-full p-1 px-3 text-white/90 text-lg outline-0" /> */}
      </section>
    </main>
  )
}
