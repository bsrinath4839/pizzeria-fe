import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { initialState } from "./initialStates";

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk),
);

export default store;