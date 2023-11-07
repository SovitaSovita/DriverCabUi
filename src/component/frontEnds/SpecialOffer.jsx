import React, { useEffect, useState } from 'react'
import angkor from "../../assets/images/all/angkor-wat.jpg";
import { useDispatch } from 'react-redux';
import { get_specialOffer } from '../../redux/service/specialOfferService';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../redux/Constants';
import RowCardSkeleton from '../skeleton/RowCardSkeleton';
import { useSelector } from 'react-redux';

function SpecialOffer() {

    const navigate = useNavigate()
    const currentPath = window.location.pathname;

    const decrip = useSelector((state) => state.loading.decripInfo)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const showOffer = currentPath != '/' ? data?.length : 3;

    useEffect(() => {
        setIsLoading(true)
        get_specialOffer().then((res) => {
            setIsLoading(false)
            setData(res?.data?.payload)
        })
    }, [])

    const handleViewDetail = (id) => {
        navigate(`/destination/${id}`);
    }

    return (
        <div>
            <div class="lg:px-24 md:px-20 phone:px-8 mt-14 p-0" id="specialOffer">
                <div class="head-content" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
                    <div class="text-4xl text-center pb-2 fw-bold font-merienda">Most Visited</div>
                    <div class="line"></div>
                    <p class="text-center text-muted my-3">
                        { decrip?.mostVisitedDesc }
                    </p>
                </div>

                <div class="">
                    <div class="col-lg-12 col-md-12 col-sm-6 col-12 mt-md-5">
                        {
                            isLoading ? <RowCardSkeleton />
                                : (
                                    data?.slice(0, showOffer).map((item, index) => (
                                        <div class="offer-box grid grid-cols-12 mt-6">
                                            <div class="xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-12 col-span-12">
                                                <img src={`${BASE_URL}/images?fileName=${item?.imgList[0]?.fileName}`} alt="special2" class="img-fluid" />
                                            </div>
                                            <div class="xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-12 col-span-12 offer-content p-0 bg-white">
                                                <div class="offer-box-content">
                                                    <h4 class="mb-3">
                                                        <p className='text-xl line-clamp-2 font-merienda'>{item?.title}</p>
                                                    </h4>
                                                    <div class="mb-3">
                                                        <div class="rating lg:px-0"> </div>
                                                        <div class="offertimings">{item?.duration}</div>
                                                    </div>
                                                    <span class="posttext post text-gray-500 line-clamp-4">{item?.desciption}</span>
                                                </div>
                                            </div>
                                            <div class="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 col-span-12 offers-details">
                                                <div class="offer-icons">
                                                </div>
                                                <div class="speoffer">
                                                    <span class="offer-package">{item?.price}</span>
                                                </div>
                                                <div class="mt-4 mb-3">
                                                    <Button onClick={() => handleViewDetail(item?.id)} class="detail-btn rounded-lg">View Details</Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )
                        }
                    </div>
                    {currentPath == "/" && <Button onClick={() => navigate('/destination')} className="m-auto mt-5 bg-root_low">Show more</Button>}
                </div>
            </div>
        </div>
    )
}

export default SpecialOffer