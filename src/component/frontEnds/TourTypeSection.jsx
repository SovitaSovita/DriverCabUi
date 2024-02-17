import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import tourImg1 from '../../assets/tour-type/icon1.png'
import tourImg2 from '../../assets/tour-type/icon2.png'
import tourImg3 from '../../assets/tour-type/icon3.png'
import tourImg4 from '../../assets/tour-type/icon4.png'
import tourImg5 from '../../assets/tour-type/icon5.png'
import tourImg6 from '../../assets/tour-type/icon6.png'

import { Button } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function TourTypeSection() {
    const data = useSelector((state) => state.loading.decripInfo)
    const navigator = useNavigate()

    return (
        <section className="mt-32">
            <div className="grid grid-cols-12 m-0">
                <div className="bg_img_div lg:col-span-4 md:col-span-4 col-span-12 px-0">
                    <section className="" id="why-choose-us" data-aos="fade-right" data-aos-duration="140">
                        <div className=" p-0">
                            <div className="inner_sec">
                                <div className="section-heading mt-5">
                                    <h3 className='text-4xl mb-3'><span>Tour Types</span></h3>
                                    <p className="mt-3">
                                        Find the best destination in Cambodia. We ensure the pleasure of your travelling with us.
                                    </p>
                                </div>
                                <div className="tour-service-btn mt-6">
                                    <h5 className="tour-service-readmore">
                                        <Button
                                            onClick={() => navigator('/type')}
                                            style={{
                                                color: 'white',
                                                borderColor: 'white'
                                            }}
                                            className='font-merienda'
                                            variant="outlined"
                                        >View more</Button>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="bg_img_div2 lg:col-span-8 md:col-span-8 col-span-12 px-0">
                    <section id="tour-service">
                        <div className="lg:px-24 px-12">
                            <div className="tour_service_inner py-8">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="lg:col-span-4 md:col-span-4 col-span-6 client_inner mb-3" data-aos="fade-right" data-aos-duration="100">
                                        <div className="grid grid-cols-12">
                                            <div className="lg:col-span-4 col-span-3">
                                                <img className="feature-img mt-lg-3 mb-3" src={tourImg1} alt="Image" />
                                                <h4 className="tour_type_content_title font-merienda">
                                                    Air Rides</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-4 md:col-span-4 col-span-6 client_inner mb-3" data-aos="fade-left" data-aos-duration="110">
                                        <div className="grid grid-cols-12">
                                            <div className="lg:col-span-4 col-span-3">
                                                <img className="feature-img mt-lg-3 mb-3" src={tourImg2} alt="Image" />
                                                <h4 className="tour_type_content_title font-merienda">
                                                    Hiking </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="llg:col-span-4 md:col-span-4 col-span-6 client_inner mb-3" data-aos="fade-up" data-aos-duration="120">
                                        <div className="grid grid-cols-12">
                                            <div className="lg:col-span-4 col-span-3">
                                                <img className="feature-img mt-lg-3 mb-3" src={tourImg3} alt="Image" />
                                                <h4 className="tour_type_content_title font-merienda">
                                                    Cruises </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-4 md:col-span-4 col-span-6 client_inner mb-3" data-aos="fade-up" data-aos-duration="130">
                                        <div className="grid grid-cols-12">
                                            <div className="lg:col-span-4 col-span-3">
                                                <img className="feature-img mt-lg-3 mb-3" src={tourImg4} alt="Image" />
                                                <h4 className="tour_type_content_title font-merienda">
                                                    Swimming </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-4 md:col-span-4 col-span-6 client_inner mb-3" data-aos="fade-up" data-aos-duration="130">
                                        <div className="grid grid-cols-12">
                                            <div className="lg:col-span-4 col-span-3">
                                                <img className="feature-img mt-lg-3 mb-3" src={tourImg5} alt="Image" />
                                                <h4 className="tour_type_content_title font-merienda">
                                                    Mountain </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-4 md:col-span-4 col-span-6 client_inner mb-3" data-aos="fade-up" data-aos-duration="130">
                                        <div className="grid grid-cols-12">
                                            <div className="lg:col-span-4 col-span-3">
                                                <img className="feature-img mt-lg-3 mb-3" src={tourImg6} alt="Image" />
                                                <h4 className="tour_type_content_title font-merienda">
                                                    walking </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default TourTypeSection

