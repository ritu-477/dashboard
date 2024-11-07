import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SWIPER_DATA } from '../utils/Helper';
import 'swiper/css';
import Icon from '../common/Icons';
import { useLocation } from 'react-router-dom';


const SliderRecommended = () => {
  const location = useLocation();
  return (
    <div className={`lg:px-8 px-5 relative overflow-hidden w-full ${location.pathname === '/events' || location.pathname === '/programmes' ? 'hidden' : 'block'}`}>
      <div className="flex w-full justify-between mb-4 md:mb-6">
        <h2 className='font-bold sm:text-2xl text-custom2xl leading-6'>Recommended for you</h2>
        <div className="flex items-center justify-center gap-2 relative">
          <Icon className="hover:scale-95 swiper-button-next !top-auto !relative !right-auto !w-8 !h-8 cursor-pointer hover:bg-yellow duration-300 ease-linear hover:border-off-yellow rounded-full border border-[#BBBAB6] flex items-center justify-center" iconName='rightArrow' />
          <Icon className="hover:scale-95 swiper-button-prev !top-auto !relative !left-auto rotate-180 cursor-pointer !w-8 !h-8 hover:bg-yellow duration-300 ease-linear hover:border-off-yellow rounded-full border items-center justify-center border-[#BBBAB6]" iconName='leftArrow' />
        </div>
      </div>
      <div className=" w-full">
        <Swiper
          className='!pb-14'
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            }
          }}
        >
          {SWIPER_DATA.map((items, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative overflow-hidden rounded-lg w-full h-full min-h-[200px] xl:min-h-[292px] bg-white">
                <div className="relative overflow-hidden">
                  <img src={items.img} alt={items.img} className='w-full relative z-10' />
                </div>
                <div className="bg-white w-full -mt-0.5 p-3 sm:p-4 xl:p-6">
                  <h2 className='mt-0.5 max-sm:text-base text-base leading-4 font-bold min-h-8'>{items.title}</h2>
                  <div className="flex items-center gap-2.5 mt-2 sm:mt-4">
                    <a href=""><Icon iconName='location' /></a>
                    <p className='font-normal font-open text-xs'>Online</p>
                  </div>
                  <div className="flex items-center gap-2.5 mb-4 mt-2">
                    <a href="/"><Icon iconName='timer' /></a>
                    <p className='font-normal font-open text-xs'>08:00 - 10:00</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SliderRecommended