import { GET_INVOICES, FILTER_INVOICES, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_INVOICES:
      return {
        ...state,
        invoices: action.payload,
        loading: false,
      };
    case FILTER_INVOICES:
      return {
        ...state,
        filtredInvoices: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
