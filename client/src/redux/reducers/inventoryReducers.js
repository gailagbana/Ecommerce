import * as actionTypes from "../constants/inventoryConstants";

export const getInventoriesReducer = (
  state = { inventories: { payload: [], error: null } },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_INVENTORIES_REQUEST:
      return {
        loading: true,
        inventories: [],
      };
    case actionTypes.GET_INVENTORIES_SUCCESS:
      return {
        loading: false,
        inventories: action.payload,
      };
    case actionTypes.GET_INVENTORIES_FAILURE:
      return {
        loading: false,
        inventories: action.payload,
      };
    default:
      return state;
  }
};

export const getInventoryDetailsReducer = (
  state = { inventory: { payload: {}, error: null } },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_INVENTORY_DETAILS_REQUEST:
      return {
        loading: true,
        inventory: {},
      };
    case actionTypes.GET_INVENTORY_DETAILS_SUCCESS: {
      return {
        loading: false,
        inventory: action.payload,
      };
    }
    case actionTypes.GET_INVENTORY_DETAILS_FAILURE:
      return {
        loading: false,
        inventory: action.payload,
      };
    case actionTypes.GET_INVENTORY_DETAILS_RESET:
      return {
        inventory: {},
      };
    default:
      return state;
  }
};
