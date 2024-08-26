import { useState, useEffect } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft  } from "react-icons/io";

export default function Carousel ( { slides } ) {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1)
    }

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1)
    }

    useEffect(()=> {
        const interval = setInterval(()=>{
            nextSlide();
        }, 5000);

        return() => clearInterval(interval);    
    }, [current]);
    return (
        <>
        <div className="overflow-hidden relative max-w-[50vw] max-h-[60vh]">
            <div className="flex transition ease-out duration-700"
            style={{
                width: `${slides.length * 50}vw`,
                transform: `translateX(-${current * 50}vw)`, 
            }}>
                {slides.map((s) => {
                    return <img className="h-[60vh] w-[50vw] object-cover flex-shrink-0" src={s} />;
                })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white text-3xl">
                <button onClick={previousSlide} className="bg-black bg-opacity-20 h-[100vh] w-[8vw] flex flex-col items-center justify-center">
                <IoIosArrowDropleft style={{ height: '100px', 
                                                width: '100px',
                                                }} />
                </button>
                <button onClick={nextSlide} className="bg-black bg-opacity-20 h-[100vh] w-[8vw] flex flex-col items-center justify-center">
                <IoIosArrowDropright style={{ height: '100px', 
                                                width: '100px',
                                                }} />
                </button>
            </div>

        </div>

        </>
    )
}
