import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo/logo.png'

import '../../style/css-style/style.css';
import { get_footer } from '../../redux/service/generalInfoService';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFooterInfo } from '../../redux/slice/LoadingSlice';

function Footer() {

    const dispatch = useDispatch()
    const [data, setData] = useState({})
    
    useEffect(() => {
        get_footer().then((res) => {
            setData(res?.data?.payload)
            dispatch(setFooterInfo(data))
        })
    }, [])

    return (
        <div>
            <div className='bg-hero-footer lg:px-24 md:px-20 phone:px-8'>
                <div id="footer_box" className="mt-5">
                    <div className=" footer-cols pt-10">
                        <div className="grid grid-cols-12">
                            <div className="footer-column lg:col-span-4 phone:col-span-6">
                                <aside id="text-3" className="widget widget_text">
                                    <img src={logo} className="img-fluid py-2" width="130px" />
                                </aside>
                            </div>
                            <div className="lg:col-span-4 phone:col-span-6">
                                <aside id="nav_menu-3" className="widget widget_nav_menu">
                                    <span className="text-lg text-white fw-bolder p-2 font-merienda">Quick Links</span>
                                    <div className="menu-footer-services-container mt-3">
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><Link to={'/'} className="text-white text-decoration-none">Home</Link></li>
                                            <li className="mb-2"><Link to={'/destination'} className="text-white text-decoration-none">Destination</Link></li>
                                            <li className="mb-2"><Link to={'/type'} className="text-white text-decoration-none">Tours</Link></li>
                                            <li className="mb-2"><a href={data?.fbUrl} className="text-white text-decoration-none">Facebook</a></li>
                                            <li className="mb-2"><Link to={'/contact'} className="text-white text-decoration-none">Contact</Link></li>
                                            <li className=""><Link to={'/about'} className="text-white text-decoration-none">About Us</Link></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>

                            <div className="lg:col-span-4 phone:col-span-6">
                                <div className="ft-right">
                                    <span className="text-lg text-white fw-bolder p-2 font-merienda">Contact Us</span>
                                    <div className="isocial mt-3">
                                        <a href={data?.fbUrl} target="_blank"><FacebookOutlinedIcon className='text-root_high mr-2'/></a>
                                        <a href={data?.instaUrl} target="_blank"><InstagramIcon className='text-root_high mr-2'/></a>
                                        <a href={data?.waUrl} target="_blank"><WhatsAppIcon className='text-root_high mr-2'/></a>
                                        <a href={data?.teleUrl} target="_blank"><TelegramIcon className='text-root_high'/></a>
                                    </div>
                                    <div className="text-white mt-3 ft-txt-contact flex flex-col">
                                        <span className="mb-2">Email: {data?.email}</span>
                                        <span className="mb-2">Tel: {data?.phoneNumber}</span>
                                        <span className="mb-2">WhatsApp: {data?.whatAppNumber}</span>
                                        <span>Line: {data?.lineNumber}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright mt-4">
                        <div className="container">
                            <div className="row main_sociobox">
                                <div className="text-center">
                                    <p className="text-slate-600 text-sm pb-3">Copyright Design 2023 &amp; Developed by sovita sovita</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer