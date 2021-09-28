// import * as actionTypes from "../constants/cartConstants";

// export const cartReducer = (
//   state = {
//     cartInventory: {
//       payload: { cartInventory: [] },
//       error: null,
//     },
//   },
//   action
// ) => {
//   switch (action.types) {
//     case actionTypes.ADD_TO_CART:
//       const inventory = action.payload;

//       const ifInventoryExists = state.cartInventory.find(
//         (x) => x.inventoryId === inventory.inventoryId
//       );

//       if (ifInventoryExists) {
//         return {
//           ...state,
//           cartInventory: state.cartInventory.map((x) =>
//             x.inventory === ifInventoryExists.inventoryId ? inventory : x
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartInventory: [...state.cartInventory, inventory],
//         };
//       }
//     case actionTypes.GET_CART:
//       return {
//         ...state,
//         cartInventory: {},
//       };
//     case actionTypes.REMOVE_FROM_CART:
//       return {
//         ...state,
//         cartInventory: state.cartInventory.filter(
//           (x) => x.inventory !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };
