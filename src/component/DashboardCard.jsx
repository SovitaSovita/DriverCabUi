import React from "react";
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";


export default function DashboardCard() {

    const listPopular = useSelector((state) => state.allList.listPopular)
    const listSlide = useSelector((state) => state.allList.listSlide)
    const listTourType = useSelector((state) => state.allList.listTourType)
    const listOffer = useSelector((state) => state.allList.listOffer)



    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-6 md:gap-4 sm:gap-2'>
            <Link
                to="/tourtype"
            >
                < Badge badgeContent={listTourType?.length} color="error" className="w-full">
                    <div className="rounded-xl bg-gradient-to-r from-violet-500 w-full to-fuchsia-500 shadow-md border">
                        <div className="flex justify-between items-center">
                            <div className='py-4 px-6 text-white'>
                                <h2 className="card-title uppercase">Setup Tour types</h2>
                                <span>---------------------</span>
                            </div>
                            <div>
                                <EmojiEventsOutlinedIcon sx={{ fontSize: 100 }} className='opacity-20 rotate-12' />
                            </div>
                        </div>
                    </div>
                </Badge>
            </Link>

            <Link
                to="/popular"
            >
                < Badge badgeContent={listPopular?.length} color="info" className="w-full">
                    <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 w-full shadow-md border">
                        <div className="flex justify-between items-center">
                            <div className='py-4 px-6 text-white'>
                                <h2 className="card-title uppercase">Setup Popular Tours</h2>
                                <span>-----------------</span>
                            </div>
                            <div>
                                <FolderCopyOutlinedIcon sx={{ fontSize: 100 }} className='opacity-20 rotate-12' />
                            </div>
                        </div>
                    </div>
                </Badge>
            </Link>

            <Link
                to="/slider"
            >
                < Badge badgeContent={listSlide?.length} color="primary" className="w-full">

                    <div className="rounded-xl bg-gradient-to-r from-gray-400 to-gray-300 w-full shadow-md border">
                        <div className="flex justify-between items-center">
                            <div className='py-4 px-6 text-white'>
                                <h2 className="card-title uppercase">Setup Slide</h2>
                                <span>..................</span>
                            </div>
                            <div>
                                <SlideshowOutlinedIcon sx={{ fontSize: 100 }} className='opacity-20 rotate-12' />
                            </div>
                        </div>
                    </div>
                </Badge>
            </Link>

            <Link
                to="/general"
            >
                <div className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 shadow-md border">
                    <div className="flex justify-between items-center">
                        <div className='py-4 px-6 text-white'>
                            <h2 className="card-title uppercase">General Information</h2>
                            <span>..................</span>
                        </div>
                        <div>
                            <HelpOutlineOutlinedIcon sx={{ fontSize: 100 }} className='opacity-20 rotate-12' />
                        </div>
                    </div>
                </div>
            </Link>
            <Link
                to="/offer"
            >
                < Badge badgeContent={listOffer?.length} color="warning" className="w-full">

                    <div className="rounded-xl bg-gradient-to-r from-orange-400 to-red-400 w-full shadow-md border">
                        <div className="flex justify-between items-center">
                            <div className='py-4 px-6 text-white'>
                                <h2 className="card-title uppercase">Special Offer</h2>
                                <span>..................</span>
                            </div>
                            <div>
                                <HelpOutlineOutlinedIcon sx={{ fontSize: 100 }} className='opacity-20 rotate-12' />
                            </div>
                        </div>
                    </div>
                </Badge>
            </Link>
            <Link
                to="/account"
            >
                <div className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 shadow-md border">
                    <div className="flex justify-between items-center">
                        <div className='py-4 px-6 text-white'>
                            <h2 className="card-title uppercase">Manage Your Account</h2>
                            <span>..................</span>
                        </div>
                        <div>
                            <PersonOutlineOutlinedIcon sx={{ fontSize: 100 }} className='opacity-20 rotate-12' />
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    )
}
