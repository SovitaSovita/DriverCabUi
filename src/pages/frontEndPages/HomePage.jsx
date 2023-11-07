import React, { useEffect } from 'react'

import SwiperCover from '../../component/frontEnds/SwiperCover';
import FindTours from '../../component/frontEnds/FindTours';
import PopularTours from '../../component/frontEnds/PopularTours';
import OurService from '../../component/frontEnds/OurService';
import SpecialOffer from '../../component/frontEnds/SpecialOffer';
import Parkages from '../../component/frontEnds/Parkages';
import Frequention from '../../component/frontEnds/Frequention';
import WhyUs from '../../component/frontEnds/WhyUs';
import { get_desciptionInfo } from '../../redux/service/generalInfoService';
import { useDispatch } from 'react-redux';
import { setDescripInfo } from '../../redux/slice/LoadingSlice';

export default function FontEndPage() {

  const dispatch = useDispatch();
  useEffect(() => {
    get_desciptionInfo().then((res) => {
      dispatch(setDescripInfo(res?.data.payload))
    })
  }, [])
  return (
    <>
      <SwiperCover />
      <FindTours />
      <PopularTours />
      <OurService />
      <SpecialOffer />
      <Parkages />
      <Frequention />
      <WhyUs />
    </>
  )
}
