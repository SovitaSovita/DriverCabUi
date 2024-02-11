import React from 'react'
import { useSelector } from 'react-redux'

function FindTours() {

    const data = useSelector((state) => state.loading.decripInfo)

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
                    name="tourName"
                    placeholder='Tour name'
                    className='lg:mt-0 mt-2 border border-gray-300 rounded-full placeholder:text-xs' />
                <select className='border py-2 border-gray-300 rounded-full text-xs text-gray-500 lg:mt-0 mt-2'>
                    <option selected value="tourType" className='text-sm'>Tour Type</option>
                    <option value="popularTour" className='text-sm'>Popular Tour</option>
                </select>
                <input
                    type="text"
                    name="minPrice"
                    placeholder='Min Price'
                    className='lg:mt-0 mt-2 border border-gray-300 rounded-full placeholder:text-xs' />
                <input
                    type="text"
                    name="maxPrice"
                    placeholder='Max Price'
                    className='lg:mt-0 mt-2 border border-gray-300 rounded-full placeholder:text-xs' />
                <button className="bg-root_low lg:mt-0 mt-2 font-merienda rounded-full text-white-smoke font-semibold text-sm py-2 px-7 hover:bg-root_high">Search</button>

            </div>

            <div className="py-12 main-find-des md:px-24 px-8">
                <div className="text-center mb-5">
                    <div className="text-2xl mb-2 fw-bold font-merienda">Find the tour by destination</div>
                    <p className='text-gray-400'>Lorem Ipsum has been the industrys standard.</p>
                </div>

                <div className='w-full flex justify-center flex-wrap'>
                    <div className="categorybox">
                        <img
                            src="https://themeseye.com/theme-demo/tafri-travel-pro/wp-content/themes/tafri-travel-pro/assets/images/tours/tourcategory3.jpg"
                            className=''
                        />
                        <div className="before_hover_head">
                            <a href=""><h4 className="categorytitle pt-2">FRANCE</h4></a>
                        </div>
                        <div className="categorybox-content text-center">
                            <a href=""><h4 className="categorytitle">FRANCE</h4></a>
                            <p className="categorypara">
                                Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took </p>
                            <p className="readmore">
                                <a href="">
                                    Read More <i className="fa fa-arrow-right"></i></a>
                            </p>
                        </div>
                    </div>
                    <div className="categorybox lg:top-0 top-2">
                        <img
                            src="https://themeseye.com/theme-demo/tafri-travel-pro/wp-content/themes/tafri-travel-pro/assets/images/tours/tourcategory3.jpg"
                        />
                        <div className="before_hover_head">
                            <a href=""><h4 className="categorytitle pt-2">FRANCE</h4></a>
                        </div>
                        <div className="categorybox-content text-center">
                            <a href=""><h4 className="categorytitle">FRANCE</h4></a>
                            <p className="categorypara">
                                Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took </p>
                            <p className="readmore">
                                <a href="">
                                    Read More <i className="fa fa-arrow-right"></i></a>
                            </p>
                        </div>
                    </div>
                    <div className="categorybox lg:top-0 top-4">
                        <img
                            src="https://themeseye.com/theme-demo/tafri-travel-pro/wp-content/themes/tafri-travel-pro/assets/images/tours/tourcategory3.jpg"
                        />
                        <div className="before_hover_head">
                            <a href=""><h4 className="categorytitle pt-2">FRANCE</h4></a>
                        </div>
                        <div className="categorybox-content text-center">
                            <a href=""><h4 className="categorytitle">FRANCE</h4></a>
                            <p className="categorypara">
                                Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took </p>
                            <p className="readmore">
                                <a href="">
                                    Read More <i className="fa fa-arrow-right"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FindTours