import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR
} from "../reducers/userReduser";
export default ({ email, password, password2 }) => async dispatch => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    });
    const { data } = await axios.post(
      "https://coursehunters.net/api/auth/signup",
      {
        e_mail: email,
        password,
        password_confirm: password2
      }
    );
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_REGISTER_ERROR,
      payload: error.message
    });
  }
};
