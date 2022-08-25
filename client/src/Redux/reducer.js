import { SET_PROFILE, SAVE_CATEGORIES, SAVE_MOVIES } from "./actionsTypes";

const stateDefault = {
  profile: {},
  categories: [],
  movies: [],
};
function reducer(state = stateDefault, action) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SAVE_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
