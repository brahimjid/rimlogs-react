import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  media: {
    maxHeight: 60,
    //marginTop: 5,
  },
  // items: {
  //   background: "green",
  //   //  width: "50%",
  //   [theme.breakpoints.down("sm")]: {
  //     float: "right",
  //   },
  // },
}));
const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="logo.png" alt="logo" className={classes.media} />
        </div>

        <Typography variant="h6" className={classes.title}>
          <Button color="inherit" component={RouterLink} to="/">
            RIM LOGISTICS
          </Button>
        </Typography>

        <Button color="inherit" component={RouterLink} to="/invoices">
          Invoices
        </Button>
        <Button color="inherit" component={RouterLink} to="/fuels">
          Fuels
        </Button>
        <Button color="inherit" component={RouterLink} to="/">
          Paycheck
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
