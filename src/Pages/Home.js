import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import Filter from "../components/Filter";
import Table from "../components/Table";

function Home() {
  return (
    <Fragment>
      <Filter />
      <Typography
        align="center"
        style={{ marginTop: 50 }}
        variant="h5"
        component="h5"
        gutterBottom
      >
        Today Invoices
      </Typography>
      <Table />
    </Fragment>
  );
}

export default Home;
