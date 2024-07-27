import React, {useState, useEffect} from 'react'
import { Layout } from '../components'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {motion} from 'framer-motion'
import { getPropertyDetails } from '../actions/propertiesActions'
import { close } from '../assets'


const PropertyDetail = () => {
    
    const navigate = useNavigate()
    const {slug} = useParams()
    const dispatch = useDispatch()
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const propertyDetailsReducer = useSelector(state=>state.propertyDetailsReducer)
    const { loading, error, property } = propertyDetailsReducer
    // console.log("Property" ,property)

    const API_URL = import.meta.env.VITE_API_URL;
    const fullImageUrl = API_URL + property.cover_photo

    useEffect(() => {
        if (slug) {
            dispatch(getPropertyDetails(slug))
        }
        
    }, [dispatch, slug])

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'kes' }).format(price);
      }
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }

  return (
    <Layout>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 dark:bg-dark dark:text-white rounded-lg shadow-lg w-full max-w-7xl mx-auto mb-10 '>
            <div className='mx-5'>
                <img src={fullImageUrl} className='w- h-full rounded-t-lg rounded-s-lg' alt={property.title}/>
                <div className='mt-1 mb-3 mx-3 flex'>
                    <p className='text-lg font-medium'>Views: {property.views}</p>
                    <button onClick={togglePopup} className='text-lg font-medium ml-4'>Comments: </button>

                </div>
            </div>
            <div className='flex flex-col overflow-y-auto mx-5'>
                <h3 className='text-3xl dark:text-white tracking-wide text-secondary uppercase mb-3'>{property.title}</h3>
                <h2 className='text-3xl font-bold mb-3 dark:text-white'>{formatPrice(property.final_property_price)}</h2>

                <hr className='my-5 border- h-px rounded-full border-gray-300 dark:border-gray-500'/>

                <h2 className='text-xl font-medium dark:text-white'>Detailed Description</h2>
                <p className='text-gray-600 dark:text-gray-400 text-sm mx-1 tracking-wide mb-2'>{property.description}</p>
                <h2 className='text-xl font-medium dark:text-white'>Interior Features</h2>
                <p className='text-gray-600 dark:text-gray-400 text-sm mx-1 tracking-wide mb-2'>{property.exterior_features}</p>
                <h2 className='text-xl font-medium dark:text-white'>Exterior Features</h2>
                <p className='text-gray-600 dark:text-gray-400 text-sm mx-1 tracking-wide mb-2'>{property.interior_features}</p>

                <hr className='my-5 border- h-px rounded-full border-gray-300 dark:border-gray-500'/>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-3'>
                    <div className=''>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Country</span>  :  {property.country}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>City</span>  :  {property.city}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Postal Code</span>  :  {property.postal_code}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Street Address</span>  :  {property.street_address}
                        </p>
                    </div>
                    <div className=''>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Property Number</span>  :  {property.property_number}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Price</span>  :  {formatPrice(property.price)}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Tax</span>  :  {property.tax}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>After Tax</span>  :  {property.final_property_price}
                        </p>
                    </div>

                    <div className=''>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Plot Area</span>  :  {property.plot_area} m^2
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Total Floors</span>  :  {property.total_floors}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Bedrooms</span>  :  {property.bedrooms}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Bathrooms</span>  :  {property.bathrooms}
                        </p>
                    </div>

                    <div className=''>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Advert Type</span>  :  {property.advert_type}
                        </p>
                        <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
                            <span className=' text-dark dark:text-white'>Property Type</span>  :  {property.property_type}
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>

        {isPopupOpen && (
                <motion.div initial={{scale:0, opacity:0}}
                animate={{scale:0.9, opacity:2}} className='z-50 mx-auto pt-20 fixed inset-0 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 bg-white/75 dark:bg-dark/85 rounded-lg backdrop-blur-m py-32'>
                    <div className='absolute top-0 right-0' onClick={togglePopup}>
                        <img src={close} className='dark:text-white cursor-pointer'/>
                    </div>
                    <div className='bg-white dark:bg-dark p-4 rounded-lg shadow-lg max-w-lg w-full transition duration-1500 ease-in-out'>
                        <h2 className='text-xl font-bold mb-4 dark:text-white'>Comments</h2>
                        <div className='mb-4'>
                            
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
    </Layout>
    
  )
}

export default PropertyDetail