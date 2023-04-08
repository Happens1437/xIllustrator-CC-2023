import React from 'react'
import divider from '../images/divider.svg'
import dots from '../images/dots.png'
import aboutIcon from '../images/about-icon.svg'

const About = () => {
    return (
        <section className=' w-full h-screen bg-background flex flex-col justify-between relative'>
            <img src={divider} className=" py-10 auto w-fit mx-auto top-5" />
            <div className=' flex justify-center items-center'>
                <div className=' flex flex-col justify-center items-center relative'>
                    <div className=' absolute -top-20 left-[27.5%] z-10'>
                        <img src={aboutIcon} className=" p-10 bg-white rounded-2xl w-[70%]" />
                    </div>
                    <div className=' w-[100%] h-[100%] bg-mainPurple relative rounded-2xl overflow-clip pt-40 pb-10 mx-16'>
                        <div className=" flex flex-col justify-center py-10 overflow-hidden">
                            <h4 className=' font-poppins text-background font-bold text-4xl mb-5 text-center'>Who We Are</h4>
                            <p className=' font-overpass text-background text-center font-normal max-w-xs  mx-auto py-5 text-lg'>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do euismod tempor incididunt ut labore et dolore</p>
                            <button className=' py-5 px-10 w-fit mx-auto rounded-full bg-background text-mainPurple my-10 font-poppins font-bold text-center '>Learn more</button>
                        </div>

                        <div id="dots">
                            <img src={dots} className=' absolute -bottom-60 right-0 opacity-40' />
                            <img src={dots} className=' absolute -top-60 left-0 opacity-40' />
                        </div>
                    </div>
                </div>
            </div>
            <img src={divider} className=" py-10 auto w-fit mx-auto top-5" />

        </section>
    )
}

export default About