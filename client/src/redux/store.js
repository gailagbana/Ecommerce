import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  getInventoriesReducer,
  getInventoryDetailsReducer,
} from "./reducers/inventoryReducers";

const reducers = combineReducers({
  getInventories: getInventoriesReducer,
  getInventoryDetails: getInventoryDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
