import { actionTypes } from "../actions/ClientActions";

const clientsState = [];
let index;

export default function ClientsReducer(state = clientsState, action) {
  switch (action.type) {
    // SET
    case actionTypes.SET_CLIENTSS:
      return action.clients;
    // ADD
    case actionTypes.ADD_CLIENTS:
      return [
        { ...action.clientDetails, idNo: action.clientDetails.id },
        ...state,
      ];
    // EDIT
    case actionTypes.EDIT_CLIENTS:
      index = state.findIndex((mod) => mod.idNo === action.clientDetails.idNo);

      return [
        ...state.slice(0, index), // everything before current item
        action.clientDetails,
        ...state.slice(index + 1), // everything after current item
      ];
    // DELETE
    case actionTypes.DELETE_CLIENTS:
      index = state.findIndex((mod) => mod.idNo === action.clientDetails.idNo);

      return [
        ...state.slice(0, index), // everything before current item
        ...state.slice(index + 1), // everything after current item
      ];
    default:
      return state;
  }
}
