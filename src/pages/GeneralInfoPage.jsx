import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import FooterInfoForm from '../component/FooterInfoForm'
import { get_footer } from '../redux/service/generalInfoService'
import { useDispatch } from 'react-redux'
import { setFooterInfo } from '../redux/slice/LoadingSlice'

function GeneralInfoPage() {

    return (
        <div className="p-6 pl-3 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 min-h-screen border-dashed rounded-lg">
                <Navbar />

                <FooterInfoForm />

            </div>
        </div>
    )
}

export default GeneralInfoPage