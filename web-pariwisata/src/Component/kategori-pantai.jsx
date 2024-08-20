import React from 'react'
import GPantai from './gpantai'
import bgMountain from "../Images/bg-mountain.jpg";

const KategoriPantai = () => {
  return (
    <div className='bg-slate-50'>
          <div className='px-32 py-14 text-[#137FB8]'>
            <h1 className='text-center text-5xl'>IN <span className='font-bold'>TASIKMALAYA,</span> WE HAVE:</h1>
          </div>

          <div>
            <GPantai />
          </div>
    <div className='h-[300px]'>
        <img className='filter absolute brightness-50 h-[300px] object-cover w-full' src={bgMountain} />
        <div className='relative text-center'>
          <h1 className='text-white font-bold text-7xl pt-24'>WISATA PANTAI</h1>
        </div>
    </div>
    </div>
  )
}

export default KategoriPantai