import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import sideBarLogo from '../assets/images/webp/sidebar-logo.webp';
import Icon from '../common/Icon';
import menImg from '../assets/images/webp/geertjes-image.webp';
import starEllipse from '../assets/images/webp/star-ellipse.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { SWIPER_DATA } from '../utils/Helper';
import { TABS_DATA } from '../utils/Helper';
import { EVENTS_DATA } from '../utils/Helper';

const Dashboard = () => {
    const { tabName } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const [open, setOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const tabIndex = TABS_DATA.findIndex(tab => tab.title.toLowerCase() === tabName?.toLowerCase());
        setActiveTab(tabIndex !== -1 ? tabIndex : 0);
    }, [tabName]);

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", open && window.innerWidth < 640);
    }, [open]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const handleClick = (idx, title) => {
        setActiveTab(idx);
        navigate(`/${title.toLowerCase()}`);
        setOpen(false);
    };
    console.log("Current path:", location.pathname);
    const Data = ['Requirements', 'Events', 'Career event', 'Activities', 'Masterclasses'];
    return (
        <div className='bg-cream w-full relative'>
            <div
                className={`w-full h-full fixed bg-black top-0 right-0 bg-layer transition-opacity duration-300 
    ${open ? 'z-30 opacity-60' : 'z-0 opacity-0'}`}
            />
            <div className='flex w-full'>
                {/* dashboard */}
                <div ref={sidebarRef} className={`md:px-[120px] fixed sm:relative z-[200] duration-300 ease-linear sm:!left-0 sm:px-24 min-h-screen ${open ? "left-0" : "-left-full"}`}>
                    <div className="top-0 sm:max-w-[192px] left-0 md:max-w-[240px] max-w-[240px] w-full flex flex-col justify-between sm:fixed min-h-screen bg-black sm:p-2 p-5 md:p-5">
                        <div className="flex flex-col">
                            <a href="/" className="w-fit mx-auto mt-6"><img src={sideBarLogo} alt="logo" /></a>
                            <div className="flex flex-col mt-16 gap-8">
                                {TABS_DATA.map((tab, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <span className={`w-1.5 h-1.5 rounded-full ${activeTab === idx ? "bg-yellow" : "bg-black"}`} />
                                        <a href={`/${tab.title.toLowerCase()}`}
                                            className={`text-base flex items-center gap-4 font-normal ${activeTab === idx ? "text-yellow" : "text-white"}`}
                                            onClick={(e) => { e.preventDefault(); handleClick(idx, tab.title); }}>
                                            <Icon svgClass={activeTab === idx ? "fill-yellow" : "fill-white"} iconName={tab.icon} />
                                            {tab.title}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:p-5 sm:p-0 p-5 flex flex-col">
                            {["Help", "Contact us", "Log out"].map((text, idx) => (
                                <a key={idx} href="/" className="w-fit text-white opacity-50 mt-4 hover:scale-95 text-sm">{text}</a>
                            ))}
                            <a href="/" className="flex items-center gap-[14px] text-nowrap text-white mt-11">
                                <img src={menImg} className='w-8' alt="user" /> Zareh Geertjes
                            </a>
                        </div>
                    </div>
                    <div
                        onClick={() => setOpen(!open)}
                        className="fixed w-16 h-10 top-0 left-0 sm:hidden z-[150] flex flex-col items-center justify-center cursor-pointer"
                    >
                        {open ? (
                            <>
                                <span className="h-1 absolute w-6 bg-yellow transform rotate-45 transition duration-300"></span>
                                <span className="h-1 absolute w-6 bg-yellow transform -rotate-45 transition duration-300"></span>
                            </>
                        ) : (
                            <div className="flex flex-col gap-1">
                                <span className="block w-6 h-1 bg-black"></span>
                                <span className="block w-6 h-1 bg-black"></span>
                                <span className="block w-6 h-1 bg-black"></span>
                            </div>
                        )}
                    </div>
                </div>
                {/* tabs */}
                <div className='max-md:ml-auto w-full sm:w-[83.3%] overflow-hidden'>
                    <div className="bg-yellow w-full fixed top-0 flex justify-end left-1/2 -translate-x-1/2 h-[240px]">
                        <img src={starEllipse} alt="star-ellipse" className='max-w-[200px] w-full lg:opacity-100 opacity-30' />
                    </div>
                    <div className="lg:p-8 p-3 relative z-20 w-full overflow-hidden">
                        <h2 className='font-bold text-3xl md:text-4xl mt-7 sm:mt-2'>Welcome back, Zareh 👋🏻</h2>
                        <p className='mt-5 font-normal text-base font-open'>Below you find your upcoming events, enrolled programmes and progress</p>
                        <div className="mt-12 xl:flex-row flex-col flex justify-between gap-4 2xl:gap-16">
                            <div className={`rounded-lg w-full bg-white p-3 lg:p-8 ${location.pathname === '/on%20demand' || location.pathname === '/programmes' ? 'hidden' : 'block'} ${location.pathname === '/events' ? 'w-full' : 'xl:w-[58.7%]'}`}>
                                <h2 className='font-bold text-2xl mb-4 lg:mb-9'>You have 3 upcoming events</h2>
                                {EVENTS_DATA.map((items, idx) => (
                                    <div key={idx} className="flex justify-between items-center mt-4 w-full">
                                        <div className="flex flex-col items-center justify-center bg-black black-circle md:w-20 md:h-20 sm:h-16 w-14 h-14 sm:w-16 rounded-full">
                                            <p className='font-black text-lg sm:text-xl lg:text-3xl text-white !lg:leading-8'>{items.date}</p>
                                            <p className='font-light text-xs sm:text-sm font-open md:text-lg text-white md:leading-5 capitalize'>{items.months}</p>
                                        </div>
                                        <div className="flex flex-col max-w-[444px] w-8/12 lg:w-full">
                                            <p className='font-bold text-sm md:text-base'>{items.title}</p>
                                            <div className="flex items-center mt-2">
                                                <a href="/"><Icon iconName='timer' /></a>
                                                <p className='font-normal font-open text-xs ml-1'>{items.time}</p>
                                                <a href="/"> <Icon className=' ml-2 sm:ml-4' iconName='location' /></a>
                                                <p className='font-normal font-open text-xs ml-1'>{items.location}</p>
                                            </div>
                                        </div>
                                        <a href="/" className='w-8 h-8 justify-center items-center flex hover:bg-cream duration-300 ease-linear hover:border-black group rounded-full border border-cream'><Icon className='duration-300 ease-linear group-hover:scale-90' iconName='arrowCircle' /></a>
                                    </div>
                                ))}
                                <a href="/" className='flex items-center gap-2 font-semibold text-sm duration-300 ease-linear font-open group hover:scale-105 mt-12 w-fit mb-5 md:mb-14'>More events <Icon className='duration-300 ease-linear group-hover:scale-90' iconName='arrowCircle' /></a>
                            </div>
                            <div className={`rounded-lg w-full xl:w-[41.3%] bg-white p-3 lg:p-8 ${location.pathname === '/programmes' ? '!w-full' : 'block'} ${location.pathname === '/events' ? 'hidden' : 'block'} ${location.pathname === '/on%20demand' ? 'hidden' : 'block'}`}>
                                <h2 className='font-bold text-2xl mb-4 lg:mb-7'>Your programmes</h2>
                                {[...Array(2)].map((_, index) => (
                                    <div key={index} className="border border-cream rounded-lg py-8 px-6 mt-4 relative overflow-hidden">
                                        <h2 className='font-bold text-lg mb-4'>The role of LNG</h2>
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
                                        <span className='flex bg-yellow w-[120px] h-[120px] absolute rounded-full -top-11 -right-11'></span>
                                        <Icon className='absolute top-4 right-4' iconName={index === 0 ? "boatIcon" : "hydrogenIcon"} />
                                    </div>
                                ))}
                                <a href="/" className='flex items-center gap-2 font-open font-semibold text-sm duration-300 ease-linear group hover:scale-105 mt-6 w-fit mb-1'>More programmes <Icon className='duration-300 ease-linear group-hover:scale-90' iconName='rightArrow' /></a>
                            </div>
                        </div>
                    </div>
                    {/* slider */}
                    <div className={`px-8 relative overflow-hidden w-full ${location.pathname === '/events' || location.pathname === '/programmes' ? 'hidden' : 'block'}`}>
                        <div className="flex w-full justify-between mb-6">
                            <h2 className='font-bold text-2xl'>Recommended for you</h2>
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
                                        <div className="relative overflow-hidden rounded-lg w-full h-full min-h-[292px] bg-white">
                                            <div className="relative overflow-hidden">
                                                <img src={items.img} alt={items.img} className='w-full relative z-10' />
                                            </div>
                                            <div className="bg-white w-full -mt-0.5 p-6">
                                                <h2 className='mt-0.5 text-base leading-4 font-bold min-h-8'>{items.title}</h2>
                                                <div className="flex items-center gap-2.5 mt-4">
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
                </div>
            </div>
        </div>
    )
}

export default Dashboard
