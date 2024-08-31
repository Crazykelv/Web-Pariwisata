import React from 'react'
import bgMountain from "../Images/bg-mountain.jpg";
import GBuatan from './gbuatan';
import bgBuatan from "../Images/bg-buatan.jpg"





const KategoriBuatan = () => {
  return (
    <div className='bg-slate-50'>
    <div className='h-[25vh]'>
        <img className='filter absolute brightness-50 h-[300px] object-cover w-full' src={bgBuatan} />
        <div className='relative text-center'>
          <h1 className='text-white font-bold text-7xl pt-24 px-10 android:text-5xl'>WISATA BUATAN</h1>
        </div>
    </div>

          <div>
            <GBuatan />
          </div>
    </div>
  )
}

export default KategoriBuatan