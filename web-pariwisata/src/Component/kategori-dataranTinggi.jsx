import React from 'react'
import bgMountain from "../Images/bg-mountain.jpg";
import arrow from "../Images/ARROW BLUE.png";
import GTinggi from './gtinggi';




const kategoriDataranTinggi = () => {
  return (
    
    <div className='bg-slate-50'>
    <div className='h-[25vh] w-full'>
        <img className='filter absolute brightness-50 opacity-95 h-[30%] object-cover w-full' src={bgMountain} />
        <div className='relative text-center'>
          <h1 className='text-white font-bold text-5xl pt-[10vh] px-[5%] android-sm:text-4xl'>WISATA DATARAN TINGGI</h1>
        </div>
    </div>
          {/* <div className='px-32 py-14 text-[#137FB8]'>
            <h1 className='text-center text-5xl'>IN <span className='font-bold'>TASIKMALAYA,</span> WE HAVE:</h1>
          </div> */}

          <div>
            <GTinggi />
          </div>
    </div>
  )
}

export default kategoriDataranTinggi