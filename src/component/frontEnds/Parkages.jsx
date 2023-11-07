import React, { useEffect, useState } from 'react'

import { get_popular } from '../../redux/service/TableListService'
import { BASE_URL } from '../../redux/Constants'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Parkages() {
    const navigate = useNavigate()
    const descrip = useSelector((state) => state.loading.decripInfo)
    const [data, setData] = useState([])

    useEffect(() => {
        get_popular().then((res) => {
            setData(res?.data?.payload)
        })
    }, [])


    const handleParkageDetail = (id) => {
        navigate(`/parkage/${id}`)
    }
    return (
        <div class="bg-hot-deal mt-32 py-5">
            <div class="lg:px-24 md:px-20 phone:px-8">
                <div class="text-white text-center mb-4">
                    <div class="text-4xl mb-3 font-merienda">Tour Packages</div>
                    <p> {descrip?.tourPackagesDesc} </p>
                </div>
                <div class="flex justify-center">
                    <div class="mt-6">
                        <div class="main-hot-deal flex justify-between">
                            <div class="grid grid-cols-12 gap-4">
                                {
                                    data?.map((item) => (
                                        <div class="lg:col-span-6 md:col-span-6 col-span-12 cursor-pointer" onClick={() => handleParkageDetail(item.id)}>
                                            <div class="grid grid-cols-12 bg-white" data-aos="zoom-in" data-aos-duration="100">
                                                <div class="lg:col-span-5 md:col-span-5 sm:col-span-7 col-span-12 p-0">
                                                    <img src={`${BASE_URL}/images?fileName=${item?.imageFile}`} alt="Image" className='w-100 h-100'/>
                                                </div>
                                                <div class="lg:col-span-7 md:col-span-7 sm:col-span-5 col-span-12 lg:p-0 md:p-0">
                                                    <div class="pl-5 py-5">
                                                        <h4 class="capitalize mb-2 line-clamp-1">{item?.title}</h4>
                                                        <div class="reviews">
                                                        </div>
                                                        <div class="deal-days mb-3">
                                                            <div class="text-muted">
                                                                <p className='font-merienda'>
                                                                    {item?.duration}</p>
                                                            </div>
                                                        </div>
                                                        <div class="text-primary fs-5 font-merienda"> {item?.price}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parkages