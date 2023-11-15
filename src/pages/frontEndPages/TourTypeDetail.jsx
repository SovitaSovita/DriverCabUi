import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getById_tourType } from '../../redux/service/tourTypeService';
import { BASE_URL } from '../../redux/Constants';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';


function TourTypeDetail() {

  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    getById_tourType(id).then((res) => {
      setData(res?.data?.payload)
    })

  }, [id])

  return (
    <div className='mt-10 lg:px-24 md:px-20 phone:px-8'>
      <Button onClick={() => { navigate('/') }} className="bg-root_low mb-3">Back</Button>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-72 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src={`${BASE_URL}/images?fileName=${data?.image}`} />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{data?.title}</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <Link to={'/contact'} className="rounded-lg font-merienda border-root_low text-root_low border p-1">
                    Contact Us </Link>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  {data?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default TourTypeDetail