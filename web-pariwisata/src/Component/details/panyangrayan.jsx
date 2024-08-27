import React from 'react'
import '../../App.css';
import py1 from "../../Images/Panyangrayan/IMG_0774.JPG"
import py2 from "../../Images/Panyangrayan/IMG_5420.JPG"
import py3 from "../../Images/Panyangrayan/IMG_5450.JPG"
import py4 from "../../Images/Panyangrayan/IMG_6073.JPG"
import arrowwh from "../../Images/ARROW WHITE.png";
import Carousel from './carousel.component';
import { BsImageAlt } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";

const Panyangrayan = () => {

  let slides = [
    py2,
    py1,
    py3,
    py4,
  ];

  return (
    <>
        <section style={{
                        backgroundImage: `url(${py2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        color: 'white',
                        backgroundPosition: 'center',            
        }} className='h-[100vh] flex flex-col gap-5 justify-center items-center font-thin filter'>
            <div>
              <a target='blank' href='https://www.google.com/maps/place/Bukit+Panyangrayan/@-7.4473996,108.1756437,17z/data=!3m1!4b1!4m6!3m5!1s0x2e65f9e7f9a6500b:0xbad2ab4a702f44c1!8m2!3d-7.4473996!4d108.178224!16s%2Fg%2F11frrdk2fg?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D' className='flex items-center gap-1 text-2xl'>Detail <span className='font-bold'>Lokasi</span><img className='w-7' src={arrowwh} alt="arrow" /></a>
            </div>
            <div className='flex flex-col gap-5 items-end'>
              <h1 className='font-extrabold text-9xl'>PANYANGRAYAN</h1>
              <a className='font-normal text-2xl outline px-5 py-1' href="#galeri">LIHAT GALERI</a>
            </div>
        </section>
        <div className='py-10'>
          <h1 className='text-5xl text-[#137FB8] flex gap-2 justify-center items-center font-thin text-center'>GALERI <span className='font-bold'>FOTO</span><BsImageAlt className='ml-5' /></h1>
          <h1 className='text-xl text-[#137FB8] text-center my-2'>slide for more</h1>
        </div>
        <section id='galeri' className='max-h-[60vh] flex justify-between'>
          <div className='m-auto'>
            <Carousel slides={slides} />
          </div>
          <div className='w-[50vw]'>
              <h1>TES</h1>
          </div>
        </section>
        <h1 className='text-5xl my-20 text-[#137FB8] flex gap-2 justify-center items-center font-thin text-center'>FUN <span className='font-bold'>FACT</span><FaRegLightbulb className='ml-5' /></h1>
        <section className='h-[100vh] flex'>
        <div style={{
                                  backgroundImage: `url(${py1})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  backgroundRepeat: 'no-repeat',
                                  color: 'white',
                                  backgroundPosition: 'center',            
        }} className='w-[30vw] h-[100vh] flex flex-col justify-end bg-slate-100 text-6xl font-thin'>
          <div className='bg-[#004194] p-10 bg-opacity-40 h-[300px]'>
            <h1 className=' font-bold'>BUKIT</h1>
            <h2 className=' ml-5 mt-3'>PANYANGRAYAN</h2>
          </div>
        </div>
        <div className='w-[70vw] h-[100vh] py-[180px] pl-[230px] text-[#505050]'>
              <h1 className='text-8xl mb-2 title font-semibold text-[#137fb8]'>PANYANGRAYAN</h1>
              <p className='text-3xl max-w-[800px] leading-10'>Dari <span className='font-bold text-[#137fb8]'>puncak Panyangrayan</span>, 
                pengunjung dapat melihat pemandangan <span className='font-bold text-[#137fb8]'>Sukaraja</span> dari ketinggian, 
                <br />serta area <span className='font-bold text-[#137fb8]'>perbukitan dan persawahan</span> yang mengelilinginya. 
                Selain itu, lokasi ini juga sering dijadikan sebagai tempat <span className='text-[#137fb8] font-bold'>berkemah </span> 
                oleh para <span className='text-[#137fb8] font-bold'>pengunjung</span> lokal maupun wisatawan yang ingin menikmati 
                suasana malam di <span className='text-[#137fb8] font-bold'>alam terbuka.</span></p>
        </div>
        </section>
        <section className='h-[100vh]'>
        <iframe className='w-full h-full' src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Panyangrayan+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
        </section>
    </>
  )
}

export default Panyangrayan
