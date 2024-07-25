import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { listAllProperties } from "../actions/propertiesActions";
import { Link } from 'react-router-dom';
import Property from '../components/Property';
import Spinner from '../components/Spinner';

const Home = () => {
  const dispatch = useDispatch();
  const listAllPropertiesReducer = useSelector((state) => state.listAllPropertiesReducer);
  const { loading, error, properties } = listAllPropertiesReducer;

  useEffect(() => {
    dispatch(listAllProperties());
  }, [dispatch]);

  console.log("Properties: ", properties);  // Check properties here

  return (
    <div className="mt-4 overflow-hidden">
      <h2 className="text-xl mb-4">Property Listings</h2>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
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
