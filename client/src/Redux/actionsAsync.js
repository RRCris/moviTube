import axios from "axios";
import { SAVE_CATEGORIES, SAVE_MOVIES, SET_PROFILE } from "./actionsTypes";

export function get_categories(dispatch) {
  axios
    .get("http://localhost:1212/categories")
    .then((res) => {
      dispatch({
        type: SAVE_CATEGORIES,
        payload: res.data.categories,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function get_movies(dispatch, id) {
  axios
    .get("http://localhost:1212/categories/" + id)
    .then((res) => {
      dispatch({
        type: SAVE_MOVIES,
        payload: res.data.movies,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function confirm_login(dispatch, email, password) {
  let p = new Promise((resolve, reject) => {
    axios
      .post("http://localhost:1212/login", {
        email,
        password,
      })
      .then((res) => {
        dispatch({
          type: SET_PROFILE,
          payload: res.data.user,
        });
        resolve(res.data.message);
      })
      .catch((err) => {
        resolve(err.response.data.message || "Error");
      });
  });
  return p;
}
