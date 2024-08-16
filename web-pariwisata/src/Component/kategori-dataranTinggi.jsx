import React from 'react'
import bgMountain from "../Images/bg-mountain.jpg";
import arrow from "../Images/ARROW BLUE.png";
import Grid from "./grid";




const kategoriDataranTinggi = () => {
  return (
    <div className='bg-slate-50'>
          <div className='px-32 py-14 text-[#137FB8]'>
            <h1 className='text-center text-5xl'>IN <span className='font-bold'>TASIKMALAYA,</span> WE HAVE:</h1>
          </div>

          <div>
            <Grid />
          </div>
    <div className='h-[300px]'>
        <img className='filter absolute brightness-50 h-[300px] object-cover w-full' src={bgMountain} />
        <div className='relative text-center'>
          <h1 className='text-white font-bold text-7xl pt-24'>DATARAN TINGGI</h1>
        </div>
    </div>
    </div>
  )
}

export default kategoriDataranTinggi