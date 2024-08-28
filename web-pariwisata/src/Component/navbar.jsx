import React, {useState} from "react";
import logo from "../Images/logo.png";
import { CgMenuLeft } from "react-icons/cg";


const Navbar = () => {  
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

    return (
    <>
      <nav className="py-5 px-40 flex justify-between items-center  text-[#818CB3] android-sm:flex-col-reverse android-sm:items-start tablet-sm:justify-center tablet:px-10">
        <a href="/"><img src={logo} alt="logo" className="w-[80%] tablet-sm:hidden"></img></a>
        <div id="menu" className={`flex gap-14 text-xl tablet:gap-7 android-sm:flex-col android-sm:text-start android-sm:gap-3 android-sm:text-xl tablet-sm:text-base ${isMenuVisible ? '' : 'android-sm:hidden'}`}>
          <a href="/">Home</a>
          <a href="/pantai">Pantai dan Perairan</a>
          <a href="/datarantinggi">Dataran Tinggi</a>
          <a href="/buatan">Wisata Buatan</a>
        </div>
        <CgMenuLeft id="ham-menu" className="text-6xl hidden android-sm:block mb-2" onClick={toggleMenu}/>
      </nav>
    </>

    )

}

export default Navbar;
