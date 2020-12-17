import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Fuels from "./Pages/Fuels";
import Invoices from "./Pages/Invoices";
export const HomeRoute = "/";
export const FuelsRoute = "/fuels";
export const InvoicesRoute = "/invoices";
class Routing extends React.Component {
  render() {
    return (
      <Fragment>
        <Route path={HomeRoute} exact component={Home} />
        <Route path={FuelsRoute} exact component={Fuels} />
        <Route path={InvoicesRoute} exact component={Invoices} />
      </Fragment>
    );
  }
}
export default withRouter(Routing);
