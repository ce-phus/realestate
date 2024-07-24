import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_ACTIVATE_REQUEST,
  USER_ACTIVATE_SUCCESS,
  USER_ACTIVATE_FAIL,
} from "../constants/index"

const API_URL = import.meta.env.NEXT_PUBLIC_API_URL;

// login
export const login = (email, password) => async (dispatch) => {
  try {
      dispatch({ type: USER_LOGIN_REQUEST });

      const config = {
          headers: {
              'Content-Type': 'application/json',
          },
      };

      const { data } = await axios.post(`${API_URL}/api/v1/auth/jwt/create/`, { email, password }, config);

      dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data,
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
      dispatch({
          type: USER_LOGIN_FAIL,
          payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
      });
  }
};

// register
export const register = (username, firstName, lastName, email, password, re_password) => async (dispatch) => {
  try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const config = {
          headers: {
              'Content-Type': 'application/json',
          },
      };

      const { data } = await axios.post(`${API_URL}/api/v1/auth/users/`, { username, first_name: firstName, last_name: lastName, email, password, re_password }, config);

      dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: data,
      });

      dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data,
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
      dispatch({
          type: USER_REGISTER_FAIL,
          payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
      });
  }
};

// User Activation Action
export const activateUser = (uid, token) => async (dispatch) => {
    try {
      dispatch({ type: USER_ACTIVATE_REQUEST });
  
      const { data } = await axios.post(`${API_URL}/api/v1/auth/users/activation/`, { uid, token });
      console.log("ACTIVATION: ", data)
  
      dispatch({ type: USER_ACTIVATE_SUCCESS, payload: data });
  
    } catch (error) {
      dispatch({
        type: USER_ACTIVATE_FAIL,
        payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
      });
    }
  };

const logout = () => localStorage.removeItem("userInfo");

export default logout
