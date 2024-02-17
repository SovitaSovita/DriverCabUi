import { Button, Carousel } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../../redux/Constants';
import { get_slider } from '../../redux/service/sliderService';
import { useNavigate } from 'react-router-dom';

function SwiperCover() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        get_slider().then((res) => {
            setData(res?.data.payload)
        })
    }, [])
    return (
        <>
            <Carousel className='h-screen'>
                {
                    data?.map((item, index) => (
                        <div key={index} className="flex h-full items-center justify-center bg-gray-400">
                            <img src={`${BASE_URL}/images?fileName=${item?.image}`} alt="Image" className="w-full h-full object-cover brightness-50" />
                            <div className="absolute flex flex-col items-center justify-center lg:px-0 md:px-12 phone:px-8">
                                <div className='lg:text-4xl md:text-3xl phone:text-2xl text-white font-merienda'>Cambodia Cab Driver</div>
                                <div className='lg:text-5xl md:text-4xl phone:text-3xl text-white mt-3 font-merienda text-center'>{item?.title}</div>

                                <button onClick={() => navigate('/type')} className="bg-root_low font-merienda mt-5 rounded-full text-white-smoke text-sm py-3 px-3">View All Service</button>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </>
    )
}

export default SwiperCover