import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { close } from '../assets';

const ProfileProperties = ({ properties }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const API_URL = import.meta.env.VITE_API_URL;
    const fullImageUrl = API_URL + properties.cover_photo

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'kes' }).format(price);
      }

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen)
    }
  return (
    <div className='mt-5 mx-3 mb-10' isPopupOpen={isPopupOpen} togglePopup={togglePopup}>
        <Link className='' onClick={togglePopup}>
            <div>
                <img src={fullImageUrl} className='md:h-[500px] w-full h-[200px]'/>
            </div>
        </Link>
        {isPopupOpen && (
        <motion.div initial={{scale:0, opacity:0}}
        animate={{scale:0.9, opacity:2}} className='z-50  pt-20 fixed inset-0 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 bg-white/75 dark:bg-dark/85 rounded-lg backdrop-blur-m'>
            <div className='absolute top-0 right-0' onClick={togglePopup}>
                <img src={close} className='dark:text-white cursor-pointer'/>
            </div>
            <div className='bg-white dark:bg-dark p-4 rounded-lg shadow-lg w-full transition duration-1500 ease-in-out max-w-7xl mx-auto'>
                <div className='mb-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 dark:bg-dark dark:text-white rounded-lg shadow-lg  mb-10'>
            <div className='mx-5 '>
                <img src={fullImageUrl} className='w-full  rounded-t-lg rounded-s-lg' alt={properties.title}/>
                <div className='mt-1 mb-3 mx-3 flex'>
                    <p className='text-lg font-medium'>Views: {properties.views}</p>
                    <button onClick={togglePopup} className='text-lg font-medium ml-4'>Comments: </button>

                </div>
            </div>
            <div className='flex flex-col overflow-y-auto mx-5 h-4/5 max-w-3xl mx-auto'>
                <h3 className='text-3xl dark:text-white tracking-wide text-secondary uppercase mb-3'>{properties.title}</h3>
                <h2 className='text-3xl font-bold mb-3 dark:text-white'>{formatPrice(properties.final_property_price)}</h2>

                <hr className='my-5 border- h-px rounded-full border-gray-300 dark:border-gray-500'/>

                <h2 className='text-xl font-medium dark:text-white'>Detailed Description</h2>
                <p className='text-gray-600 dark:text-gray-400 text-sm mx-1 tracking-wide mb-2'>{properties.description}</p>
                <h2 className='text-xl font-medium dark:text-white'>Interior Features</h2>
                <p className='text-gray-600 dark:text-gray-400 text-sm mx-1 tracking-wide mb-2'>{properties.exterior_features}</p>
                <h2 className='text-xl font-medium dark:text-white'>Exterior Features</h2>
                <p className='text-gray-600 dark:text-gray-400 text-sm mx-1 tracking-wide mb-2'>{properties.interior_features}</p>

                <hr className='my-5 border- h-px rounded-full border-gray-300 dark:border-gray-500'/>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-3'>
                    <div className=''>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Country</span>  :  {properties.country}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>City</span>  :  {properties.city}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Postal Code</span>  :  {properties.postal_code}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Street Address</span>  :  {properties.street_address}
                        </p>
                    </div>
                    <div className=''>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Property Number</span>  :  {properties.property_number}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Price</span>  :  {formatPrice(properties.price)}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Tax</span>  :  {properties.tax}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>After Tax</span>  :  {properties.final_property_price}
                        </p>
                    </div>

                    <div className=''>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Plot Area</span>  :  {properties.plot_area} m^2
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Total Floors</span>  :  {properties.total_floors}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Bedrooms</span>  :  {properties.bedrooms}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Bathrooms</span>  :  {properties.bathrooms}
                        </p>
                    </div>

                    <div className=''>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Advert Type</span>  :  {properties.advert_type}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Property Type</span>  :  {properties.property_type}
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
                </div>
                <form >
                   
                </form>
                <button
                    className='mt-4 text-blue-500'
                    onClick={togglePopup}
                >
                    Close
                </button>
            </div>
        </motion.div>
    )}
    </div>
   
  )
}

export default ProfileProperties