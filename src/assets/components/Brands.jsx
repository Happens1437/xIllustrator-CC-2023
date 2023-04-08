import React from 'react'
import bbc from '../images/bbc.png'
import deliveroo from '../images/deliveroo.png'
import discord from '../images/discord.png'

const Brands = () => {
    return <section className=' w-full min-h-[50vh] bg-background overflow-hidden pb-20'>

        <h4 className=' font-poppins font-bold text-textBlack text-center text-4xl leading-10 max-w-sm mx-auto pt-20'>Some brands we've worked with</h4>
        <p className=' font-overpass text-textGray text-center max-w-sm mx-auto text-lg my-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

        <div id='brands' className=' flex px-10 mx-auto'>
            <img src={bbc} alt="bbc-logo" width={"35%"} className='cursor-pointer' />
            <img src={discord} alt="discord-logo" width={"35%"} className='cursor-pointer' />
            <img src={deliveroo} alt="deliveroo-logo" width={"35%"} className='cursor-pointer' />

        </div>
    </section>
}

export default Brands