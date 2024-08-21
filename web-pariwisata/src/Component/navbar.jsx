import React from "react";
import logo from "../Images/logo.png";


const Navbar = () => {

    return (
    // <>
    //     <nav className="">
    //     <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //       <div className="relative flex h-16 items-center justify-between">
    //         <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
    //           <div className="flex flex-shrink-0 items-start me-96">
    //             <img className="h-20 w-auto" src={logo} alt="Your Company" />
    //           </div>
    //           <div className="me-96">
    //           </div>
    //           <div className="hidden sm:ml-6 sm:block">
    //             <div className="flex space-x-4">
    //               <a href="#" className="rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-blue-300" aria-current="page">Home</a>
    //               <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-blue-300 hover:bg-gray-700 hover:text-white">Pegunungan</a>
    //               <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-blue-300 hover:bg-gray-700 hover:text-white">Pantai</a>
    //               <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-blue-300 hover:bg-gray-700 hover:text-white">Buatan</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </>       
    <>
      <nav className="py-5 px-40 flex justify-between items-center text-[#818CB3]">
        <a href="/"><img src={logo} alt="logo" className="w-60"></img></a>
        <div className="flex gap-14 text-xl">
          <a href="/">Home</a>
          <a href="/pantai">Pantai</a>
          <a href="/datarantinggi">Dataran Tinggi</a>
          <a href="/buatan">Wisata Buatan</a>
        </div>
      </nav>
    </>

    )

}

export default Navbar;