import { combineReducers } from "redux";

import { 
    userLoginReducer,
    userRegisterReducer,
    userActivateReducer,
    userResetPasswordConfirmReducer,
    userResetPasswordReducer,
     } from "./userReducer";

import {
    getProfileReducer,
    profileUpdateReducer,
    agentListReducer,
    topAgentsListReducer,
} from "./profileReducer";

import {    
    listAllPropertiesReducer,
    listAgentsPropertiesReducer,
    createPropertyReducer,
    updatePropertyReducer,
    deletePropertyReducer,
    propertyDetailsReducer,
    searchPropertiesReducer,
    uploadPropertyImageReducer,
} from "./propertiesReducer";

const allReducers = combineReducers({
    userLoginReducer,
    userRegisterReducer,
    userActivateReducer,
    userResetPasswordConfirmReducer,
    userResetPasswordReducer,
    getProfileReducer,
    profileUpdateReducer,
    agentListReducer,
    topAgentsListReducer,
    listAllPropertiesReducer,
    listAgentsPropertiesReducer,
    createPropertyReducer,
    updatePropertyReducer,
    deletePropertyReducer,
    propertyDetailsReducer,
    searchPropertiesReducer,
    uploadPropertyImageReducer,
})

export default allReducers;