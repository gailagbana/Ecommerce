import * as actionTypes from "../constants/inventoryConstants";
import axios from "axios";

export const getInventories = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_INVENTORIES_REQUEST });
    const { data } = await axios.get("/inventory", {
      data: { inventories: [] },
    });

    dispatch({ type: actionTypes.GET_INVENTORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_INVENTORIES_FAILURE,
      payload: {
        error:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      },
    });
    console.log("error", error.response);
  }
};

export const getInventoryDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_INVENTORY_DETAILS_REQUEST });
    const { data } = await axios.get(`/inventory/${id}`, {
      data: { inventory: {} },
    });

    dispatch({
      type: actionTypes.GET_INVENTORY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_INVENTORY_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const removeInventoryDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_INVENTORY_DETAILS_RESET });
};
