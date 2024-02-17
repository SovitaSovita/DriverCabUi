import React, { useEffect, useState } from 'react'
import angkor from "../../assets/images/all/angkor-wat.jpg";
import { useDispatch } from 'react-redux';
import { get_specialOffer } from '../../redux/service/specialOfferService';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../redux/Constants';
import RowCardSkeleton from '../skeleton/RowCardSkeleton';
import { useSelector } from 'react-redux';
import { setListOffer } from '../../redux/slice/ListSlice';

function SpecialOffer() {

    const navigate = useNavigate()
    const currentPath = window.location.pathname;
    const dispatch = useDispatch()

    const decrip = useSelector((state) => state.loading.decripInfo)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const showOffer = currentPath != '/' ? data?.length : 3;

    useEffect(() => {
        setIsLoading(true)
        get_specialOffer().then((res) => {
            setIsLoading(false)
            dispatch(setListOffer(res?.data?.payload))
            setData(res?.data?.payload)
        })
    }, [])

    const handleViewDetail = (id) => {
        navigate(`/destination/${id}`);
    }

    return (
        <div>
            <div className="lg:px-24 md:px-20 phone:px-8 mt-14 p-0" id="specialOffer">
                <div className="head-content" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
                    <div className="text-4xl text-center pb-2 fw-bold font-merienda">Most Visited</div>
                    <div className="line"></div>
                    <p className="text-center text-muted my-3">
                        {decrip?.mostVisitedDesc}
                    </p>
                </div>

                <div className="flex flex-col">
                    <div className="col-lg-12 col-md-12 col-sm-6 col-12 mt-md-5">
                        {
                            isLoading ? <RowCardSkeleton />
                                : (
                                    data?.slice(0, showOffer).map((item, index) => (
                                        <div className="offer-box grid grid-cols-12 mt-6" key={item?.id}>
                                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-12 col-span-12" data-aos="fade-right">
                                                <img src={`${BASE_URL}/images?fileName=${item?.imgList[0]?.fileName}`} alt="special2" className="img-fluid" />
                                            </div>
                                            <div className="xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-12 col-span-12 offer-content p-0 bg-white">
                                                <div className="offer-box-content">
                                                    <h4 className="mb-3">
                                                        <p className='text-xl line-clamp-2 font-merienda'>{item?.title}</p>
                                                    </h4>
                                                    <div className="mb-3">
                                                        <div className="rating lg:px-0"> </div>
                                                        <div className="offertimings">{item?.duration}</div>
                                                    </div>
                                                    <span className="posttext post text-gray-500 line-clamp-3">{item?.imgList[0]?.description}</span>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 col-span-12 offers-details bg-root_high">
                                                <div className="offer-icons">
                                                </div>
                                                <div className="speoffer">
                                                    <span className="offer-package">{item?.price}</span>
                                                </div>
                                                <div className="mt-4 mb-3">
                                                    <button onClick={() => handleViewDetail(item?.id)} className="m-auto py-2 px-4 bg-transparent text-white border border-white rounded-full">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )
                        }
                    </div>
                    {currentPath == "/" &&
                        <button
                            onClick={() => navigate('/destination')}
                            className="m-auto mt-4 lg:mt-6 py-2.5 px-6 bg-transparent text-black border border-black rounded-full hover:border-black-low hover:text-black-low">
                            Show more
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default SpecialOffer