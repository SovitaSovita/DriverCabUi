import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo/logo.png'
import Header from './Header'

import CottageIcon from '@mui/icons-material/Cottage';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import TourIcon from '@mui/icons-material/Tour';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InfoIcon from '@mui/icons-material/Info';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function Navbar() {

    const location = useLocation();
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    return (
        <>
            <nav
                className={
                    location.pathname == '/' ?
                        "absolute top-0 w-full bg-root_opacityBG border-gray-200 z-10"
                        : "w-full bg-root_opacityBG border-gray-200 z-10"
                }>
                <Header />
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={logo} className="h-12 mr-3" alt="Logo" />
                    </a>

                    <button
                        onClick={toggleBurger}
                        data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:text-white-smoke focus:outline-none"
                        aria-controls="navbar-default" aria-expanded={isBurgerOpen ? "true" : "false"}>
                        <span className="sr-only">Open main menu</span>
                        {!isBurgerOpen ? <MenuOutlinedIcon /> : <CancelOutlinedIcon />}
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium text-white flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <Link
                                    to="/"
                                    className={location.pathname == '/'
                                        ? 'block py-2 pl-3 pr-4 md:text-root_high bg-root_high md:hover:text-root_low rounded md:bg-transparent md:p-0 transition-all'
                                        : 'block py-2 pl-3 pr-4 hover:text-root_high rounded md:bg-transparent md:p-0 transition-all'}
                                    aria-current="page">
                                    <div className='flex flex-col items-center'>
                                        <CottageIcon />
                                        <span className='font-merienda'>Home</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/destination"
                                    className={location.pathname == '/destination'
                                        ? 'block py-2 pl-3 pr-4 md:text-root_high bg-root_high md:hover:text-root_low rounded md:bg-transparent md:p-0 transition-all'
                                        : 'block py-2 pl-3 pr-4 hover:text-root_high rounded md:bg-transparent md:p-0 transition-all'}>
                                    <div className='flex flex-col items-center'>
                                        <FlightTakeoffOutlinedIcon />
                                        <span className='font-merienda'>Destination</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/type"
                                    className={location.pathname == '/type'
                                        ? 'block py-2 pl-3 pr-4 md:text-root_high bg-root_high md:hover:text-root_low rounded md:bg-transparent md:p-0 transition-all'
                                        : 'block py-2 pl-3 pr-4 hover:text-root_high rounded md:bg-transparent md:p-0 transition-all'}>
                                    <div className='flex flex-col items-center'>
                                        <TourIcon />
                                        <span className='font-merienda'>Tours</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <a href="#"
                                    className='block py-2 pl-3 pr-4 hover:text-root_low rounded md:bg-transparent md:p-0 transition-all'>
                                    <div className='flex flex-col items-center'>
                                        <FacebookOutlinedIcon />
                                        <span className='font-merienda'>Facebook</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <Link to="/contact"
                                    className={location.pathname == '/contact'
                                        ? 'block py-2 pl-3 pr-4 md:text-root_high bg-root_high md:hover:text-root_low rounded md:bg-transparent md:p-0 transition-all'
                                        : 'block py-2 pl-3 pr-4 hover:text-root_high rounded md:bg-transparent md:p-0 transition-all'}>
                                    <div className='flex flex-col items-center'>
                                        <PermContactCalendarIcon />
                                        <span className='font-merienda'>Contact</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about"
                                    className={location.pathname == '/about'
                                        ? 'block py-2 pl-3 pr-4 md:text-root_high bg-root_high md:hover:text-root_low rounded md:bg-transparent md:p-0 transition-all'
                                        : 'block py-2 pl-3 pr-4 hover:text-root_high rounded md:bg-transparent md:p-0 transition-all'}>
                                    <div className='flex flex-col items-center'>
                                        <InfoIcon />
                                        <span className='font-merienda'>About Us</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar