import React, { useEffect, useRef, useState } from 'react';
import {useParams, useNavigate } from 'react-router-dom';
import sideBarLogo from '../assets/images/webp/sidebar-logo.webp';
import Icon from '../common/Icons';
import menImg from '../assets/images/webp/geertjes-image.webp';
import { TABS_DATA } from '../utils/Helper';
import Sidebar from './Sidebar';

const Dashboard = () => {
    const { tabName } = useParams();
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
                <Sidebar />
            </div>
        </div>
    )
}

export default Dashboard
