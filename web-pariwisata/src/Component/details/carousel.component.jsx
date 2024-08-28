import { useState, useEffect } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

export default function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    const previousSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="overflow-hidden relative tablet:max-w-[100vw] tablet:max-h-[100vh] max-w-[50vw] max-h-[60vh]">
            <div
                className="flex transition ease-out duration-700"
                style={{
                    width: `${slides.length * (isLargeScreen ? 50 : 100)}vw`,
                    transform: `translateX(-${current * (isLargeScreen ? 50 : 100)}vw)`,
                }}
            >
                {slides.map((s, index) => (
                    <img
                        key={index}
                        className="h-[60vh] w-[50vw] tablet:w-[100vw] tablet:max-h-[100vh] android:h-[30vh] object-cover flex-shrink-0"
                        src={s}
                        alt={`Slide ${index}`}
                    />
                ))}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white text-3xl">
                <button onClick={previousSlide} className="bg-black bg-opacity-20 h-[100vh] w-[8vw] flex flex-col items-center justify-center">
                    <IoIosArrowDropleft style={{ height: "80%", width: "80%" }} />
                </button>
                <button onClick={nextSlide} className="bg-black bg-opacity-20 h-[100vh] w-[8vw] flex flex-col items-center justify-center">
                    <IoIosArrowDropright style={{ height: "80%", width: "80%" }} />
                </button>
            </div>
        </div>
    );
}
