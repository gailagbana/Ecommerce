import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//import { cartReducer } from "./reducers/cartReducers";
import {
  getInventoriesReducer,
  getInventoryDetailsReducer,
} from "./reducers/inventoryReducers";

const reducers = combineReducers({
  // cart: cartReducer,
  getInventories: getInventoriesReducer,
  getInventoryDetails: getInventoryDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
