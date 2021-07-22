let initialState = {
  isAuth: localStorage.getItem('isAuth') ||  false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-AUTH":
      return {
        ...state,
        isAuth: action.isAuth,
      };

    default:
      return state;
  }
};

export const setAuth = (isAuth) => {
  return {
    type: "SET-AUTH",
    isAuth: isAuth,
  };
};

export const getAuth = (isAuth) => (dispatch) => {
  dispatch(setAuth(isAuth));
  localStorage.setItem('isAuth', isAuth);
}


export default authReducer;