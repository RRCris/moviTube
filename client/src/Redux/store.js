import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

store.subscribe(() => {
  console.log("%c store", "color: green; font-size: 20px;", store.getState());
});

export default store;
