import React, { useReducer } from "react";
import axios from "../../const/api";
import InvoicesContext from "./InvoicesContext";
import InvoiceReducer from "./invoiceReducer";
import moment from "moment";
import { GET_INVOICES, FILTER_INVOICES, SET_LOADING } from "../types";

const InvoiceState = (props) => {
  const initialState = {
    invoices: [],
    props: [],
    filtredInvoices: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(InvoiceReducer, initialState);

  // get invoices

  const getInvoices = () => {
    setLoading();
    axios
      .get("/invoices")
      .then((res) => {
        dispatch({
          type: GET_INVOICES,
          payload: res.data.invoices,
        });
      })
      .catch((err) => console.log(err));
  };

  // filter invoices

  const filterInvoices = (from, to) => {
    axios
      .get("/invoices", {
        params: {
          from: moment(from).format("yyyy-MM-DD"),
          to: moment(to).format("yyyy-MM-DD"),
        },
      })
      .then((res) => {
        dispatch({ type: FILTER_INVOICES, payload: res.data.invoices });
      });
  };

  // set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <InvoicesContext.Provider
      value={{
        invoices: state.invoices,
        filtredInvoices: state.filtredInvoices,
        loading: state.loading,
        getInvoices,
      }}
    >
      {props.children}
    </InvoicesContext.Provider>
  );
};
export default InvoiceState;
