import React from 'react'
import shoping from '../../assets/images/services/ourservicesimg3.png'
import hotel from '../../assets/images/services/ourservicesimg2.png'
import transportation from '../../assets/images/services/ourservicesimg1.png'
import { useSelector } from 'react-redux'

function OurService() {
    const data = useSelector((state) => state.loading.decripInfo)

    return (
        <div className="mt-32 mb-32">
            <div className="flex phone:flex-col justify-between lg:px-24 md:px-20 phone:px-8">
                <div className="lg:col-span-2 md:col-span-3">
                    <div id="TA_selfserveprop935" className="TA_selfservepropv w-36 flex justify-center">
                        <ul id="5wm6Ir" className="TA_links DZqges7iESt">
                            <li id="q23cqKt1gPBW" className="K6OAtASt"><a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g293940-d12293659-Reviews-Cambodia_Cab_Driver-Phnom_Penh.html"><img src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg" alt="TripAdvisor" /></a></li>
                        </ul>
                    </div>
                    <script async src="https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=935&amp;locationId=12293659&amp;lang=en_US&amp;rating=true&amp;nreviews=5&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=false&amp;border=true&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>
                </div>
                <div className="lg:col-span-10 md:col-span-9">
                    <div className="head-content mt-lg-0 mt-md-0 mt-4">
                        <div className="text-4xl text-center pb-3 fw-bold font-merienda">Our Services</div>
                        <div className="line"></div>
                        <p className="text-center text-muted my-3">
                        { data?.serviceDesc }
                        </p>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="lg:col-span-4 md:col-span-6 col-span-12 mt-4">
                            <div className="servicebox">
                                <img src={transportation} className='m-auto' />
                                <div className="servicebox-content text-center">
                                    <h4 className="servicetitle font-merienda">
                                        Transportation </h4>
                                    <p className="servicepara">
                                        Taxi Transfer to Provinces with SUV cars and professional drivers </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 md:col-span-6 col-span-12 mt-4">
                            <div className="servicebox">
                                <img src={hotel} className='m-auto' />
                                <div className="servicebox-content text-center">
                                    <h4 className="servicetitle font-merienda">
                                        Hotel Booking </h4>
                                    <p className="servicepara">
                                        After your arrival at Phnom Penh airport you will be welcomed by our driver will bring you to your hotel that you </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 md:col-span-6 col-span-12 mt-4">
                            <div className="servicebox">
                                <img src={shoping} className='m-auto' />
                                <div className="servicebox-content text-center">
                                    <h4 className="servicetitle font-merienda">
                                        Shopping Centres </h4>
                                    <p className="servicepara">
                                        Explore the best shopping centers in town with our guided tours. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurService