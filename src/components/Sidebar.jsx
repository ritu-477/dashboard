import React from 'react'
import starEllipse from '../assets/images/webp/star-ellipse.webp';
import { EVENTS_DATA } from '../utils/Helper';
import Icon from '../common/Icons';
import { useLocation} from 'react-router-dom';
import SliderRecommended from './SliderRecommended';

const Sidebar = () => {
    const location = useLocation();
    const Heading = ['The role of LNG', 'Global Hydrogen Course'];
    const Data = ['Requirements', 'Events', 'Career event', 'Activities', 'Masterclasses'];
  return (
      <div className='max-md:ml-auto w-full sm:w-[83.3%] overflow-hidden'>
          <div className="bg-yellow w-full fixed top-0 flex justify-end left-1/2 -translate-x-1/2 h-[240px]">
              <img src={starEllipse} alt="star-ellipse" className='max-w-[200px] w-full lg:opacity-100 opacity-30' />
          </div>
          <div className="lg:px-8 lg:pt-8 pt-7 px-5 pb-7 relative z-20 w-full overflow-hidden">
              <h2 className='font-bold text-custom3xl leading-7 sm:text-3xl md:text-4xl sm:leading-9 mt-7 sm:mt-2'>Welcome back, Zareh 👋🏻</h2>
              <p className='md:mt-5 mt-3 font-normal text-base font-open'>Below you find your upcoming events, enrolled programmes and progress</p>
              <div className="md:mt-12 sm:mt-8 mt-6 xl:flex-row flex-col flex justify-between gap-4 2xl:gap-16">
                  <div className={`rounded-lg w-full bg-white p-3 sm:p-6 lg:p-8 ${location.pathname === '/on%20demand' || location.pathname === '/programmes' ? 'hidden' : 'block'} ${location.pathname === '/events' ? 'w-full' : 'xl:w-[58.9%]'}`}>
                      <h2 className='font-bold text-custom2xl leading-6 sm:text-2xl mb-4 lg:mb-9'>You have 3 upcoming events</h2>
                      {EVENTS_DATA.map((items, idx) => (
                          <div key={idx} className="flex justify-between items-center mt-6 w-full">
                              <div className="flex flex-col items-center justify-center bg-black black-circle md:w-20 md:h-20 sm:h-16 w-14 h-14 sm:w-16 rounded-full">
                                  <p className='font-black text-lg sm:text-xl lg:text-3xl text-white !lg:leading-8'>{items.date}</p>
                                  <p className='font-light text-xs sm:text-sm font-open md:text-lg text-white md:leading-5 capitalize'>{items.months}</p>
                              </div>
                              <div className="flex flex-col max-w-[444px] w-8/12 lg:w-full">
                                  <p className='font-bold text-sm md:text-base'>{items.title}</p>
                                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2">
                                      <div className='flex'>
                                          <a href="/"><Icon iconName='timer' /></a>
                                          <p className='font-normal font-open text-xs ml-1'>{items.time}</p>
                                      </div>
                                      <div className='flex'>
                                          <a href="/"><Icon iconName='location' /></a>
                                          <p className='font-normal font-open text-xs ml-1'>{items.location}</p>
                                      </div>
                                  </div>
                              </div>
                              <a href="/" className='size-8 justify-center items-center flex hover:bg-cream duration-300 ease-linear hover:border-black group rounded-full border border-cream'><Icon className='duration-300 ease-linear group-hover:scale-90' iconName='arrowCircle' /></a>
                          </div>
                      ))}
                      <a href="/" className='flex items-center gap-2 font-semibold text-sm duration-300 ease-linear font-open group max-sm:mb-6 mt-6 xl:mt-12 w-fit'>More events <Icon className='duration-300 ease-linear group-hover:translate-x-1' iconName='arrowCircle' /></a>
                  </div>
                  <div className={`rounded-lg w-full xl:w-[41.6%] bg-white p-3 sm:p-6 lg:p-8 ${location.pathname === '/programmes' ? '!w-full' : 'block'} ${location.pathname === '/events' ? 'hidden' : 'block'} ${location.pathname === '/on%20demand' ? 'hidden' : 'block'}`}>
                      <h2 className='font-bold text-custom2xl leading-6 sm:text-2xl mb-4 lg:mb-9'>Your programmes</h2>
                      {[...Array(2)].map((_, index) => (
                          <div key={index} className="border border-cream rounded-lg py-6 px-4 sm:py-8 sm:px-6 mt-4 relative overflow-hidden">
                              <h3 className='font-bold text-base sm:text-lg sm:leading-[22px] mb-4'>{Heading[index]}</h3>
                              {[...Array(5)]
                                  .slice(0, index === 0 ? 5 : 2)
                                  .map((_, idx) => (
                                      <div key={idx} className="mt-3 max-w-[256px] w-full">
                                          <p className="font-normal font-open text-xs">{Data[idx]}</p>
                                          <div className="flex gap-2 mt-0.5">
                                              {idx === 2 ? null : <span className="w-1/2 flex bg-black rounded-3xl h-2"></span>}
                                              {Array.from({ length: idx === 1 || idx === 3 ? 4 : 1 }).map((_, spanIdx) => (
                                                  <span
                                                      key={spanIdx}
                                                      className={`flex bg-cream rounded-3xl h-2 ${idx === 2 ? "w-full" : "w-1/2"}`}
                                                  ></span>
                                              ))}
                                          </div>
                                      </div>
                                  ))}
                              <span className='flex bg-yellow size-[100px] sm:size-[120px] absolute rounded-full -top-11 -right-11'></span>
                              <Icon className='absolute top-2 sm:top-4 sm:right-4 right-2 sm:w-14 w-10' iconName={index === 0 ? "boatIcon" : "hydrogenIcon"} />
                          </div>
                      ))}
                      <a href="/" className='flex items-center gap-2 font-open font-semibold text-sm duration-300 ease-linear group mt-6 w-fit mb-6 sm:mb-1'>More programmes <Icon className='duration-300 ease-linear group-hover:translate-x-1' iconName='rightArrow' /></a>
                  </div>
              </div>
          </div>
          {/* slider */}
        <SliderRecommended/>
      </div>
  )
}

export default Sidebar