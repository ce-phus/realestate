import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { listAllProperties } from "../actions/propertiesActions";
import Property from '../components/Property';
import Spinner from '../components/Spinner';
import { logout } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listAllPropertiesReducer = useSelector((state) => state.listAllPropertiesReducer);
  const { loading, error, properties } = listAllPropertiesReducer;

  useEffect(() => {
    dispatch(listAllProperties());
  }, [dispatch]);

  useEffect(() => {
    if (error === "Given token not valid for any token type") {
      navigate('/login');
    }
  }, [error, navigate]);


  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="mt-4 overflow-hidden">
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className='grid pt-20 '>
          <p className="text-red-500">{error}</p> 
          <button onClick={handleLogout} className='mt-10 bg-blue-500 hover:bg-blue-600 rounded-lg py-2 text-white'>Sign In</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 pb-10">
          {properties && properties.map((property) => (
            <div key={property.id} className="flex flex-col">
              <Property property={property} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
