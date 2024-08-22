import React from 'react'
import ari1 from "../../Images/dinding/bgDarker.JPG";
import ari2 from "../../Images/dinding/IMG_0948.JPG";
import ari3 from "../../Images/dinding/IMG_0949.JPG";
import ari4 from "../../Images/dinding/IMG_1052.JPG";
import arrowwh from "../../Images/ARROW WHITE.png";
import Carousel from './carousel.component';

const dindingAri = () => {

  let slides = [
    ari2,
    ari1,
    ari3,
    ari4,
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

        <section>
          <div className='w-full m-auto'>
            <Carousel slides={slides} />
          </div>
        </section>
    </>
  )
}

export default dindingAri