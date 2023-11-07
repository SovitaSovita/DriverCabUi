import React from 'react'

import whychooseusicon1 from '../../assets/images/why-choose-us/whychooseusicon1.png'
import whychooseusicon2 from '../../assets/images/why-choose-us/whychooseusicon2.png'
import whychooseusicon3 from '../../assets/images/why-choose-us/whychooseusicon3.png'
import whychooseusicon4 from '../../assets/images/why-choose-us/whychooseusicon4.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function WhyUs() {

    const data = useSelector((state) => state.loading.decripInfo)

    return (
        <section className="mt-32">
            <div className="grid grid-cols-12 m-0">
                <div className="bg_img_div lg:col-span-4 md:col-span-4 col-span-12 px-0">
                    <section className="" id="why-choose-us">
                        <div className=" p-0">
                            <div className="inner_sec">
                                <div className="section-heading mt-5">
                                    <h3 className='text-4xl mb-3'><span>Why choose Us</span></h3>
                                    <p className="mt-3">
                                        { data?.whyUsDesc }
                                    </p>
                                </div>
                                <div className="tour-service-btn mt-6">
                                    <h5 className="tour-service-readmore">
                                        <Link to={'/contact'} className="rounded-lg font-merienda">
                                            Contact Us </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="bg_img_div2 lg:col-span-8 md:col-span-8 col-span-12 px-0">
                    <section id="tour-service">
                        <div className="pr-24 pl-10">
                            <div className="tour_service_inner py-8">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="lg:col-span-6 md:col-span-6 col-span-12 client_inner mb-3">
                                        <div className="grid grid-cols-12">
                                            <div className="lg:col-span-4 col-span-3">
                                                <img className="feature-img mt-lg-3 mb-3" src={whychooseusicon1} alt="Image" />
                                            </div>
                                            <div className="lg:col-span-8 col-span-9">
                                                <h4 className="tour_type_content_title font-merienda">
                                                    Handpiked Tour </h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-6 md:col-span-6 col-span-12 client_inner mb-3">
                                        <div className="grid grid-cols-12">
                                            <div className="lg:col-span-4 col-span-3">
                                                <img className="feature-img mt-lg-3 mb-3" src={whychooseusicon2} alt="Image" />
                                            </div>
                                            <div className="lg:col-span-8 col-span-9">
                                                <h4 className="tour_type_content_title font-merienda">
                                                    Dedicated Support </h4>
                                                <p>With our services, we dedicate to the best service. All our customers can give us feedbacks on how we can serve them professionally. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="llg:col-span-6 md:col-span-6 col-span-12 client_inner mb-3">
                                        <div className="grid grid-cols-12">
                                            <div className="lg:col-span-4 col-span-3">
                                                <img className="feature-img mt-lg-3 mb-3" src={whychooseusicon3} alt="Image" />
                                            </div>
                                            <div className="lg:col-span-8 col-span-9">
                                                <h4 className="tour_type_content_title font-merienda">
                                                    Lowest Price </h4>
                                                <p>You can come up with your budget. We will suggest and recommend to affordable tours.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-6 md:col-span-6 col-span-12 client_inner mb-3">
                                        <div className="grid grid-cols-12">
                                            <div className="lg:col-span-4 col-span-3">
                                                <img className="feature-img mt-lg-3 mb-3" src={whychooseusicon4} alt="Image" />
                                            </div>
                                            <div className="lg:col-span-8 col-span-9">
                                                <h4 className="tour_type_content_title font-merienda">
                                                    Spacial place </h4>
                                                <p>We care your pleasure. We are committed to bringing you to the most enjoyable tours in the Kingdom
                                                    of Cambodia.</p>
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

export default WhyUs