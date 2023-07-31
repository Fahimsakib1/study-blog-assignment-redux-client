import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";
import logger from "redux-logger";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));



// const store = createStore(rootReducer, composeWithDevTools());

export default store;
