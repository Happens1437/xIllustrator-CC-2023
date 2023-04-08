import React, { useState, useEffect } from 'react';
import logo from '../images/ReactDevs.svg';
import hamburger from '../images/hambergermenu.svg';
import close from '../images/closecircle.svg';
import logo_white from '../images/ReactDevs_white.svg';


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }

    }, [])

    return (
        <nav className={`${scrolled ? "bg-background/100" : ""} w-full h-[12vh] px-10 lg:px-0 bg-background/0 fixed flex justify-center items-center z-50 `}>
            <div className=' container flex justify-between items-center'>
                <div>
                    <img src={logo} alt="react-devs-logo" className=' w-[150px]' />
                </div >

                <button onClick={() => setToggle(!toggle)} className=' md:block lg:hidden'>
                    <img src={hamburger} />
                </button>

                <article className=' hidden md:hidden text-textGray font-poppins lg:inline-flex items-center relative md:gap-5'>
                    <div className=' lg:inline-flex items-center gap-11 lg:ml-24'>
                        <h6>Home</h6>
                        <h6></h6>
                        <h6>About</h6>
                        <h6>Clients</h6>
                        <h6>Contact Us</h6>
                    </div>
                </article>

                <article className=' font-poppins hidden lg:block mr-20'>
                    <button className=' py-4 px-6 bg-mainPurple rounded-full text-white md:py-4 md:px-5 '>Get a Quote</button>

                </article>
            </div>

            {
                toggle && <article className=' md:block lg:hidden'>
                    <div className=' bg-black w-full h-[100vh] absolute left-0 top-0'>
                        <div id="container" className=' px-10 h-[12vh] flex items-center'>
                            <div className=' flex justify-between w-full'>
                                <img src={logo_white} alt="react-devs-logo" />
                                <img src={close} onClick={() => setToggle(!toggle)} className=" cursor-pointer" />
                            </div>
                        </div>
                        <div className=' w-[84%] h-[1px] bg-slate-700 mx-auto' />

                        <div id="menu-list" className=' font-poppins capitalize flex flex-col text-center text-xl gap-y-6 px-10 mt-10'>
                            <a href="#" className=' text-slate-300 py-5 border-purple-200/70 rounded-lg border'>Home</a>
                            <a href="#" className=' text-slate-300 py-5 border-purple-200/70 rounded-lg border'>About us</a>
                            <a href="#" className=' text-slate-300 py-5 border-purple-200/70 rounded-lg border'>clients</a>
                            <a href="#" className=' text-slate-300 py-5 border-purple-200/70 rounded-lg border'>Contact us</a>
                            <a href="#" className=' text-slate-200 py-5 bg-mainPurple rounded-lg uppercase absolute w-full left-0 bottom-0'>get a quote</a>

                        </div>

                        <div className=' w-[260px] h-[260px] bg-blurPurple rounded-full blur-[160px] absolute top-0 right-16' />
                        <div className=' w-[230px] h-[270px] bg-blurPurple rounded-full blur-[180px] absolute bottom-0 left-32' />

                    </div>
                </article>
            }
        </nav >
    )
}

export default Navbar