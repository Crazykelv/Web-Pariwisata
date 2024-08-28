import React from 'react'
import '../../App.css';
import ari1 from "../../Images/dinding/bgDarker.JPG";
import ari2 from "../../Images/dinding/IMG_0948.JPG";
import ari3 from "../../Images/dinding/IMG_0949.JPG";
import ari4 from "../../Images/dinding/IMG_1052.JPG";
import ari5 from "../../Images/dinding/IMG_0987.JPG";
import ari6 from "../../Images/dinding/IMG_0843.JPG";
import ari7 from "../../Images/dinding/IMG_0997.JPG";
import ari8 from "../../Images/dinding/IMG_1031.JPG";
import ari9 from "../../Images/dinding/IMG_1012.JPG";
import ari10 from "../../Images/dinding/ari5_darker.JPG";
import ari11 from "../../Images/dinding/1.png";
import ari12 from "../../Images/dinding/2.png";
import arrowwh from "../../Images/ARROW WHITE.png";
import Carousel from './carousel.component';
import { BsImageAlt } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";

const dindingAri = () => {

  let slides = [
    ari4,
    ari2,
    ari12,
    ari8,
    ari9,
    ari11,
    ari7,
    ari3,
    ari5,
    ari6,
  ];

  return (
    <>
        <section style={{
                        backgroundImage: `url(${ari1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        color: 'white',
                        backgroundPosition: 'center',            
        }} className='h-[100vh] tablet-sm:h-[40vh] android:h-[35vh] flex flex-col gap-5 iphone:gap-1 justify-center items-center font-thin filter'>
            <div>
              <a target='blank' 
              href='https://www.google.com/maps/place/Gn.+Dingdingari/@-7.2647222,108.0683333,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMz4GIYQmdwxSzk9uc70wzD3hRJ1C-jkSRRatca!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMz4GIYQmdwxSzk9uc70wzD3hRJ1C-jkSRRatca%3Dw397-h298-k-no!7i1599!8i1200!4m9!3m8!1s0x2e6f52c1734e4243:0xd1287635a2e912e9!8m2!3d-7.2647222!4d108.0683333!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11c53bs2z3?entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D' 
              className='flex items-center gap-1 text-2xl android:text-xl android-sm:text-lg iphone:text-sm'>Detail <span className='font-bold'>Lokasi</span><img className='w-7' src={arrowwh} alt="arrow" /></a>
            </div>
            <div className='flex flex-col gap-5 iphone:gap-3  items-end px-[10%]'>
              <h1 className='font-extrabold text-9xl tablet-sm:text-7xl android:text-6xl android-sm:text-4xl iphone:text-3xl'>DINDING ARI</h1>
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
                                  backgroundImage: `url(${ari10})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  backgroundRepeat: 'no-repeat',
                                  color: 'white',
                                  backgroundPosition: 'center',            
        }} className='w-[30vw] tablet:w-[100vw] h-[100vh] tablet:h-[50vw] flex flex-col justify-end bg-slate-100 text-6xl android:text-5xl iphone:text-3xl font-thin'>
          <div className='bg-[#004194] p-10 bg-opacity-40 tablet:h-full'>
            <h1 className=' font-bold'>GUNUNG</h1>
            <h2 className=' ml-5 mt-3 iphone:mt-0'>DINDING ARI</h2>
          </div>
        </div>
        <div className='w-[70vw] tablet:w-full h-[100vh]  py-[10%] px-[10%] text-[#505050]'>
              <h1 className='text-6xl mb-2 title font-semibold text-[#137fb8] tablet-sm:text-5xl android:text-4xl android-sm:text-2xl iphone:text-xl'>DINDING ARI</h1>
              <p className='text-3xl tablet-sm:text-xl android:text-lg android-sm:text-sm iphone:text- leading-10'>Dari <span className='font-bold text-[#137fb8]'>puncak Dinding Ari</span>, 
                pengunjung dapat melihat pemandangan <span className='font-bold text-[#137fb8]'>Kota Tasikmalaya</span> dari ketinggian, 
                <br />serta area <span className='font-bold text-[#137fb8]'>perbukitan dan persawahan</span> yang mengelilinginya. 
                Selain itu, lokasi ini juga sering dijadikan sebagai tempat <span className='text-[#137fb8] font-bold'>berkemah</span> 
                oleh para <span className='text-[#137fb8] font-bold'>pendaki</span> lokal maupun wisatawan yang ingin menikmati 
                suasana malam di <span className='text-[#137fb8] font-bold'>alam terbuka.</span></p>
        </div>
        </section>
        <section className='h-[100vh] tablet:h-[60vh] android:h-[30vh]'>
        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31662.320110966135!2d108.04773393476562!3d-7.264722199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f52c1734e4243%3A0xd1287635a2e912e9!2sGn.%20Dingdingari!5e0!3m2!1sid!2sid!4v1724314685206!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </>
  )
}

export default dindingAri
