import React, { Fragment, useState, useEffect, useContext } from "react";
import { Container, Grid, IconButton, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MUIDataTable from "mui-datatables";
import InvoicesContext from "../context/invoices/InvoicesContext";
import axios from "../const/api";
import TableAddRow from "./TableAddRow";

// import moment from "moment";

const columns = [
  {
    label: "#invoices",
    name: "number",
    options: { filter: false },
  },

  {
    label: "Amount",
    name: "amount",
    options: {
      filter: false,
      searchable: false,
    },
    // render: (rowData) => <span>{formatter.format(rowData.amount)}</span>,
  },
  {
    label: "Date",
    name: "createdAt",
    filter: false,
    options: {
      filter: false,
      searchable: false,
    },
  },
  { label: "Driver", name: "driver.full_name" },
];

const options = {
  filterType: "checkbox",
  enableNestedDataAccess: ".",
  // print: false,
  viewColumns: false,
  rowsPerPage: 5,
  responsive: "standard",
  customToolbar: () => {
    return (
      <Fragment>
        <Tooltip title={"Add Invoice"}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Fragment>
    );
  },
};

export default function Table() {
  const invoicesContext = useContext(InvoicesContext);
  const { invoices, getInvoices } = invoicesContext;
  useEffect(() => {
    getInvoices();
  }, []);

  return (
    <Fragment>
      <Container>
        <Grid
          style={{ flexGrow: 1, marginTop: 25 }}
          container
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <MUIDataTable data={invoices} columns={columns} options={options} />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
