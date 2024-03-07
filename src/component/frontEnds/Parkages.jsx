import React, { useEffect, useState } from 'react'

import { get_popular } from '../../redux/service/TableListService'
import { BASE_URL } from '../../redux/Constants'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import RowCardSkeleton from '../skeleton/RowCardSkeleton'

function Parkages() {
    const navigate = useNavigate()
    const descrip = useSelector((state) => state.loading.decripInfo)
    const [data, setData] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        get_popular().then((res) => {
            setData(res?.data?.payload)
            setIsLoading(false)
        })
    }, [])


    const handleParkageDetail = (id) => {
        navigate(`/parkage/${id}`)
    }
    return (
        <div className="bg-hot-deal mt-32 py-5">
            <div className="lg:px-24 md:px-20 phone:px-8">
                <div className="text-white text-center mb-4" data-aos="fade-up" data-aos-duration="100">
                    <div className="text-4xl mb-3 font-merienda">Tour Packages</div>
                    <p> {descrip?.tourPackagesDesc} </p>
                </div>
                <div className="flex justify-center">
                    <div className="mt-6">
                        <div className="main-hot-deal flex justify-between">
                            {
                                isLoading ? <RowCardSkeleton /> : (
                                    <div className="grid grid-cols-12 gap-4">
                                        {
                                            data?.map((item) => (
                                                <div key={item?.id} className="lg:col-span-6 md:col-span-6 col-span-12 cursor-pointer" onClick={() => handleParkageDetail(item.id)}>
                                                    <div className="grid grid-cols-12 bg-white" data-aos="flip-up" data-aos-duration="120">
                                                        <div className="lg:col-span-5 md:col-span-5 sm:col-span-7 col-span-12 p-0">
                                                            <img src={`${BASE_URL}/images?fileName=${item?.imageFile}`} alt="Image" className='w-100 h-100' />
                                                        </div>
                                                        <div className="lg:col-span-7 md:col-span-7 sm:col-span-5 col-span-12 lg:p-0 md:p-0">
                                                            <div className="pl-5 py-5">
                                                                <h4 className="capitalize mb-2 line-clamp-1">{item?.title}</h4>
                                                                <div className="reviews">
                                                                </div>
                                                                <div className="deal-days mb-3">
                                                                    <div className="text-muted">
                                                                        <p className='font-merienda'>
                                                                            {item?.duration}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="text-primary fs-5 font-merienda"> {item?.price}$</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parkages