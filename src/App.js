
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/DashboardPage';
import PopularPage from './pages/PopularPage';
import Layout from './pages/Layout';
import FontEndPage from './pages/frontEndPages/HomePage';
import AccountPage from './pages/AccountPage';
import Login from './component/login';
import Protected from './redux/service/Protected';
import './style/css-style/style.css';
import FrontEndLayout from './pages/frontEndPages/Layout';
import TypePage from './pages/frontEndPages/TypePage';
import AboutPage from './pages/frontEndPages/AboutPage';
import ContactPage from './pages/frontEndPages/ContactPage';
import TourTypePage from './pages/TourTypePage';
import SliderPage from './pages/SliderPage';
import Destination from './pages/frontEndPages/Destination';
import DetinationDetail from './pages/frontEndPages/DetinationDetail';
import ParkageDetail from './pages/frontEndPages/ParkageDetail';
import TourTypeDetail from './pages/frontEndPages/TourTypeDetail';
import GeneralInfoPage from './pages/GeneralInfoPage';

function App() {

  return (
    <Routes>

      <Route element={<FrontEndLayout />}>
        <Route path='/' element={<FontEndPage />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/destination/:id' element={<DetinationDetail />} />
        <Route path='/parkage/:id' element={<ParkageDetail />} />
        <Route path='/type/:id' element={<TourTypeDetail />} />
        <Route path='/type' element={<TypePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Route>

      <Route element={<Protected><Layout /> </Protected>}>
        <Route path='dashboard' element={<DashboardPage />} />
        <Route path='popular' element={<PopularPage />} />
        <Route path='tourtype' element={<TourTypePage />} />
        <Route path='slider' element={<SliderPage />} />
        <Route path='general' element={<GeneralInfoPage />} />
        <Route path='account' element={<AccountPage />} />
      </Route>


      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
