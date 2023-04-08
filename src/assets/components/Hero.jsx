import React from 'react'
import model from '../images/hero.png'


const Hero = () => {
    return <>
        <section className=' w-full h-screen bg-background flex flex-col relative lg:hidden'>
            <div className=' flex flex-col mt-28'>
                <h4 className=' font-poppins font-bold text-4xl max-w-sm  mx-auto text-center leading-[45px] pt-10'>Looking to get <span className=' text-mainPurple'>high quality websites?</span></h4>
                <p className=' font-overpass text-textGray text-center max-w-sm mx-auto text-sm my-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className=' font-poppins font-bold text-white bg-mainPurple py-4 px-10 rounded-full text-center w-fit mx-auto lg:py-2'>Learn more</button>
            </div>

            <div className=' flex justify-center'>
                <img src={model} className=' w-[70%] absolute bottom-0 z-20' />
            </div>
            <div className=' w-full h-[20vh] bg-heroSVG/30 absolute bottom-0' />

        </section>

        <section className=' hidden lg:block'>
            <div className=' flex'>
                <div className=' w-[70%] h-screen'>
                    <div className="content mx-48 container mt-72">
                        <h4 className=' font-poppins font-bold text-5xl max-w-lg leading-[58px]'>Looking to get <span className=' text-mainPurple '>high quality websites?</span></h4>
                        <p className=' font-overpass text-textGray max-w-md mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className=' font-poppins font-bold text-white bg-mainPurple py-7 px-12 rounded-full mt-16'>Learn more</button>
                    </div>
                </div>
                <div className=' w-[30%] h-screen bg-heroSVG/30 relative flex'>
                    <div className="model ">

                        <img src={model} className=' w-[560px] absolute bottom-0 right-60' />
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Hero