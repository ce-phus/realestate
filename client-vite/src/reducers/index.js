import { combineReducers } from "redux";

import { 
    userLoginReducer,
    userRegisterReducer,
    userActivateReducer,
    userResetPasswordConfirmReducer,
    userResetPasswordReducer,
     } from "./userReducer";

import {
    profileDetailsReducer,
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
    profileDetailsReducer,
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