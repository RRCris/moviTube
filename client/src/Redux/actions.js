import { SET_PROFILE, SAVE_CATEGORIES, SAVE_MOVIES } from "./actionsTypes";

export function save_categories(payload) {
  return {
    type: SAVE_CATEGORIES,
    payload,
  };
}

export function save_movies(payload) {
  return {
    type: SAVE_MOVIES,
    payload,
  };
}

export function set_profile(payload) {
  return {
    type: SET_PROFILE,
    payload,
  };
}
