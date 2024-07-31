import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { close } from '../assets';
import { createProperty } from '../actions/propertiesActions';

const Popup = ({ isPopupOpen, togglePopup }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [interior_features, setInterior] = useState('');
  const [exterior_features, setExterior] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [postal_code, setPostalcode] = useState('');
  const [street_address, setStreetAddress] = useState('');
  const [property_number, setPropertyNumber] = useState('');
  const [price, setPrice] = useState('');
  const [tax, setTax] = useState('');
  const [final_property_price, setFinalPropertyPrice] = useState('');
  const [plot_area, setPlotArea] = useState('');
  const [total_floors, setTotalFloors] = useState('');
  const [bedroom, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [advert_type, setAdvertType] = useState('');
  const [property_type, setPropertyType] = useState('');
  const [cover_photo, setCoverPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);

  const dispatch = useDispatch();

  const createPropertyReducer = useSelector((state) => state.createPropertyReducer);
  const { loading, error, property } = createPropertyReducer;

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { error: LoginError, userInfo } = userLoginReducer;

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    setCoverPhoto(file);
  };
  
  const handlePhotosChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInfo) {
      const formData = new FormData();
      
      formData.append('title', title);
      formData.append('description', description);
      formData.append('interior_features', interior_features);
      formData.append('exterior_features', exterior_features);
      formData.append('country', country);
      formData.append('city', city);
      formData.append('postal_code', postal_code);
      formData.append('street_address', street_address);
      formData.append('property_number', property_number || 0);
      formData.append('price', Number(price));
      formData.append('tax', Number(tax) || 0);
      formData.append('final_property_price', Number(final_property_price) || 0);
      formData.append('plot_area', Number(plot_area));
      formData.append('total_floors', Number(total_floors) || 0);
      formData.append('bedrooms', Number(bedroom));
      formData.append('bathrooms', Number(bathrooms));
      formData.append('advert_type', advert_type);
      formData.append('property_type', property_type);
      formData.append("cover_photo", cover_photo);
      
      photos.forEach((photo, index) => {
        formData.append(`photos[${index}]`, photo);
      });
  
      dispatch(createProperty(formData));
      console.log("Form Data:", formData);
    } else {
      console.error('User must be authenticated to create a property.');
    }
  };
  

  if (!isPopupOpen) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative bg-white dark:bg-dark p-4 rounded-lg shadow-lg max-w-3xl w-full transition duration-1500 ease-in-out overflow-y-auto h-4/5 mx-3">
        <div className="absolute top-0 right-0 p-2" onClick={togglePopup}>
          <img src={close} className="dark:text-white cursor-pointer" alt="Close" />
        </div>
        <h2 className="text-xl font-bold mb-4 dark:text-white">Create Post</h2>
        {LoginError && <div className="text-red-600 mb-4">{LoginError}</div>}
        {!userInfo && <div className="text-red-600 mb-4">User must be authenticated to create a property.</div>}
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto w-full" encType="multipart/form-data">
          <div className="flex flex-wrap -mx-3 mb-6 md:mb-2">
            <div className="w-full md:w-1/2 px-3 mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Title</label>
              <input
                className="appearance-none bg-gray-50 block border border-gray-300 placeholder-gray-300 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Country</label>
              <input
                className="appearance-none bg-gray-50 block border border-gray-300 placeholder-gray-300 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <label className="flex flex-col mb-2">
            <span className="dark:text-white font-bold mb-4 tracking-wide uppercase text-xs">Description</span>
            <textarea
              rows={7}
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="dark:bg-dark/75 rounded-xl dark:text-white shadow-md shadow-dark"
            />
          </label>
          <label className="flex flex-col mb-2">
            <span className="dark:text-white font-bold mb-4 tracking-wide uppercase text-xs">Interior Features</span>
            <textarea
              rows={7}
              name="description"
              value={interior_features}
              onChange={(e) => setInterior(e.target.value)}
              className="dark:bg-dark/75 rounded-xl dark:text-white shadow-md shadow-dark"
            />
          </label>
          <label className="flex flex-col mb-2">
            <span className="dark:text-white font-bold mb-4 tracking-wide uppercase text-xs">Exterior Features</span>
            <textarea
              rows={7}
              name="description"
              value={exterior_features}
              onChange={(e) => setExterior(e.target.value)}
              className="dark:bg-dark/75 rounded-xl dark:text-white shadow-md shadow-dark"
            />
          </label>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">City</label>
              <input
                className="appearance-none appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Postal Code</label>
              <input
                className="appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="text"
                value={postal_code}
                onChange={(e) => setPostalcode(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Street Address</label>
              <input
                className="appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="text"
                value={street_address}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Property Number</label>
              <input
                className="appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="number"
                value={property_number}
                onChange={(e) => setPropertyNumber(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Price</label>
              <input
                className="appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Tax</label>
              <input
                className="appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="number"
                value={tax}
                onChange={(e) => setTax(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Final Property Price</label>
              <input
                className="appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="number"
                value={final_property_price}
                onChange={(e) => setFinalPropertyPrice(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Plot Area</label>
              <input
                className="appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="number"
                value={plot_area}
                onChange={(e) => setPlotArea(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Total Floors</label>
              <input
                className="appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="number"
                value={total_floors}
                onChange={(e) => setTotalFloors(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Bedrooms</label>
              <input
                className="appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="number"
                value={bedroom}
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Bathrooms</label>
              <input
                className="appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="number"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Advert Type</label>
              <select
                className="appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                value={advert_type}
                onChange={(e) => setAdvertType(e.target.value)}
              >
                <option value="">Select</option>
                <option value="For Rent">For Rent</option>
                <option value="For Sale">For Sale</option>
                <option value="Auction">Auction</option>
              </select>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Property Type</label>
              <select
                className="appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                value={property_type}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="Other">Select</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Commercial">Commercial</option>
                <option value="Warehouse">Warehouse</option>
                <option value="Office">Office</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-2">
              <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2">Cover Photo</label>
              <input
                className="appearance-none bg-gray-50 dark:bg-dark block border border-gray-300 placeholder-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary dark:focus:border-blue-500 p-2.5 rounded-lg w-full"
                type="file"
                onChange={handleSubmit}
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span classn="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handlePhotosChange}
                  multiple
                  accept="image/*"
                />
                <button type="button" onClick={() => document.getElementById('dropzone-file').click()}>Upload Photos</button>
            </label>
        </div> 
          <div className="w-full mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
              Submit
            </button>
          </div>
          <div className="flex justify-start mt-4">
            <button
              onClick={togglePopup}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              close
            </button>
          </div>
          {error && <div className="text-red-600 mt-4">{error}</div>}
        </form>
      </div>
    </motion.div>
  );
}

export default Popup;
