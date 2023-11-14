import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../style/swiper.css';

// Install Swiper modules
import { Autoplay, Navigation } from 'swiper/modules';
import { get_popular } from '../../redux/service/TableListService';
import { BASE_URL } from '../../redux/Constants';
import ImageSkeleton from '../skeleton/ImageSkeleton';
import { useNavigate } from 'react-router-dom';

function PopularTours() {
    const info = useSelector((state) => state.loading.decripInfo);
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        get_popular().then((res) => {
            setData(res?.data?.payload)
            setIsLoading(false)
        })
    }, [])

    const navigate = useNavigate();

    const handleParkageDetail = (id) => {
        navigate(`/parkage/${id}`)
    }

    return (
        <div className="container-fluid mt-32 pt-5 bg-popular-back h-[540px]">
            <div className="lg:px-24 md:px-20 phone:px-8">
                <div className="text-white text-center mb-4">
                    <div className="text-3xl mb-3 font-merienda">Popular Tours</div>
                    <p>{info?.popularTourDesc}</p>
                </div>
                {
                    isLoading ? (
                        <div className='mt-12'>
                            <ImageSkeleton />
                        </div>
                    ) : (
                        <div className='relative h-full mt-12'>
                            <Swiper
                                // slidesPerView={3}
                                spaceBetween={10}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 50
                                    }
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    data?.map((item) => (
                                        <SwiperSlide key={item?.id}>
                                            <div className='flex flex-col cursor-pointer' onClick={() => handleParkageDetail(item.id)}>
                                                <div className='w-full h-64'>
                                                    <img src={`${BASE_URL}/images?fileName=${item?.imageFile}`} alt="img" className='w-full h-full' />
                                                </div>
                                                <div className='m-3 flex flex-col'>
                                                    <div className='self-start'>
                                                        <p className='line-clamp-1 text-lg font-merienda'>{item?.title}</p>
                                                    </div>
                                                    <div className='flex justify-between items-center text-gray-500 mt-2'>
                                                        <p className='line-clamp-1 text-sm font-merienda'>{item?.duration}</p>
                                                        <p className='line-clamp-1 text-root_low font-bold font-merienda'>{item?.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default PopularTours;
