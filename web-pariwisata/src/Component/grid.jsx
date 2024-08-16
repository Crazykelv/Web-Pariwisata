import React from 'react'
import {data} from '../data'
import kr from "../Images/karangresik/karangresik1.jpg";

const Grid = () => {
  const boxStyle = 'bg-slate-100 p-10 rounded-lg text-3xl font-thin'
  return (
    <>
      <div className='grid grid-cols-3 auto-rows-[300px] gap-3 px-20 mb-14'>
        {data.map((item, i) => 
        <div className={`${boxStyle} ${i === 0 || i === 3 || i === 6 ? 'md:col-span-2': ''} ${i === 2 ? 'md:row-span-2': ''}`} key={i}>
            <h1 className='font-bold'>{item.kategori}</h1>
            <h2 className='ml-5'>{item.nama}</h2>
        </div>
      )}
    </div>
    </>
  )
}

export default Grid