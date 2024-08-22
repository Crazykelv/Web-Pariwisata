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
import arrowwh from "../../Images/ARROW WHITE.png";
import Carousel from './carousel.component';
import { BsImageAlt } from "react-icons/bs";

const dindingAri = () => {

  let slides = [
    ari4,
    ari2,
    ari8,
    ari9,
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
        }} className='h-[100vh] flex flex-col gap-5 justify-center items-center font-thin filter'>
            <div>
              <a href='' className='flex items-center gap-1 text-2xl'>Detail <span className='font-bold'>Lokasi</span><img className='w-7' src={arrowwh} alt="arrow" /></a>
            </div>
            <div className='flex flex-col gap-5 items-end'>
              <h1 className='font-extrabold text-9xl'>DINDING ARI</h1>
              <a className='font-normal text-2xl outline px-5 py-1' href="">LIHAT GALERI</a>
            </div>
        </section>
        <div className='py-10'>
          <h1 className='text-5xl text-[#137FB8] flex gap-2 justify-center items-center font-thin text-center'>GALERI <span className='font-bold'>FOTO</span><BsImageAlt className='ml-5' /></h1>
          <h1 className='text-xl text-[#137FB8] text-center my-2'>slide for more</h1>
        </div>
        <section>
          <div className='w-full m-auto'>
            <Carousel slides={slides} />
          </div>
        </section>

        <section className='h-[100vh] flex'>
        <div style={{
                                  backgroundImage: `url(${ari10})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  backgroundRepeat: 'no-repeat',
                                  color: 'white',
                                  backgroundPosition: 'center',            
        }} className='w-[30vw] h-[100vh] flex flex-col justify-end bg-slate-100 text-6xl font-thin'>
          <div className='bg-[#004194] p-10 bg-opacity-40 h-[300px]'>
            <h1 className=' font-bold'>GUNUNG</h1>
            <h2 className=' ml-5 mt-3'>DINDING ARI</h2>
          </div>
        </div>
        <div className='w-[70vw] h-[100vh] py-[250px] pl-[230px] text-[#505050]'>
              <h1 className='text-8xl mb-2 title font-bold'>DINDING ARI</h1>
              <p className='text-3xl max-w-[800px] leading-10'>Dari <span className='font-bold'>puncak Dinding Ari</span>, 
                pengunjung dapat melihat pemandangan <span className='font-bold'>Kota Tasikmalaya</span> dari ketinggian, 
                <br />serta area <span className='font-bold'>perbukitan dan persawahan</span> yang mengelilinginya. 
                Selain itu, lokasi ini juga sering dijadikan sebagai tempat <span className='font-bold'>berkemah</span> 
                oleh para <span className='font-bold'>pendaki</span> lokal maupun wisatawan yang ingin menikmati 
                suasana malam di <span className='font-bold'>alam terbuka.</span></p>
        </div>
        </section>
        <section className='h-[100vh]'>
        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31662.320110966135!2d108.04773393476562!3d-7.264722199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f52c1734e4243%3A0xd1287635a2e912e9!2sGn.%20Dingdingari!5e0!3m2!1sid!2sid!4v1724314685206!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </>
  )
}

export default dindingAri