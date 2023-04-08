import React from 'react'
import rocket from '../images/rocket.png'
import rocketbgDesktop from '../images/rocket-bg-desktop.svg'
import rocketbgMobile from '../images/rocket-bg-mobile.svg'

const GetInTouch = () => {
    return <section className=' w-full min-h-[50vh] py-20 px-10 bg-background'>
        <div className="wrapper font-poppins font-bold border-2 rounded-lg bg-white flex flex-col justify-center items-center pt-10">
            <div className=' pb-20'>
                <h4 className=' text-textBlack text-3xl text-center mt-10'>Ready to dive in?</h4>
                <h4 className='text-mainPurple text-3xl text-center'>Get in touch today!</h4>
                <a className=' w-full flex'>
                    <button className=' text-center font-poppins text-mainPurple bg-mainPurple/30 py-4 px-6 rounded-full mt-7 mx-auto '>Learn More</button>
                </a>
            </div>

            <div className=' relative mt-20 mx-auto w-fit '>
                <img src={rocket} alt="rocket" className=' absolute -top-40' />
                <img src={rocketbgMobile} width={"160%"} className='' />

                {/* <div className=' w-[380px] h-[180px] bg-mainPurple/40 rounded-t-full' /> */}

            </div>
        </div>
    </section>
}

export default GetInTouch