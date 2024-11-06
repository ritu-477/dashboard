import landscape from "../assets/images/webp/landscape-image.webp";
import house from "../assets/images/webp/house-image.webp";
import nigeria from "../assets/images/webp/nigeria-image.webp";
import role from "../assets/images/webp/role-image.webp";

export const SWIPER_DATA = [
    { img: landscape, title: "Leadership: Leading the hydrogen economy" },
    { img: house, title: "Biodiversity - Sixth mass exctinction" },
    { img: nigeria, title: "Energy Transition in Nigeria" },
    { img: role, title: "The role of LNG" },
    { img: landscape, title: "Leadership: Leading the hydrogen economy" },
    { img: house, title: "Biodiversity - Sixth mass exctinction" },
]
export const TABS_DATA = [
    {
        title: "Dashboard",
        icon: "square",
        tabsContent: SWIPER_DATA,
    },
    {
        title: "Events",
        icon: "lock",
        tabsContent: SWIPER_DATA,
    },
    {
        title: "On demand",
        icon: "video",
        tabsContent: SWIPER_DATA,
    },
    {
        title: "Programmes",
        icon: "saved",
        tabsContent: SWIPER_DATA,
    },
];
export const EVENTS_DATA = [
    { date: "26", months: "May", title: "The role of LNG", time: "14:00 - 15:00", location: "Nijenborgh 6, room 1.06" },
    { date: "28", months: "may", title: "Hydrogen: The impact on resources and ecology", time: "10:30 - 12:00", location: "Online" },
    { date: "4", months: "jun", title: "Biodiversity - Sixth mass exctinction", time: "Online", location: "Online" },
    { date: "11", months: "jun", title: "The role of LNG - Part 2", time: "Online", location: "Nijenborgh 6, room 1.06" },
];