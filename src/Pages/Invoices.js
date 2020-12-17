import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import Filter from "../components/Filter";
import Table from "../components/Table";

export default function Invoices() {
  return (
    <Fragment>
      <Filter />
      <Typography align="center" variant="h5" component="h5" gutterBottom>
        All Invoice
      </Typography>
      <Table />
    </Fragment>
  );
}
