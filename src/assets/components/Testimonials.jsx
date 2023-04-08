import React from 'react'
import janella from '../images/janella.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Navigation, Pagination } from 'swiper'


const Testimonials = () => {
    return (
        <section className=' w-full min-h-screen bg-mainPurple py-10'>
            <h4 className=' font-poppins text-white text-4xl text-center my-20 font-bold'>Client Testimonials</h4>
            <p className=' font-overpass text-background text-lg text-center max-w-sm mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>


            <Swiper modules={[Navigation, Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 3500 }} style={{
                "--swiper-pagination-color": "#FAFAFA",
                "--swiper-pagination-bullet-inactive-color": "#000000"

            }}>
                <SwiperSlide>
                    <div id="review" className=' bg-white w-fit my-14 mx-auto py-16 px-8 rounded-lg cursor-pointer'>
                        <h6 className=' font-overpass text-mainPurple text-lg text-center max-w-xs mx-auto font-bold'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"</h6>
                        <div id="reviewer" className=' mt-10 w-fit mx-auto flex items-center justify-center gap-4'>
                            <img src={janella} />

                            <div className=' font-overpass text-left max-w-sm mx-auto'>
                                <p className=' text-textBlack font-bold'>Janella</p>
                                <p className=' uppercase text-mainPurple font-bold'>Luton</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div id="review-2" className=' bg-reviewPurple w-fit my-14 mx-auto py-16 px-8 rounded-lg cursor-pointer'>
                        <h6 className=' font-overpass text-background text-lg text-center max-w-xs mx-auto font-bold'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"</h6>
                        <div id="reviewer" className=' mt-10 w-fit mx-auto flex items-center justify-center gap-4'>
                            <img src={janella} />

                            <div className=' font-overpass text-left max-w-sm mx-auto'>
                                <p className=' text-background font-bold'>Janella</p>
                                <p className=' uppercase text-white font-bold'>Luton</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div id="review" className=' bg-white w-fit my-14 mx-auto py-16 px-8 rounded-lg cursor-pointer'>
                        <h6 className=' font-overpass text-mainPurple text-lg text-center max-w-xs mx-auto font-bold'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"</h6>
                        <div id="reviewer" className=' mt-10 w-fit mx-auto flex items-center justify-center gap-4'>
                            <img src={janella} />

                            <div className=' font-overpass text-left max-w-sm mx-auto'>
                                <p className=' text-textBlack font-bold'>Janella</p>
                                <p className=' uppercase text-mainPurple font-bold'>Luton</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>










        </section>
    )
}

export default Testimonials