// import * as actionTypes from "../constants/cartConstants";
// import axios from "axios";

// export const addToCart = (id, quantity) => async (dispatch, getState) => {
//   const { data } = await axios.put(`/cart/${id}`, {
//     data: { cartInventory: [] },
//   });
//   console.log(data);

//   dispatch({
//     type: actionTypes.ADD_TO_CART,
//     payload: { data },
//   });

//   localStorage.setInventory(
//     "cart",
//     JSON.stringify(getState().cart.cartInventories)
//   );
// };

// export const getCart = (id) => async (dispatch, getState) => {
//   const { data } = await axios.get(`/cart/${id}`, {
//     data: { payload: { cartInventory: [] }, error: null },
//   });

//   dispatch({
//     type: actionTypes.GET_CART,
//     payload: { data },
//   });
// };

// export const removeFromCart = (id) => async (dispatch, getState) => {
//   dispatch({
//     type: actionTypes.REMOVE_FROM_CART,
//     payload: id,
//   });
//   localStorage.setInventory(
//     "cart",
//     JSON.stringify(getState().cart.cartInventories)
//   );
// };
