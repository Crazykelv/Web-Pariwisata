import React from 'react'
import '../../App.css';
import pangangon1 from "../../Images/Bukit Pangangonan/1.jpg";
import pangangon2 from "../../Images/Bukit Pangangonan/2.jpg";
import pangangon3 from "../../Images/Bukit Pangangonan/3.jpg";
import pangangon4 from "../../Images/Bukit Pangangonan/4.jpeg";
import pangangon5 from "../../Images/Bukit Pangangonan/5.jpeg";
import pangangon6 from "../../Images/Bukit Pangangonan/6.jpeg";
import pangangon7 from "../../Images/Bukit Pangangonan/7.jpeg";


import arrowwh from "../../Images/ARROW WHITE.png";
import Carousel from './carousel.component';
import { BsImageAlt } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";

const Pangangonan = () => {

  let slides = [
    pangangon1,
    pangangon4,
    pangangon5,
    pangangon6,
  ];

  return (
    <>
        <section style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pangangon5})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        color: 'white',
                        backgroundPosition: 'center',            
        }} className='h-[100vh] tablet-sm:h-[40vh] android:h-[35vh] flex flex-col gap-5 iphone:gap-1 justify-center items-center font-thin filter'>
            <div>
              <a target='blank' 
              href='https://maps.app.goo.gl/DpJxN36pnJx5U96v8' 
              className='flex items-center gap-1 text-2xl android:text-xl android-sm:text-lg iphone:text-sm'>Detail <span className='font-bold'>Lokasi</span><img className='w-7' src={arrowwh} alt="arrow" /></a>
            </div>
            <div className='flex flex-col gap-5 iphone:gap-3  items-end px-[10%]'>
              <h1 className='font-extrabold text-8xl tablet-sm:text-7xl android:text-6xl android-sm:text-4xl iphone:text-3xl'>BUKIT PANGANGONAN</h1>
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
                                  backgroundImage: `url(${pangangon1})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  backgroundRepeat: 'no-repeat',
                                  color: 'white',
                                  backgroundPosition: 'center',            
        }} className='w-[30vw] tablet:w-[100vw] h-[100vh] tablet:h-[50vw] flex flex-col justify-end bg-slate-100 text-5xl android:text-5xl iphone:text-3xl font-thin'>
          <div className='bg-[#004194] p-10 bg-opacity-40 tablet:h-full'>
            <h1 className=' font-bold'>BUKIT</h1>
            <h2 className=' ml-5 mt-3 iphone:mt-0'>PANGANGONAN</h2>
          </div>
        </div>
        <div className='w-[70vw] tablet:w-full h-[100vh]  py-[10%] px-[10%] text-[#505050]'>
              <h1 className='text-6xl mb-2 title font-semibold text-[#137fb8] tablet-sm:text-5xl android:text-4xl android-sm:text-2xl iphone:text-xl'>BUKIT PANGANGONAN</h1>
              <p className='text-3xl tablet-sm:text-xl android:text-lg android-sm:text-sm iphone:text- leading-10'>Bukit Pangangonan di Tasikmalaya 
              memiliki daya tarik yang istimewa bagi para pecinta alam. Fun fact mengenai 
              Bukit Pangangonan adalah bahwa bukit ini sering disebut sebagai 
              <span className='font-bold text-[#137fb8]'> "Negeri di Atas Awan" </span> oleh penduduk setempat dan pengunjung. 
              Hal ini karena, saat pagi hari, puncak Bukit Pangangonan sering 
              diselimuti oleh <span className='font-bold text-[#137fb8]'>lautan awan </span> yang tampak seperti ombak yang bergulung di <span className='font-bold text-[#137fb8]'>bawah kaki Anda, </span>
              menciptakan pemandangan yang sangat memukau dan hampir seperti berada di dunia lain.</p>
        </div>
        </section>
        <section className='h-[100vh] tablet:h-[60vh] android:h-[30vh]'>
        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126544.32450032698!2d107.91439049726559!3d-7.6281553999999945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65e3bb09e9a8f5%3A0x176043d7c6de1c7c!2sBukit%20pangangonan!5e0!3m2!1sid!2sid!4v1725072034462!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </>
  )
}

export default Pangangonan
