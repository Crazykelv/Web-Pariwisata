import React from 'react'
import '../../../App.css';
import deng1 from "../../../Images/Curug deng deng/1.jpg";
import deng2 from "../../../Images/Curug deng deng/2.jpg";


import arrowwh from "../../../Images/ARROW WHITE.png";
import Carousel from '../carousel.component';
import { BsImageAlt } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";

const Dengdeng = () => {

  let slides = [
    deng1,
    deng2,
  ];

  return (
    <>
        <section style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${deng1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        color: 'white',
                        backgroundPosition: 'center',            
        }} className='h-[100vh] tablet-sm:h-[40vh] android:h-[35vh] flex flex-col gap-5 iphone:gap-1 justify-center items-center font-thin filter'>
            <div>
              <a target='blank' 
              href='https://maps.app.goo.gl/EUwccVWXtNv4bjN8A' 
              className='flex items-center gap-1 text-2xl android:text-xl android-sm:text-lg iphone:text-sm'>Detail <span className='font-bold'>Lokasi</span><img className='w-7' src={arrowwh} alt="arrow" /></a>
            </div>
            <div className='flex flex-col gap-5 iphone:gap-3  items-end px-[10%]'>
              <h1 className='font-extrabold text-9xl tablet-sm:text-7xl android:text-6xl android-sm:text-4xl iphone:text-3xl'>CURUG DENGDENG</h1>
              <a className='font-normal text-2xl outline px-5 py-1 iphone:px-2 iphone:py-0 iphone:outline-1 android:text-sm android-sm:text-xs iphone:text-[7px]' href="#galeri">LIHAT GALERI</a>
            </div>
        </section>
        <h1 className='bg-[#f6fbff] text-5xl h-48 text-[#137FB8] android:hidden flex gap-2 justify-center items-center font-thin text-center'></h1>
        <section id='galeri' className=' max-h-[60vh] flex flex-row-reverse tablet:flex-col-reverse items-center justify-between'>
          <div className='m-auto'>
            <Carousel slides={slides} />
          </div>
          <div className='py-10 w-[50vw] flex flex-col tablet:flex-row-reverse items-center justify-center'>
            <BsImageAlt className='ml-5 w-[10%] h-[10%] mb-10 items-center text-[#137FB8]' />
            <div>
              <h1 className='text-5xl tablet-sm:text-4xl android:text-3xl android-sm:text-2xl iphone:text-xl text-[#137FB8] font-thin'>GALERI <span className='font-bold'>FOTO</span></h1>
              <h1 className='text-xl android-sm:text-lg iphone:text-sm text-center text-[#137FB8] my-2'>slide for more</h1>
            </div>
          </div>
        </section>
        <h1 className='bg-[#f6fbff] text-5xl android:text-4xl h-48 tablet-sm:h-32 android-sm:h-24 text-[#137FB8] flex gap-2 justify-center items-center font-thin text-center'>FUN <span className='font-bold'>FACT</span><FaRegLightbulb className='ml-5' /></h1>
        <section className='h-[100vh] flex tablet:flex-col tablet:h-[80vh] tablet-sm:h-[60vh] android-sm:h-[50vh]'>
        <div style={{
                                  backgroundImage: `url(${deng2})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  backgroundRepeat: 'no-repeat',
                                  color: 'white',
                                  backgroundPosition: 'center',            
        }} className='w-[30vw] tablet:w-[100vw] h-[100vh] tablet:h-[50vw] flex flex-col justify-end bg-slate-100 text-5xl android:text-5xl iphone:text-3xl font-thin'>
          <div className='bg-[#004194] p-10 bg-opacity-40 tablet:h-full'>
            <h1 className=' font-bold'>CURUG</h1>
            <h2 className=' ml-5 mt-3 iphone:mt-0'>DENGDENG</h2>
          </div>
        </div>
        <div className='w-[70vw] tablet:w-full h-[100vh]  py-[10%] px-[10%] text-[#505050]'>
              <h1 className='text-6xl mb-2 title font-semibold text-[#137fb8] tablet-sm:text-5xl android:text-4xl android-sm:text-2xl iphone:text-xl'>CURUG DENGDENG</h1>
              <p className='text-3xl tablet-sm:text-xl android:text-lg android-sm:text-sm iphone:text- leading-10'><span className='font-bold text-[#137fb8]'>Danau Curug Dengdeng </span> 
              di <span className='font-bold text-[#137fb8]'>Tasikmalaya </span> adalah destinasi alam yang memiliki <span className='font-bold text-[#137fb8]'>pesona unik. </span> 
              Fun fact mengenai Danau Curug Deng Deng adalah bahwa danau ini terbentuk 
              dari serangkaian air terjun yang dikenal dengan nama Curug Deng Deng. 
              Air terjun ini terdiri dari beberapa tingkatan, dan air yang mengalir dari 
              tiap tingkatannya akhirnya membentuk sebuah <span className='font-bold text-[#137fb8]'>danau kecil </span> yang indah di bawahnya.</p>
        </div>
        </section>
        <section className='h-[100vh] tablet:h-[60vh] android:h-[30vh]'>
        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013473.1654194748!2d106.90994258983731!3d-7.139924502151997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65eead1de99671%3A0x79b31d6ce387c35a!2sCurug%20Dengdeng!5e0!3m2!1sid!2sid!4v1725068079314!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </>
  )
}

export default Dengdeng
