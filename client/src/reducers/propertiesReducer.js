// reducers/propertyReducers.js

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

export const listAllPropertiesReducer = (state = { properties: [] }, action) => {
    switch (action.type) {
        case LIST_ALL_PROPERTIES_REQUEST:
            return { loading: true, properties: [] };
        case LIST_ALL_PROPERTIES_SUCCESS:
            return { loading: false, properties: action.payload };
        case LIST_ALL_PROPERTIES_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const listAgentsPropertiesReducer = (state = { properties: [] }, action) => {
    switch (action.type) {
        case LIST_AGENTS_PROPERTIES_REQUEST:
            return { loading: true, properties: [] };
        case LIST_AGENTS_PROPERTIES_SUCCESS:
            return { loading: false, properties: action.payload };
        case LIST_AGENTS_PROPERTIES_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const createPropertyReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_PROPERTY_REQUEST:
            return { loading: true };
        case CREATE_PROPERTY_SUCCESS:
            return { loading: false, success: true, property: action.payload };
        case CREATE_PROPERTY_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const updatePropertyReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROPERTY_REQUEST:
            return { loading: true };
        case UPDATE_PROPERTY_SUCCESS:
            return { loading: false, success: true, property: action.payload };
        case UPDATE_PROPERTY_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const deletePropertyReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PROPERTY_REQUEST:
            return { loading: true };
        case DELETE_PROPERTY_SUCCESS:
            return { loading: false, success: true };
        case DELETE_PROPERTY_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const propertyDetailsReducer = (state = { property: {} }, action) => {
    switch (action.type) {
        case PROPERTY_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PROPERTY_DETAILS_SUCCESS:
            return { loading: false, property: action.payload };
        case PROPERTY_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const searchPropertiesReducer = (state = { properties: [] }, action) => {
    switch (action.type) {
        case SEARCH_PROPERTIES_REQUEST:
            return { loading: true, properties: [] };
        case SEARCH_PROPERTIES_SUCCESS:
            return { loading: false, properties: action.payload };
        case SEARCH_PROPERTIES_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const uploadPropertyImageReducer = (state = {}, action) => {
    switch (action.type) {
        case UPLOAD_PROPERTY_IMAGE_REQUEST:
            return { loading: true };
        case UPLOAD_PROPERTY_IMAGE_SUCCESS:
            return { loading: false, success: true, image: action.payload };
        case UPLOAD_PROPERTY_IMAGE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
