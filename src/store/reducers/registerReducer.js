export const USER_REGISTER_REQUEST = "registerReduser/USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "registerReduser/USER_REGISTER_SUCCESS";
export const USER_REGISTER_ERROR = "registerReduser/USER_REGISTER_ERROR";

const initialState = {
  isLoading: false,
  error: "",
  token: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        error: "",
        isLoading: false
      };
    case USER_REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
