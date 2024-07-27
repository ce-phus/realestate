import React, { forwardRef, useEffect, useState } from 'react';
import { IoHome } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { RiGolfBallFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { GiCrackedBallDunk } from "react-icons/gi";
import { LuCross } from "react-icons/lu";
import { FcAbout } from "react-icons/fc";
import { CiSettings } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";
import { logout } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Popup from './Popup';

const Sidenav = forwardRef(({ isSidebarOpen }, ref) => {
  const dispatch = useDispatch();
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const createPropertyReducer = useSelector(state =>state.createPropertyReducer)
  const { loading, error, property } = createPropertyReducer
  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/'); 
  };
  
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };


  return (
    <div>
      <aside
        id='logo-sidebar'
        ref={ref}
        className={`fixed top-14 left-0 z-20 w-64 h-screen pt-10 transition-transform bg-white border-r border-gray-300 sm:translate-x-0 dark:bg-dark dark:border-gray-700 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-label='Sidebar'
        role="navigation"
      >
        <div className='h-full px-3 overflow-y-auto'>
          <ul className='space-y-2 font-medium'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `flex dark:text-white gap-4 text-sm px-1 py-1.5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 ${isActive ? 'bg-gray-300 dark:bg-gray-600' : ''}`
                }
              >
                <IoHome className='mt-1'/> Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/explore'
                className={({ isActive }) =>
                  `flex dark:text-white gap-4 text-sm px-1 py-1.5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 ${isActive ? 'bg-gray-300 dark:bg-gray-600' : ''}`
                }
              >
                <MdOutlineExplore className='mt-1' /> Explore
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/all'
                className={({ isActive }) =>
                  `flex dark:text-white gap-4 text-sm px-1 py-1.5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 ${isActive ? 'bg-gray-300 dark:bg-gray-600' : ''}`
                }
              >
                <RiGolfBallFill className='mt-1' /> All Properties
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/popular'
                className={({ isActive }) =>
                  `flex dark:text-white gap-4 text-sm px-1 py-1.5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 ${isActive ? 'bg-gray-300 dark:bg-gray-600' : ''}`
                }
              >
                <GiCrackedBallDunk className='mt-1' /> Popular
              </NavLink>
            </li>
          </ul>
          <hr className='my-5 border- h-px rounded-full border-gray-300 dark:border-gray-500'/>

          <ul className='space-y-2 font-medium'>
            <p className='text-dark dark:text-gray-400 tracking-wide text-xs uppercase'>Create a Custom Feed</p>
            <li>
              <NavLink
                to='/create'
                className={({ isActive }) =>
                  `flex dark:text-white gap-4  px-1 py-1.5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 ${isActive ? 'bg-gray-300 dark:bg-gray-600' : ''}`
                }
              >
                <LuCross className='mt-1  w-[50px]'/> Create
              </NavLink>
            </li>
          </ul>

          <hr className='my-5 h-px rounded-full border-gray-300 dark:border-gray-500'/>

          <ul className='space-y-2 font-medium'>
            <p className='text-dark dark:text-gray-400 tracking-wide text-xs uppercase'>RECENT</p>
            <li>
              {/* Add recent items here */}
            </li>
          </ul>

          <hr className='my-5 h-px rounded-full border-gray-300 dark:border-gray-500'/>

          <ul className='space-y-2 font-medium'>
            <p className='text-dark dark:text-gray-400 tracking-wide text-xs uppercase'>New Post</p>
            <li>
              <button
                onClick={togglePopup}
                className='dark:text-white flex gap-4 px-1 py-1.5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 w-full'
              >
                <LuCross className='mt-1'/> New Post
              </button>
            </li>
          </ul>

          <hr className='my-5 h-px rounded-full border-gray-300 dark:border-gray-500'/>

          <ul className='space-y-2 font-medium'>
            <p className='text-dark dark:text-gray-400 tracking-wide text-xs uppercase'>Resources</p>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  `flex dark:text-white gap-4  px-1 py-1.5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 ${isActive ? 'bg-gray-300 dark:bg-gray-600' : ''}`
                }
              >
                <FcAbout className='mt-1'/> About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/settings'
                className={({ isActive }) =>
                  `flex dark:text-white gap-4  px-1 py-1.5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 ${isActive ? 'bg-gray-300 dark:bg-gray-600' : ''}`
                }
              >
                <CiSettings className='mt-1'/> Settings
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex dark:text-white gap-4  px-1 py-1.5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer"
              >
                <MdOutlineLogout className='mt-1'/> Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <Popup isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
    </div>
  );
});

export default Sidenav;
