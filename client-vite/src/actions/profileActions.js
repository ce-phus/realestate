// actions/profileActions.js

import axios from 'axios';
import {
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    LIST_AGENTS_REQUEST,
    LIST_AGENTS_SUCCESS,
    LIST_AGENTS_FAIL,
    LIST_TOP_AGENTS_REQUEST,
    LIST_TOP_AGENTS_SUCCESS,
    LIST_TOP_AGENTS_FAIL,
} from '../constants/index';

const API_URL = import.meta.env.NEXT_PUBLIC_API_URL;

export const getProfile = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_PROFILE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`${API_URL}/api/v1/profile/me/`, config);

        dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const updateProfile = (username, profileData) => async (dispatch, getState) => {
  try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });

      const {
          userLogin: { userInfo },
      } = getState();

      const config = {
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
          },
      };

      const { data } = await axios.patch(
          `${API_URL}/api/v1/profile/update/${username}/`,
          profileData,
          config
      );

      dispatch({
          type: UPDATE_PROFILE_SUCCESS,
          payload: data,
      });
  } catch (error) {
      dispatch({
          type: UPDATE_PROFILE_FAIL,
          payload: error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
      });
  }
};

export const listAgents = () => async (dispatch, getState) => {
  try {
      dispatch({ type: LIST_AGENTS_REQUEST });

      const {
          userLogin: { userInfo },
      } = getState();

      const config = {
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
          },
      };

      const { data } = await axios.get(`${API_URL}/api/v1/profile/agents/all/`, config);

      dispatch({
          type: LIST_AGENTS_SUCCESS,
          payload: data,
      });
  } catch (error) {
      dispatch({
          type: LIST_AGENTS_FAIL,
          payload: error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
      });
  }
};

export const listTopAgents = () => async (dispatch, getState) => {
  try {
      dispatch({ type: LIST_TOP_AGENTS_REQUEST });

      const {
          userLogin: { userInfo },
      } = getState();

      const config = {
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
          },
      };

      const { data } = await axios.get(`${API_URL}/api/v1/profile/top-agents/all/`, config);

      dispatch({
          type: LIST_TOP_AGENTS_SUCCESS,
          payload: data,
      });
  } catch (error) {
      dispatch({
          type: LIST_TOP_AGENTS_FAIL,
          payload: error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
      });
  }
};


