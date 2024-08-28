import React from "react";
import logo from "../Images/logo.png";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {

    return (
    <>
      <footer className="py-5 pb-10 px-[10%] h-[25vh] flex flex-wrap gap-20 justify-between items-center text-[#818CB3]">
        <div className="flex flex-col text-lg">
            <h1 className="text-2xl font-bold mb-3">ESTASIK by SICODEV</h1>
            <h2 className="flex items-center gap-2">Copyright <FaRegCopyright />2024</h2>
            <h2>Siliwangi Code Developer Universitas Siliwangi</h2>
            <h2>Jurusan Informatika</h2>
        </div>
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl mb-3">MORE INFORMATION</h1>
            <a href="https://unsil.ac.id/">Website Universitas Siliwangi</a>
            <a href="https://if.unsil.ac.id/">Website Jurusan Informatika Universitas Siliwangi</a>
            <a href="https://sicodev.my.id/">Website Sicodev</a>
            <a href="https://www.instagram.com/sicodev.unsil/">Instagram Sicodev</a>
        </div>
      </footer>
    </>

    )

}

export default Footer;