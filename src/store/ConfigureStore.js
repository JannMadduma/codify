import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

export default function ConfigureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
