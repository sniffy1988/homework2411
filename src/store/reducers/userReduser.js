export const USER_LOGIN_SUCCESS = "userReduser/USER_LOGIN_SUCESS";
export const USER_LOGIN_REQUEST = "userReduser/USER_LOGIN_REQUEST";
export const USER_LOGIN_ERROR = "userReduser/USER_LOGIN_ERROR";

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
    default:
      return state;
  }
};
