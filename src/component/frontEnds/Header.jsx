import React, { useEffect, useState } from 'react'
import '../../style/css-style/style.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useSelector } from 'react-redux';
import { get_generalinfo } from '../../redux/service/generalInfoService';
import { useDispatch } from 'react-redux';
import { setGeneralInfo, setLoading } from '../../redux/slice/LoadingSlice';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Header() {

    const data = useSelector((state) => state.loading.footerInfo)
    const [info, setInfo] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoading(true))
        get_generalinfo().then((res) => {
            setInfo(res?.data?.payload)
            dispatch(setGeneralInfo(res?.data?.payload))
            dispatch(setLoading(false))
        })
    }, [])

    return (
        <div className="bg-brand-black py-2">
            <div className="container">
                <div className="row flex justify-around">
                    <div className="col-lg-5 col-md-6 col-sm-12 col-12 px-sm-0">
                        <span className="text-gray-400 text-sm">
                            <AccessTimeIcon className="mr-2" fontSize="small" />
                            {info?.timeWork}
                        </span>
                    </div>
                    <div className="col-md-3 d-md-block d-none">
                        <span>
                            <div className="top_social">
                                <div className="socialbox">
                                    <a className="facebook" href={data?.fbUrl} target="_blank">
                                        <FacebookOutlinedIcon />
                                    </a>
                                    <a className="gplus" href={data?.instaUrl} target="_blank">
                                        <InstagramIcon />
                                    </a>
                                    <a className="flicker" href={data?.whatAppUrl} target="_blank">
                                        <WhatsAppIcon />
                                    </a>
                                    <a className="flicker" href={data?.teleUrl} target="_blank">
                                        <TelegramIcon />
                                    </a>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header