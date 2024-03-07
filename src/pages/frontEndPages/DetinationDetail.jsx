import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { get_specialOfferById } from '../../redux/service/specialOfferService';
import { BASE_URL } from '../../redux/Constants';

function DetinationDetail() {

  const { id } = useParams();
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    get_specialOfferById(id).then((res) => {
      if (res.status === 200) {
        setData(res?.data?.payload)
        setIsLoading(false)
      }
    })
  }, [])

  const dataDetail = data.imgList?.map((item) => { return item })

  // Use the `id` parameter in your component logic
  const navigate = useNavigate()

  return (
    <div className='mt-8'>
      {
        dataDetail?.map((item, index) => (
          <section key={item?.id} className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex flex-col">
              <div className="lg:w-4/6 mx-auto">
                {
                  index < 1 && (
                    <Link onClick={() => { navigate(-1) }} className="px-4 py-1 rounded-lg mt-3 font-merienda bg-root_low text-white hover:text-white-smoke border">Back</Link>
                  )
                }
                <div className="rounded-lg h-72 overflow-hidden mt-6">
                  <img alt="content" className="object-cover object-center h-full w-full" src={`${BASE_URL}/images?fileName=${item?.fileName}`} />
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                  {
                    index < 1 && (
                      <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div className="flex flex-col items-center text-center justify-center">
                          <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{data?.title}</h2>
                          <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                          <p className="text-base">{data?.duration}.</p>
                          <p className="text-base">{data?.price}.</p>
                          <Link to={'/contact'} className="rounded-lg mt-3 font-merienda border-root_low text-root_low border p-1">
                            Contact Us </Link>
                        </div>
                      </div>
                    )
                  }
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-lg mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>
                {
                  index === 2 && (
                    <Link to={'/contact'} className="rounded-lg mt-3 font-merienda border-root_low text-root_low border p-1">
                      Contact Us </Link>
                  )
                }
              </div>
            </div>
          </section>
        ))
      }
    </div>
  )
}

export default DetinationDetail