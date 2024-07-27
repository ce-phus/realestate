import React from 'react';
import { Link } from 'react-router-dom';
import DarkMode from './Darkmode';
import { logoname, logo4 } from '../assets';
import { LuCross } from "react-icons/lu";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-300 dark:bg-dark dark:border-gray-700 flex items-center justify-between'>
      <div className='flex items-center'>
        <button className="navbar-burger flex items-center dark:text-white text-dark-600 p-3" onClick={toggleSidebar} aria-expanded={isSidebarOpen} aria-controls="sidebar" aria-label="Toggle sidebar">
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        <Link to="/" className="flex items-center gap-2 ml-3">
          <img src={logo4} className='w-[50px]' alt="Logo" />
          <img src={logoname} className='w-[150px] hidden md:block' alt="Logo Name" />
        </Link>
      </div>

      <div className="md:w-full">
        <form className="max-w-lg mx-auto">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p- ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Properties......" required />
          </div>
        </form>
      </div>

      <div className="flex items-center ms-3">
        {/* <div className='flex bg-dark text-white items-center justify-center px-3 rounded-lg dark:bg-white dark:text-dark'>
          
            New Post
          
        </div> */}
        
        <DarkMode  className="mr-"/>
        <div>
          <img src={logo4} className='w-9 mx-3'/>
        </div>
      </div>
    </nav>
  );
};

export default Header;
