import React from 'react'
import about from '../../assets/images/all/about.jpg'
import '../../style/css-style/about.css'
import { useSelector } from 'react-redux'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { BASE_URL } from '../../redux/Constants';
import ImageSkeleton from '../../component/skeleton/ImageSkeleton';

function AboutPage() {

    const data = useSelector((state) => state.loading.generalInfo)
    const isLoading = useSelector((state) => state.loading.value)
    // console.log(data)

    return (
        <div className="main-about-content mt-14 py-10 lg:px-24 md:px-20 phone:px-8">
            <div className="grid grid-cols-12 gap-10">
                <div className="lg:col-span-4 md:col-span-5 phone:col-span-8">
                    <div className="left-about">
                        {
                            isLoading ? <ImageSkeleton /> : <img src={`${BASE_URL}/images?fileName=${data?.image}`} className="img-fluid" />
                        }
                    </div>
                </div>
                <div className="lg:col-span-8 md:col-span-7 phone:col-span-8">
                    <div className="right-about mt-5">
                        <p className="text-white leading-loose"><span className="text-lg font-extrabold text-white dark:text-white font-merienda">Cambodia Cap Driver <MessageOutlinedIcon /> </span>
                            {
                                data?.description
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage