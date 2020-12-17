import React, { useState } from "react";
import {
  // Button,
  Container,
  //FormControl,
  Grid,
  // InputLabel,
  // MenuItem,
  // Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import axios from "../const/api";
//import axios from "../const/api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    marginTop: 15,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Filter = () => {
  const classes = useStyles();
  const [date1, setdate1] = useState(moment());
  const [date2, setdate2] = useState(moment());
  const filterByDate = (date) => {
    setdate2(date);
    axios
      .get("/invoices", {
        params: {
          from: moment(date1).format("yyyy-MM-DD"),
          to: moment(date2).format("yyyy-MM-DD"),
        },
      })
      .then((data) => {
        console.log(data.data);
      });
  };

  return (
    <Container style={{ marginTop: 25 }}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Grid
          container
          justify="center"
          direction="row"
          alignItems="center"
          className={classes.root}
          spacing={8}
        >
          <Grid
            xs={12}
            sm={12}
            item
            lg={5}
            md={5}
            // style={{ background: "green" }}
          >
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="From"
              fullWidth
              format="MM/DD/yyyy"
              value={date1}
              onChange={(date) => setdate1(date)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
          <Grid
            item
            //style={{ background: "red" }}
            sm={12}
            xs={12}
            lg={5}
            md={5}
          >
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog2"
              label="To"
              fullWidth
              format="MM/DD/yyyy"
              value={date2}
              onChange={filterByDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>

          {/* <Grid xs={6} item lg={2}>
            <Button
              display="block !important"
              variant="contained"
              size="large"
              color="primary"
              style={{ marginTop: 17 }}
            >
              Search
            </Button>
          </Grid> */}
        </Grid>
      </MuiPickersUtilsProvider>
    </Container>
  );
};
export default Filter;
