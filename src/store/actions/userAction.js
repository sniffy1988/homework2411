import axios from "axios";

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS
} from "../reducers/userReduser";

const userAction = ({ login, password }) => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    });

    const { data } = await axios.put(
      "https://coursehunters.net/api/auth/login",
      {
        e_mail: login,
        password
      }
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_ERROR,
      payload: error.message
    });
  }
};

export default userAction;
