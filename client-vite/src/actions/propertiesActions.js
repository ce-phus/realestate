
import axios from 'axios';
import {
    LIST_ALL_PROPERTIES_REQUEST,
    LIST_ALL_PROPERTIES_SUCCESS,
    LIST_ALL_PROPERTIES_FAIL,
    LIST_AGENTS_PROPERTIES_REQUEST,
    LIST_AGENTS_PROPERTIES_SUCCESS,
    LIST_AGENTS_PROPERTIES_FAIL,
    CREATE_PROPERTY_REQUEST,
    CREATE_PROPERTY_SUCCESS,
    CREATE_PROPERTY_FAIL,
    UPDATE_PROPERTY_REQUEST,
    UPDATE_PROPERTY_SUCCESS,
    UPDATE_PROPERTY_FAIL,
    DELETE_PROPERTY_REQUEST,
    DELETE_PROPERTY_SUCCESS,
    DELETE_PROPERTY_FAIL,
    PROPERTY_DETAILS_REQUEST,
    PROPERTY_DETAILS_SUCCESS,
    PROPERTY_DETAILS_FAIL,
    SEARCH_PROPERTIES_REQUEST,
    SEARCH_PROPERTIES_SUCCESS,
    SEARCH_PROPERTIES_FAIL,
    UPLOAD_PROPERTY_IMAGE_REQUEST,
    UPLOAD_PROPERTY_IMAGE_SUCCESS,
    UPLOAD_PROPERTY_IMAGE_FAIL,
} from '../constants/index';

const API_URL = import.meta.env.VITE_API_URL;

// actions/propertiesActions.js
export const listAllProperties = () => async (dispatch, getState) => {
    try {
      dispatch({ type: LIST_ALL_PROPERTIES_REQUEST });
  
      const {
        userLoginReducer: { userInfo },
      } = getState();
  
      if (!userInfo || !userInfo.access) {
        throw new Error('User is not authenticated');
      }
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.access}`,
        },
      };
  
      const { data } = await axios.get(`${API_URL}/api/v1/properties/all/`, config);
      console.log('Property List: ', data);
  
      dispatch({
        type: LIST_ALL_PROPERTIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LIST_ALL_PROPERTIES_FAIL,
        payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
      });
    }
  };
  
  

// actions/propertyActions.js (continued)

export const listAgentsProperties = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LIST_AGENTS_PROPERTIES_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`${API_URL}/api/v1/properties/agents/`, config);

        dispatch({
            type: LIST_AGENTS_PROPERTIES_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: LIST_AGENTS_PROPERTIES_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};


export const createProperty = (propertyData) => async (dispatch, getState) => {
    try {
        dispatch({ type: CREATE_PROPERTY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(`${API_URL}/api/v1/properties/create/`, propertyData, config);

        dispatch({
            type: CREATE_PROPERTY_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CREATE_PROPERTY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};


export const updateProperty = (slug, propertyData) => async (dispatch, getState) => {
    try {
        dispatch({ type: UPDATE_PROPERTY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.put(`${API_URL}/api/v1/properties/details/${slug}/`, propertyData, config);

        dispatch({
            type: UPDATE_PROPERTY_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PROPERTY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const deleteProperty = (slug) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_PROPERTY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`${API_URL}/api/v1/properties/delete/${slug}/`, config);

        dispatch({
            type: DELETE_PROPERTY_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: DELETE_PROPERTY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const getPropertyDetails = (slug) => async (dispatch, getState) => {
    try {
        dispatch({ type: PROPERTY_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`${API_URL}/api/v1/properties/details/${slug}/`, config);

        dispatch({
            type: PROPERTY_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PROPERTY_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const searchProperties = (searchData) => async (dispatch) => {
    try {
        dispatch({ type: SEARCH_PROPERTIES_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post(`${API_URL}/api/v1/properties/search/`, searchData, config);

        dispatch({
            type: SEARCH_PROPERTIES_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SEARCH_PROPERTIES_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};


export const uploadPropertyImage = (imageData) => async (dispatch, getState) => {
    try {
        dispatch({ type: UPLOAD_PROPERTY_IMAGE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(`${API_URL}/api/v1/properties/upload-image/`, imageData, config);

        dispatch({
            type: UPLOAD_PROPERTY_IMAGE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: UPLOAD_PROPERTY_IMAGE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};



