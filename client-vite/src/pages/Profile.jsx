import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../actions/profileActions'
import { Spinner } from 'react-bootstrap'
import { Layout, ProfileProperties } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import { getProfile } from '../actions/profileActions';

const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getProfileReducer = useSelector((state) => state.getProfileReducer);
    const { loading, error, profile } = getProfileReducer;
  
    const userLoginReducer = useSelector((state) => state.userLoginReducer);
    const { error:Usererror, userInfo } = userLoginReducer
    useEffect(() => {
        if (error) {
          if (error === "Given token not valid for any token type") {
            navigate('/login');
          }
        }  else {
          dispatch(getProfile());
        }
      }, [dispatch, error, navigate]);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

  return (
    <Layout>
        <div className='flex flex-col justify-center pt-20'>
            {loading ? (
                <Spinner/>
            ):error}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 bg-transparent dark:bg-dark shadow max-w-5xl mx-auto rounded-lg'>
                <div className=''>
                    <img src={profile.profile_photo}/>
                </div>
                <div className='dark:text-white mt-5 mx-3'>
                    <Link to={``} className='mb-3'>
                        <button className='font-medium tracking-wide bg-gray-200 w-1/2 py-1.5 rounded-lg hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'>Edit Profile</button>
                    </Link>
                    <div className='mb-3 mt-4'>
                        <div className='flex gap-4'>
                            <p className='font-medium text-xl'><span className='ml-3 '>{ profile.full_name }</span></p>
                            <span className='ml-3 text-lg text-gray-400'>
                                {profile.is_buyer ? 'Buyer' : profile.is_seller ? 'Seller' : ''}
                            </span>
                        </div>
                        <div className='mt-3'>
                            <p className='text-gray-400 text-lg mb-3'>{profile.about_me}</p>
                            <p className='mb-2'>Gender: {profile.gender}</p>
                            <p className='mb-2'>Country: {profile.country}</p>
                            <p className='mb-2'>{profile.license}</p>
                            <p className='mb-2'>{profile.city}</p>
                            <p className='mb-2'>{profile.is_agent}</p>
                            <p className='mb-2'>{profile.top_agent}</p>
                            <p className='mb-2'>{profile.rating}</p>
                            <p className='mb-2 '>Reviews: {profile.num_reviews}</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='mt-3 flex items-center justify-center text-lg font-medium uppercase dark:text-white'>Posts</h1>
            <div className='flex max-w-7xl grid grid-cols-2 md:grid-cols-3'>
                {profile.properties && profile.properties.map((properties)=> (
                   <div key={properties.id} className='flex flex-col'>
                    <ProfileProperties properties={properties}/>
                   </div> 
                ))}
            </div>
        </div>
    </Layout>
  )
}

export default Profile