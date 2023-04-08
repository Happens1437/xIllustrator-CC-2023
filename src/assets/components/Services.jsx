import React from 'react'
import { services } from '../../../services'

const Services = () => {
    return <section className=' w-full min-h-screen bg-background '>
        <h4 className=' font-poppins text-black text-center font-bold text-4xl pt-10'>What We Do</h4>
        <p className=' font-overpass text-textGray text-center max-w-sm mx-auto text-md my-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

        <div id='services' className=' w-fit mx-auto pt-6 pb-14'>
            {services.map(({ title, description, id, image }) => {
                return <div key={id} className=" w-fit px-10 py-10 bg-white my-10 rounded-lg cursor-pointer hover:shadow-xl hover:shadow-mainPurple/10">
                    <img src={image} width={"100%"} className=" pb-4" />
                    <h5 className=' font-poppins text-2xl font-bold my-5'>{title}</h5>
                    <p className=' font-overpass text-textGray max-w-[340px]'>{description}</p>
                </div>

            })}
        </div>



    </section>
}

export default Services