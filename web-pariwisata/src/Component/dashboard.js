import React from "react";
import { Link } from "react-router-dom";
import bg from "../background.png";
import '../App.css';
import py from "../Images/panyangrayan.png";
import karang from "../Images/karang.png";
import ari from "../Images/ari.png";
import ar2 from "../Images/ar2.png";
import kr from "../Images/kr2.png"
import rs from "../Images/rs.png"

const Dash = () => {

    return (
        <>
        <body>
            <section className="estasik" id="estasik">
                <div className="container">
                    <img className="image" src={bg}/>   {/* Coba ganti ya, bang. Bingung mau background imagenya */}
                </div>
            </section>



            <section className="popular" id="popular">
                <div>
                    <div className="mx-auto text-center">
                        <h1 className="poppins-thin mt-5 mb-3">POPULAR <span>DESTINATION</span></h1>                        
                    </div>

                    <div className="line mx-auto mb-2"></div>

                    <div className="container flex justify-center mx-auto">
                        <div className="flex flex-row justify-items-center">
                            <div className="basis-1/3 me-6 mt-4">
                                <img src={ari}/>
                                <div className=" bg-blue-400 relative bottom-24 me-3 text-center pt-6 pb-2 opacity-35">
                                    <br></br>
                                    <br></br>
                                </div>
                                <h1 className="relative bottom-40 text-center text-white">GUNUNG <br></br> <span>DINDING ARI</span> </h1>
                            </div>
                            <div className="basis-1/3 me-6 mt-4">
                            <img src={karang}/>
                                <div className=" bg-blue-400 relative bottom-24 me-3 text-center pt-6 pb-2 opacity-35">
                                    <br></br>
                                    <br></br>
                                </div>
                                <h1 className="relative bottom-40 text-center text-white">PANTAI <br></br> <span>KARANGTAWULAN</span> </h1>
                            </div>
                            <div className="basis-1/3  mt-4">
                            <img src={py}/>
                                <div className=" bg-blue-400 relative bottom-24 me-3 text-center pt-6 pb-2 opacity-35">
                                    <br></br>
                                    <br></br>
                                </div>
                                <h1 className="relative bottom-40 text-center text-white">BUATAN <br></br> <span>PANYANGRAYAN</span> </h1>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto text-center mb-6">
                        <h1>More <span>Destinations</span> </h1>
                    </div>

                </div>
            </section>



            <section className="more" id="more">

                <div className="flex flex-row justify-center text-center mx-36">
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

            </section>
        </body>
            

        </>
    )

}

export default Dash;