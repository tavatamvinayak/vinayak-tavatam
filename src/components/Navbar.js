import Link from 'next/link';
import React, { useState } from 'react'

function Navbar() {

    const [DarkMode, setDarkMode] = useState('moon-stars');
    const [light, setLight] = useState('black');
    const [spiner, setSpiner] = useState('');

// /// // mobile 
const [mobileCollaps, setMobileCollaps] = useState("hidden ");
const MobileClickOpen =()=>{
    console.log("click mobile open collapse")
    setMobileCollaps("block")
}
const MobileClickClose =()=>{
    console.log("click mobile close collapse")
    setMobileCollaps("hidden");
}

    return (
        <div>
            <div className="bg-gray-200">
                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-4 flex-row sm:flex-row sm:justify-between justify-between items-center">
                        <a className="flex title-font font-medium items-center text-gray-900  md:mb-0 hover:animate-ping">
                            <h1 className='text-5xl '>VT</h1>
                        </a>
                        <nav className="sm:ml-auto sm:mr-auto flex flex-wrap items-center text-base justify-center hidden sm:block">
                            <Link href='/' className="mr-5 hover:border-b-2   hover:border-black hover:text-gray-900 hover:font-extrabold text-l ">  Home      </Link>
                            <Link href='/about' className="mr-5 hover:border-b-2   hover:border-black hover:text-gray-900 hover:font-extrabold text-l ">  About     </Link>
                            <Link href='/skills' className="mr-5 hover:border-b-2   hover:border-black hover:text-gray-900 hover:font-extrabold text-l ">  Skill     </Link>
                            <Link href='/projects' className="mr-5 hover:border-b-2   hover:border-black hover:text-gray-900 hover:font-extrabold text-l ">  Projects  </Link>
                            <Link href='/contact' className="mr-5 hover:border-b-2   hover:border-black hover:text-gray-900 hover:font-extrabold text-l ">  Contact   </Link>
                        </nav>
                        <div className='flex items-center'>
                            <div className="mobile mx-8 sm:hidden cursor-pointer" > <button onClick={MobileClickOpen}  className='bg-pink-500 text-white'>open</button> <button onClick={MobileClickClose} className=' text-white bg-pink-500'>close</button> </div>
                            <i className={`bi bi-${DarkMode} text-${light}  fs-2  rounded-circle  ${spiner}  `} onDoubleClick={() => { setDarkMode('moon-stars'); setLight('dark'); setSpiner('') }} onClick={() => { setDarkMode('sun'); setLight('dark '); setSpiner('animate-spin') }}></i>

                        </div>



                    </div>
                </header>
            </div>
            <div className={` ${mobileCollaps} `}>
                <div className="w-[100vw] h-[10vh] flex justify-center items-center  bg-pink-500 sm:hidden">
                    <Link href='/' className="mr-5 hover:border-b-2   hover:border-black hover:text-gray-900 hover:font-extrabold text-l ">  Home      </Link>
                    <Link href='/about' className="mr-5 hover:border-b-2   hover:border-black hover:text-gray-900 hover:font-extrabold text-l ">  About     </Link>
                    <Link href='/skills' className="mr-5 hover:border-b-2   hover:border-black hover:text-gray-900 hover:font-extrabold text-l ">  Skill     </Link>
                    <Link href='/projects' className="mr-5 hover:border-b-2   hover:border-black hover:text-gray-900 hover:font-extrabold text-l ">  Projects  </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar
