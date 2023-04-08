import React from "react";
import send from "../images/send.svg";
import instagram from "../images/socials/instagram.svg";
import linkedin from "../images/socials/linkedin.svg";
import meta from "../images/socials/meta.svg";
import slack from "../images/socials/slack.svg";
import twitter from "../images/socials/twitter.svg";

const Footer = () => {
    return (
        <section className=" w-full min-h-screen bg-mainPurple">
            <div className=" container pt-20 mx-auto">
                <h4 className=" text-white font-poppins text-4xl font-bold text-center pt-20">
                    Contact Us
                </h4>
                <p className=" font-overpass text-background text-center font-normal max-w-xs  mx-auto py-14 text-lg">
                    Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do euismod
                    tempor incididunt ut labore et dolore
                </p>

                <div id="email-form" className=" max-w-[80%] mx-auto my-10 ">
                    <form className=" rounded-full bg-white flex justify-between px-2 py-1">
                        <input
                            type="text"
                            placeholder="enter your email address"
                            className=" font-overpass placeholder:text-slate-500 rounded-full w-3/4 outline-none pl-4 text-textGray"
                        />
                        <button
                            type="submit"
                            className=" bg-mainPurple rounded-full w-[50px] h-[50px] p-3 text-center flex justify-center items-center hover:bg-reviewPurple"
                        >
                            <img src={send} width={"60%"} />
                        </button>
                    </form>

                    <div id="socials" className=" w-full flex justify-between mt-72">
                        <a href="">
                            <img src={instagram} alt="instagram" className=" cursor-pointer" />
                        </a>

                        <a href="">
                            <img src={twitter} alt="twitter" className=" cursor-pointer" /></a>


                        <a href="">
                            <img src={meta} alt="meta" className=" cursor-pointer" />
                        </a>


                        <a href="">
                            <img src={linkedin} alt="linkedin" className=" cursor-pointer" />

                        </a>
                        <a href="">
                            <img src={slack} alt="slack" className=" cursor-pointer" />

                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
