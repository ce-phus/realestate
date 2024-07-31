import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { FaBed, FaShower } from "react-icons/fa";
import { GiStairs } from "react-icons/gi";

import { getProfile } from '../actions/profileActions';

const Property = ({ property }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getProfileReducer = useSelector((state) => state.getProfileReducer);
  const {  profile } = getProfileReducer;
  
  
    function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
    const API_URL = import.meta.env.VITE_API_URL;
    const fullImageUrl = API_URL + property.cover_photo
    const fullProfileImageUrl = API_URL + property.profile_photo
    console.log('Property profile photo', property.profile_photo)

    useEffect(() => {
      dispatch(getProfile());
  }, [dispatch]);
    

  return (
    <div className='mx-3 md:mx-0'>
      <Link to={`/profile/${''}`}>
      <div className='flex justify-end'>
        <p className='mt-2 text-sm font-medium'>{property.user}</p>
        <img src={fullProfileImageUrl} className='w-9'/>
      </div>
      </Link >
      
        <Link className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl dark:bg-dark dark:border-gray-700' to={`/property/${property.slug}`}>
            <img src={fullImageUrl} className='object-cover w-[500px] rounded-t-lg h-[500px]  md:rounded-none md:rounded-s-lg' alt=''/>
            <div className='flex flex-col justify-between p-4 leading-normal w-[500px] items-center object-contain'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-dark dark:text-white w-1/2 md:w-full'>{ property.title }</h5>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 w-1/2 md:w-full'>{ property.description }</p>
              
              <hr className='my-5 border- h-px rounded-full border-gray-300 dark:border-gray-500'/>

              <div className='flex'>
                <div className='flex flex-col justify-between'>
                  <p className='mb-2 font-normal text-gray-700 dark:text-gray-400'>Bedrooms</p>
                  <span className="flex items-center dark:text-white mb-3">
                    <FaBed className="mr-1 " /> {property.bedrooms}
                  </span>
                  <p className='mb-2 font-normal text-gray-700 dark:text-gray-400'>Bathrooms</p>
                  <span className="flex items-center dark:text-white mb-3">
                    <FaShower className="mr-1 " /> {property.bathrooms}
                  </span>
                  <p className='mb-2 font-normal text-gray-700 dark:text-gray-400'>Number of Floors</p>
                  <span className="flex items-center dark:text-white">
                    <GiStairs className="mr-1 " /> {property.total_floors}
                  </span>
                </div>
              </div>

              <hr className='my-5 border- h-px rounded-full border-gray-300 dark:border-gray-500'/>

              <Link to={`/property/${property.slug}`}>
                <button className='text-white bg-blue-600 px-3 py-2 hover:bg-blue-700 rounded-lg'>Learn More &gt; &gt;</button>
              </Link>
            </div>
        </Link>
    </div>
  )
}

export default Property
