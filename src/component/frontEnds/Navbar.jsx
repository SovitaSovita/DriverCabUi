import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { get_footer } from '../../redux/service/generalInfoService';
import { setFooterInfo } from '../../redux/slice/LoadingSlice';
import { Navbar } from 'flowbite-react';

function NavbarComponent() {

    const location = useLocation();
    const [isBurgerOpen, setIsBurgerOpen] = useState("hidden");
    const dispatch = useDispatch()
    const footerInfo = useSelector((state) => state.loading.footerInfo)

    useEffect(() => {
        get_footer().then((res) => {
            dispatch(setFooterInfo(res?.data?.payload))
        })
    }, [])

    useEffect(() => {
        const body = document.body;

        if (isBurgerOpen === 'block') {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'auto';
        }

        return () => {
            // Cleanup: Reset overflow when the component unmounts
            body.style.overflowY = 'auto';
        };
    }, [isBurgerOpen]);

    const handleLinkClick = (el) => {
        // console.log(isBurgerOpen)
        if (el === 'fromLi') {
            setIsBurgerOpen("hidden");
        } else {
            setIsBurgerOpen(isBurgerOpen === 'hidden' ? 'block' : 'hidden');
        }
    };

    return (
        <div className={
            location.pathname == '/' ?
                "w-full bg-transparent border-gray-200 absolute top-0 z-50"
                : "w-full bg-root_Overlay border-gray-200"}>
            <Header />
            <Navbar fluid rounded className="w-full bg-transparent border-gray-200">
                <Navbar.Toggle onClick={() => handleLinkClick('fromBurger')} />
                <Navbar.Collapse className={`${isBurgerOpen} m-auto`}>
                    <ul className="font-medium bg-brand-black md:bg-transparent md:h-auto h-screen text-white flex flex-col p-4 md:p-0 px-24 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        {/* Left section */}
                        <div className="flex items-center md:flex-row md:space-x-8">
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => handleLinkClick('fromLi')}
                                    className={location.pathname === '/'
                                        ? 'block py-2 pl-3 pr-4 md:text-root_high bg-root_high md:hover:text-root_low rounded md:bg-transparent md:p-0 transition-all'
                                        : 'block py-2 pl-3 pr-4 hover:text-root_high rounded md:bg-transparent md:p-0 transition-all'}
                                    aria-current="page"
                                >
                                    <div className='flex flex-col items-center'>
                                        <CottageIcon />
                                        <span className='font-merienda'>Home</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/destination"
                                    onClick={() => handleLinkClick('fromLi')}
                                    className={location.pathname === '/destination'
                                        ? 'block py-2 pl-3 pr-4 md:text-root_high bg-root_high md:hover:text-root_low rounded md:bg-transparent md:p-0 transition-all'
                                        : 'block py-2 pl-3 pr-4 hover:text-root_high rounded md:bg-transparent md:p-0 transition-all'}
                                >
                                    <div className='flex flex-col items-center'>
                                        <FlightTakeoffOutlinedIcon />
                                        <span className='font-merienda'>Destination</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/type"
                                    onClick={() => handleLinkClick('fromLi')}
                                    className={location.pathname === '/type'
                                        ? 'block py-2 pl-3 pr-4 md:text-root_high bg-root_high md:hover:text-root_low rounded md:bg-transparent md:p-0 transition-all'
                                        : 'block py-2 pl-3 pr-4 hover:text-root_high rounded md:bg-transparent md:p-0 transition-all'}
                                >
                                    <div className='flex flex-col items-center'>
                                        <TourIcon />
                                        <span className='font-merienda'>Tours</span>
                                    </div>
                                </Link>
                            </li>
                        </div>

                        {/* Centered Logo */}
                        <Navbar.Brand as={Link}>
                            <Link to={'/'} className="flex items-center" onClick={() => handleLinkClick('fromLi')}>
                                <img src={logo} className="h-12" alt="Logo" />
                            </Link>
                        </Navbar.Brand>

                        {/* Right section */}
                        <div className="flex items-center md:flex-row md:space-x-8">
                            <li>
                                <a href={footerInfo?.fbUrl} target='_blank'
                                    className='block py-2 pl-3 pr-4 hover:text-root_low rounded md:bg-transparent md:p-0 transition-all'>
                                    <div className='flex flex-col items-center'>
                                        <FacebookOutlinedIcon />
                                        <span className='font-merienda'>Facebook</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <Link to="/contact"
                                    onClick={() => handleLinkClick('fromLi')}
                                    className={location.pathname === '/contact'
                                        ? 'block py-2 pl-3 pr-4 md:text-root_high bg-root_high md:hover:text-root_low rounded md:bg-transparent md:p-0 transition-all'
                                        : 'block py-2 pl-3 pr-4 hover:text-root_high rounded md:bg-transparent md:p-0 transition-all'}
                                >
                                    <div className='flex flex-col items-center'>
                                        <PermContactCalendarIcon />
                                        <span className='font-merienda'>Contact</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about"
                                    onClick={() => handleLinkClick('fromLi')}
                                    className={location.pathname === '/about'
                                        ? 'block py-2 pl-3 pr-4 md:text-root_high bg-root_high md:hover:text-root_low rounded md:bg-transparent md:p-0 transition-all'
                                        : 'block py-2 pl-3 pr-4 hover:text-root_high rounded md:bg-transparent md:p-0 transition-all'}
                                >
                                    <div className='flex flex-col items-center'>
                                        <InfoIcon />
                                        <span className='font-merienda'>About Us</span>
                                    </div>
                                </Link>
                            </li>
                        </div>
                    </ul>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default NavbarComponent