import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getById_tourType, getSearch_tourType } from '../../redux/service/tourTypeService';
import { BASE_URL } from '../../redux/Constants';
import { Button } from 'flowbite-react';
import HLoading from '../Loading';
import { Link } from 'react-router-dom';

function FindTours() {

    const data = useSelector((state) => state.loading.decripInfo)

    const [searchData, setSearchData] = useState([]);
    const [recordCnt, setRecordCnt] = useState(4);
    const [isLoading, setIsLoading] = useState(false);


    const [req, setReq] = useState({
        title: "",
        isSelect: "true",
        minPrice: "0",
        maxPrice: "0"
    });

    useEffect(() => {
        setIsLoading(true);
        getSearch_tourType(req).then((res) => {
            if (res?.status == 200) {
                setSearchData(res?.data?.payload)
            }
            setIsLoading(false);
        })

        console.log(searchData)

    }, [recordCnt])

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setReq({ ...req, [name]: value })
    }

    const handleSubmit = () => {
        setIsLoading(true);
        getSearch_tourType(req).then((res) => {
            if (res?.status == 404) {
                alert(res?.detail)
            }
            else {
                setSearchData(res?.data?.payload)
            }
            setIsLoading(false)
        })
    }

    const handleReadMore = (id) => {
        getById_tourType(id).then(res => {
            if (res.status == 200) {

            }
        })
    }

    return (
        <section>
            <div className="py-12 main-find-des bg-root_low md:px-24 px-8">
                <div className="text-center">
                    <div className="text-white text-2xl mb-2 fw-bold font-merienda">Find Your Tours</div>
                    <p className="text-white">{data?.findTourDesc}</p>
                </div>
            </div>
            <div className='bg-white rounded w-9/12 m-auto py-6 px-4 flex md:justify-around justify-between flex-wrap -mt-6'>
                <input
                    type="text"
                    name="title"
                    placeholder='Tour name'
                    onChange={handleOnChange}
                    className='lg:mt-0 mt-2 border border-gray-300 rounded-full placeholder:text-xs' />
                <select
                    onChange={handleOnChange}
                    name="isSelect"
                    className='border pl-3 py-2 border-gray-300 rounded-full text-xs text-gray-500 lg:mt-0 mt-2'>
                    <option selected value={true} className='text-sm'>Tour Type</option>
                    <option value={false} className='text-sm'>Popular Tour</option>
                </select>
                <input
                    type="text"
                    name="minPrice"
                    placeholder='Min Price'
                    onChange={handleOnChange}
                    className='lg:mt-0 mt-2 border border-gray-300 rounded-full placeholder:text-xs' />
                <input
                    type="text"
                    name="maxPrice"
                    placeholder='Max Price'
                    onChange={handleOnChange}
                    className='lg:mt-0 mt-2 border border-gray-300 rounded-full placeholder:text-xs' />
                <a href="#to_searchBox">
                    <button
                        onClick={handleSubmit}
                        className="bg-root_low lg:mt-0 mt-2 font-merienda rounded-full text-white-smoke font-semibold text-sm py-2 px-7 hover:bg-root_high"
                    >
                        Search
                    </button>
                </a>

            </div>

            <div className="py-12 main-find-des md:px-24 px-8 flex flex-col" id="to_searchBox">
                <div className="text-center mb-5">
                    <div className="text-2xl mb-2 fw-bold font-merienda">Find the tour by destination</div>
                    <p className='text-gray-400'>Explore the beauty of diverse destinations with our exclusive tours.</p>
                </div>

                <div className='w-full flex justify-center items-center flex-wrap'>
                    {
                        isLoading ? <HLoading /> : searchData.slice(0, recordCnt)?.map((item) => (
                            <div key={item?.tourid} className="categorybox">
                                <img
                                    src={`${BASE_URL}/images?fileName=${item?.images}`}
                                    className=''
                                />
                                <div className="before_hover_head">
                                    <h4 className="categorytitle pt-2 line-clamp-1">{item?.title}</h4>
                                </div>
                                <div className="categorybox-content text-center">
                                    <a href=""><h4 className="categorytitle line-clamp-2 px-14">{item?.duration ? item?.duration : item?.title}</h4></a>
                                    <p className="categorypara">
                                        {item?.price ? item?.price : ""}
                                    </p>
                                    <p className="categorypara  px-5 line-clamp-6">
                                        {item?.description ? item?.description : item?.title}
                                    </p>
                                    <p className="readmore">
                                        <Link href="#" to={`${item?.price ? '/parkage' : '/type'}/${item?.tourid}`}>
                                            Read More
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {isLoading ? null :
                    recordCnt < searchData?.length ? (
                        <button
                            onClick={() => { setRecordCnt(recordCnt + 4) }}
                            className="m-auto mt-4 lg:mt-6 py-2.5 px-6 bg-transparent text-black border border-black rounded-full hover:text-black-low hover:border-black-low">
                            Show more
                        </button>
                    ) : (
                        <button
                            onClick={() => { setRecordCnt(4) }}
                            className="m-auto mt-4 lg:mt-6 py-2.5 px-6 bg-transparent text-black border border-black rounded-full hover:text-black-low hover:border-black-low">
                            Show less
                        </button>
                    )
                }
            </div>
        </section >
    )
}

export default FindTours