import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers/index";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";

const middlewareEnhancer = applyMiddleware(ReduxThunk);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);


const store = createStore(reducers,
     undefined,
     composedEnhancers
      );

export default store;