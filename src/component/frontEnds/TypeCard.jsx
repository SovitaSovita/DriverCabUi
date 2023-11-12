import React, { useEffect, useState } from 'react'
import '../../style/css-style/service.css'
import { get_tourType } from '../../redux/service/tourTypeService'
import { BASE_URL } from '../../redux/Constants'
import { Link } from 'react-router-dom'
import '../../style/css-style/service.css'
import ColCardSkeleton from '../skeleton/ColCardSkeleton'

function TypeCard() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        get_tourType().then((res) => {
            setData(res?.data?.payload)
            setIsLoading(false)
        })
    }, [])

    return (
        <div>
            {
                isLoading ? (
                    <div className='flex flex-wrap justify-around phone:flex-col md:flex-row'>
                        <ColCardSkeleton />
                        <ColCardSkeleton />
                    </div>
                ) : (
                    <div className='grid grid-cols-12 gap-4'>
                        {
                            data.map((item) => (
                                <div key={item.id} className="lg:col-span-6 md:col-span-6 col-span-12 mb-6">
                                    <div className="card-content shadow border">
                                        <div className="img-sv">
                                            <img src={`${BASE_URL}/images?fileName=${item?.image}`} className="w-full h-80 rounded" />
                                        </div>
                                        <div className="text-base mt-2 p-3 readStory font-merienda">
                                            <div className="fw-normal mb-3 text-lg font-merienda">{item?.title}</div>
                                            <Link className='text-blue-700' to={`/type/${item?.id}`}>Read the story</Link>
                                        </div>
                                        <div className="line-hv"></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default TypeCard