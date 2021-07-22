import { flyAPI } from "../api";

let today = new Date();

let initialState = {
  date: today,
  fav: [],
  flys: null,
  origin: "Moscow (SVO)",
  destination: "New York City (JFK)",
  cur: null,
  loading: false
};

const flyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-FLY":
      return {
        ...state,
        flys: action.flys,
      };

    case "SET-DATE":
      return {
        ...state,
        date: action.date,
      };

    case "SET-FAV":
      return {
        ...state,
        fav: [...state.fav, action.detail_url]
      };
    case "DEL-FAV":
      return {
        ...state,
        fav: state.fav.filter(function(detail_url) {
          return detail_url != action.detail_url})
      };

    case "SET-CUR":
      return {
        ...state,
        cur: action.cur,
      };
      case "SET-LOAD":
        return {
          ...state,
          loading: action.loading,
        };
    default:
      return state;
  }
};

export const setFlys = (flys) => {
  return {
    type: "SET-FLY",
    flys,
  };
};

export const setDate = (date) => {
  return {
    type: "SET-DATE",
    date,
  };
};

export const setFav = (detail_url) => {
  return {
    type: "SET-FAV",
    detail_url,
  };
};

export const delFav = (detail_url) => {
  return {
    type: "DEL-FAV",
    detail_url,
  };
};

export const setCur = (cur) => {
  return {
    type: "SET-CUR",
    cur,
  };
};

export const setLoad = (loading) => {
  return {
    type: "SET-LOAD",
    loading,
  };
};

export const getFlys = (date) => async (dispatch) => {
  dispatch(setLoad(true));
  let data = await flyAPI.getFlys(date);
  dispatch(setFlys(data));
  let cur = await flyAPI.getCur();
  dispatch(setCur(cur));
  dispatch(setLoad(false));
};

export const updateDate = (date) => (dispatch) => {
   dispatch(setDate(date));
}

export default flyReducer;
