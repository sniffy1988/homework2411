export const USER_LOGIN_SUCCESS = "userReduser/USER_LOGIN_SUCESS";
export const USER_LOGIN_REQUEST = "userReduser/USER_LOGIN_REQUEST";
export const USER_LOGIN_ERROR = "userReduser/USER_LOGIN_ERROR";
export const USER_REGISTER_REQUEST = "userReducer/USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "userReducer/USER_REGISTER_SUCCESS";
export const USER_REGISTER_ERROR = "userReducer/USER_REGISTER_ERROR";
export default (
  state = {
    token: "",
    isLoading: false,
    error: ""
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
        error: ""
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
        error: ""
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
