import React from 'react'
import {data} from '../data'

const GBuatan = () => {
  const boxStyle = 'flex flex-col justify-end relative bg-slate-100 rounded-lg text-3xl font-thin'
  return (
    <>
      <div className='grid grid-cols-3 auto-rows-[300px] gap-3 px-20 mb-14'>
        {data.filter(item => item.kategori === 'Buatan').map((item, i) => 
        <div className={`${boxStyle} 
        ${i === 0 || i === 3 || i === 6 ? 'md:col-span-2': ''} 
        ${i === 2 ? 'md:row-span-2': ''}`} key={i} 
        style={{
            backgroundImage: `url(${item.gambar})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white'
        }

        }>
          <div className='bg-[#004194] p-10 bg-opacity-40 rounded-b-lg'>
            <h1 className=' font-bold'>{item.tipe}</h1>
            <h2 className=' ml-5'>{item.nama}</h2>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default GBuatan