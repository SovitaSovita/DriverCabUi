import React from "react";
import logo from "../assets/images/logo/logo.png";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import FestivalOutlinedIcon from '@mui/icons-material/FestivalOutlined';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate()
  const location = useLocation();
  const currentPath = location.pathname;
  const logout = () => {
    localStorage.removeItem('token');
    navigate("/login")
  }


  return (
    <div className="font-poppin">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-screen w-full p-6">
          <div className="bg-white flex flex-col justify-between shadow border w-full h-full rounded-xl px-4">
            {/* main sidebar */}
            <nav>
              {/* head sidebar */}
              <div className="border-b border-gray-500 py-8 px-6">
                {/* <p className='text-white text-xl text-center'>Lucky Draw</p> */}
                <img src={logo} alt="logo" className="" />
              </div>
              <ul className="text-sm list-none mt-5">
                <Link to={"/dashboard"}>
                  <li
                    className={
                      currentPath == "/dashboard"
                        ? "flex items-center bg-brand-red hover:bg-red-700 text-white rounded-lg px-4 py-3 mb-1 transition-all"
                        : "flex items-center rounded-lg px-4 py-3 mb-1 hover:bg-white-smoke transition-all"
                    }
                  >
                    <DashboardOutlinedIcon className="mr-2" />
                    <span>Dashboard</span>
                  </li>
                </Link>
                <Link to={"/popular"}>
                  <li
                    className={
                      currentPath == "/popular"
                        ? "flex items-center bg-brand-red hover:bg-red-700 text-white rounded-lg px-4 py-3 mb-1 transition-all"
                        : "flex items-center rounded-lg px-4 py-3 mb-1 hover:bg-white-smoke transition-all"
                    }
                  >
                    <ChecklistOutlinedIcon className="mr-2" />
                    <span>Popular Tour</span>
                  </li>
                </Link>
                <Link to={"/tourtype"}>
                  <li
                    className={
                      currentPath == "/tourtype"
                        ? "flex items-center bg-brand-red hover:bg-red-700 text-white rounded-lg px-4 py-3 mb-1 transition-all"
                        : "flex items-center rounded-lg px-4 py-3 mb-1 hover:bg-white-smoke transition-all"
                    }
                  >
                    <FestivalOutlinedIcon className="mr-2" />
                    <span>Tour Type</span>
                  </li>
                </Link>
                <Link to={"/slider"}>
                  <li
                    className={
                      currentPath == "/slider"
                        ? "flex items-center bg-brand-red hover:bg-red-700 text-white rounded-lg px-4 py-3 mb-1 transition-all"
                        : "flex items-center rounded-lg px-4 py-3 mb-1 hover:bg-white-smoke transition-all"
                    }
                  >
                    <SlideshowOutlinedIcon className="mr-2" />
                    <span>Slider</span>
                  </li>
                </Link>
                <Link to={"/general"}>
                  <li
                    className={
                      currentPath == "/general"
                        ? "flex items-center bg-brand-red hover:bg-red-700 text-white rounded-lg px-4 py-3 mb-1 transition-all"
                        : "flex items-center rounded-lg px-4 py-3 mb-1 hover:bg-white-smoke transition-all"
                    }
                  >
                    <LightbulbOutlinedIcon className="mr-2" />
                    <span>General Info</span>
                  </li>
                </Link>
                <Link to={"/account"}>
                  <li
                    className={
                      currentPath == "/account"
                        ? "flex items-center bg-brand-red hover:bg-red-700 text-white rounded-lg px-4 py-3 mb-1 transition-all"
                        : "flex items-center rounded-lg px-4 py-3 mb-1 hover:bg-white-smoke transition-all"
                    }
                  >
                    <PersonOutlineOutlinedIcon className="mr-2" />
                    <span>Account</span>
                  </li>
                </Link>
              </ul>
            </nav>
            <button
              className="flex items-center justify-center mb-4 bg-red-100 w-full rounded-lg self-center px-4 py-1.5 hover:bg-red-200 transition-all"
              onClick={logout}
            >
              <ExitToAppOutlinedIcon className="mr-2 text-red-600" />
              <span className="text-red-600">Log out</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
