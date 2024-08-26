import React from "react";
import '../App.css';
import resik from "../Images/karangresik/karangresik1.jpg";
import resik2 from "../Images/karangresik/karangresik2.jpg";
import pointer from "../Images/map-pointer.png";
import arrow from "../Images/ARROW BLUE.png";
import arrowwh from "../Images/ARROW WHITE.png";
import karang from "../Images/karangtawulan/IMG_8663.JPG";
import ari from "../Images/dinding/IMG_1052.JPG";
import ar2 from "../Images/ar2.png";
import kr from "../Images/kr2.png"
import rs from "../Images/rs.png"

const Dash = () => {

    return (
        <>
        <body>
            {/* HERO SECTION START */}
            <section className="h-[120vh] mb-20 py-52 px-32" id="estasik">
                <container className="relative">
                        <a href="https://maps.app.goo.gl/q3tgBZsnTqt938Tq5" target="blank" className="items-end"><img className="absolute right-0 w-16 items-end" src={pointer}></img></a>
                        <div className="text-[#137FB8] text-7xl">
                            <h1 className="mb-10">tasik <br/><span className="text-9xl font-bold">estetik,</span></h1>
                            <div className="flex gap-2 items-center">
                            <a href="#popular" className="text-4xl font-[300]">go <span className="font-bold">explore</span></a>
                            <img className="w-8 item-end" src={arrow}></img>
                            </div>
                        </div>
                </container>
            </section>
            {/* HERO SECTION END */}



        {/* POPULAR SECTION START */}
            <section className="popular pt-16 max-h-[95vh]" id="popular">
                <div className="flex flex-col items-center justify-center text-[#137FB8]">
                    <h1 className="text-4xl font-[300]"><span className="font-[700]">POPULAR </span>DESTINATION</h1>

                    <div className="line my-7"></div>

                    <div className="container flex justify-center mx-auto">
                        <div className="flex justify-items-center gap-10">
                            <a href="/dindingAri" className="relative"> {/* IMAGE BOX */}
                                <img className="max-w-[500px]" src={ari}/>
                                <div className="absolute inset-0 mt-96 flex items-center justify-center bg-[#137FB8] bg-opacity-65"><h1 className="text-center text-xl font-[700] text-white">GUNUNG <br/><span className="font-[300]">DINDING ARI</span></h1></div>
                            </a>
                            <div className="relative"> {/* IMAGE BOX */}
                                <img className="max-w-[500px]" src={karang}/>
                                <div className="absolute inset-0 mt-96 flex items-center justify-center bg-[#137FB8] bg-opacity-65"><h1 className="text-center text-xl font-[700] text-white">PANTAI <br/><span className="font-[300]">KARANG TAWULAN</span></h1></div>
                            </div>
                            <div className="relative"> {/* IMAGE BOX */}
                                <img className="max-w-[500px]" src={resik}/>
                                <div className="absolute inset-0 mt-96 flex items-center justify-center bg-[#137FB8] bg-opacity-65"><h1 className="text-center text-xl font-[700] text-white">BUATAN <br/><span className="font-[300]">KARANG RESIK</span></h1></div>
                            </div>
                            </div>
                            </div>
                </div>
            </section>
            {/* POPULAR SECTION END */}


            <a href="#more" className="flex justify-center items-center gap-2 my-14 text-[#137FB8]">
                                <h1 className="text-4xl font-[300]">More <span className="font-bold">Destinations</span></h1>
                                <img className="w-8 item-end" src={arrow}></img>
            </a>
            <section className="h-[180vh] flex flex-col mt-14" id="more">
                <div className="flex justify-between h-[60vh]">
                    <div className="flex flex-col items-center justify-center w-[50vw] font-[300] text-white gap-5">
                        <h1 className="title text-7xl">PEGUNUNGAN</h1>
                        <p className="max-w-96 text-center text-xl">
                            Salah satu pegunungan yang terkenal di <span className="font-bold">Tasikmalaya</span> adalah <span className="font-bold">galunggung</span>, 
                            banyak spot wisata yang bisa dikunjungi seperti pemandian air panas 
                            sampai wisata hiking <span className="font-bold">dinding ari.</span>
                        </p>
                        <a className="flex items-center gap-2" href="/dataranTinggi">cari lebih banyak mengenai <span className="font-bold">PEGUNUNGAN</span> <img className="w-6" src={arrowwh}/></a>
                    </div>
                    <img className="w-[50vw]" src={ar2}/>
                </div>
                <div className="flex justify-between relative h-[60vh]">
                    <img className="items-center object-cover object-bottom blur " src={karang}/>
                    <div className="absolute overflow-x-auto flex flex-col items-center justify-center w-full h-[60vh] font-[300] text-white gap-5">
                        <div className="ml-28 flex justify-evenly items-center">
                        <h1 className="title text-9xl mr-5">PANTAI</h1>
                        <p className="max-w-[500px] text-xl">
                        Pantai Karang Tawulan saat ini menjadi salah satu 
                        pantai yang banyak di kunjungi di priangan timur 
                        karena disini kamu bisa melihat sunset.
                        </p>
                        </div>
                        <a className="flex items-center gap-2" href="/pantai">cari lebih banyak mengenai <span className="font-bold">PANTAI</span>atau <span className="font-bold">PERAIRAN</span> <img className="w-6" src={arrowwh}/></a>
                    </div>
                </div>
                <div className="flex flex-row-reverse justify-between h-[60vh]">
                    <div className="flex flex-col items-center justify-center w-[50vw] font-[300] text-white gap-5">
                        <h1 className="title text-7xl">WISATA BUATAN</h1>
                        <p className="max-w-96 text-center text-xl">
                            <span className="font-bold">Karang resik</span> menjadi <span className="font-bold">wisata buatan </span> 
                            yang populer di <span className="font-bold">Tasikmalaya</span> karena tempat ini 
                            memiliki unsur budaya luar seperti <span className="font-bold">jepang dan korea.</span>
                        </p>
                        <a className="flex items-center gap-2" href="/buatan">cari lebih banyak mengenai <span className="font-bold">WISATA BUATAN</span> <img className="w-6" src={arrowwh}/></a>
                    </div>
                    <img className="w-[50vw]" src={resik2}/>
                </div>



                {/* <div className="flex flex-row justify-center text-center mx-36">
                    <div className="basis-1/2">
                        lorem ipsum dolor sit amet
                    </div>
                    <div className="basis-1/2">
                        <img className="h-96" src={ar2}/>
                    </div>
                </div>

                <div className="mx-auto justify-center text-center">
                    <img className="h-96 mx-auto" src={kr} />
                </div>

                <div className="mx-36 flex flex-row justify-center text-center">
                    <div className="basis-1/2">
                        <img className="h-96" src={rs}/>
                    </div>
                    <div className="basis-1/2">
                        lorem ipsum dolor sit amet
                    </div>
                </div>
 */}
            </section>
        </body>
            

        </>
    )

}

export default Dash;