import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { get_popularById } from '../../redux/service/TableListService';
import { BASE_URL } from '../../redux/Constants';
import { Button } from 'flowbite-react';

function ParkageDetail() {

  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    get_popularById(id).then((res) => {
      setData(res?.data?.payload)
    })

  }, [id])

  console.log(data)

  return (
    <div className='mt-10 lg:px-24 md:px-20 phone:px-8'>
      <section className="text-gray-600 body-font bg-white rounded-lg shadow-sm">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={`${BASE_URL}/images?fileName=${data?.imageFile}`} />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{data?.title}</h1>
            <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-root_low">{data?.price} / <span className='text-zinc-500'>{data?.duration}</span></h1>
            <p className="mb-8 leading-relaxed">Explore the beauty of diverse destinations with our exclusive tours. Whether you're drawn to the bustling streets of vibrant cities, the tranquility of scenic landscapes, or the rich cultural heritage of historical sites, our tours cater to every wanderlust. Immerse yourself in unique experiences and create lasting memories as you embark on a journey tailored to your desired destination.</p>
            <div className="flex justify-evenly">
              <Link onClick={() => { navigate(-1) }} className="px-4 py-1 rounded-lg mt-3 font-merienda bg-root_low text-white hover:text-white-smoke border">Back</Link>
              <Link to={'/contact'} className="px-4 py-1 rounded-lg mt-3 font-merienda border-root_low text-root_low border">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ParkageDetail