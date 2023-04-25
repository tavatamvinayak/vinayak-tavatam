import React, { useContext } from 'react'

import createContextApi from '../../contextApi/contextCreateApi'
import Link from 'next/link'

function HeroSection() {

    const { article } = useContext(createContextApi)

    return (
        <>
            <section className='px-5 py-5 xl:px-16  bg-gray-400 sm:bg-blue-500 md:bg-pink-500 lg:bg-orange-500 xl:bg-red-500'>
                <div className=' sm:flex' >

                    <div className='flex justify-center'>
                        <img src={article.PersonalImg} alt="personal" className='xl:max-w-[100vw] sm:max-w-[40vw] ' />
                    </div>
                    <div className='xl:mt-8 flex  items-center '>
                        <div className='mainContent text-center sm:text-start'>
                            <div className='xl:px-40 sm:px-8 l px-3 py-1  g:px-20  '>
                                <h1 className="text-black font-bold  text-3xl xl:text-6xl  " > {article.articleImgSideh1} </h1>
                            </div>
                            <div className='xl:px-40 sm:px-8  l px-3 py-1  g:px-20  xl:mt-10 xl:text-xl'>
                                <p className=''> {article.articleImgSideP} </p>
                            </div>

                            <div className='flex justify-center sm:my-4'>
                                <Link href="/" className='border-2 m-1 border-black shadow-2xl shadow-black hover:text-white hover:bg-black rounded-2xl'> <button className=' px-3 py-1  xl:px-5  sm:px-3 sm:py-1 xl:py-2 sm:px-3 sm:py-1'>Resume</button></Link>
                                <Link href="/" className='border-2 m-1 border-black shadow-2xl shadow-black hover:text-white hover:bg-black rounded-2xl'> <h3 className=' px-3 py-1  xl:px-5  sm:px-3 sm:py-1 xl:py-2 sm:px-3 sm:py-1'>Contact</h3></Link>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="light flex justify-end px-5">
                    <img src={article.articleLightImg} alt="light" className='w-8 sm:w-16 sm:mt-[-30px]' />
                </div>
            </section>
        </>
    )
}

export default HeroSection
