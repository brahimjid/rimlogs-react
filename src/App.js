import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import InvoiceState from "./context/invoices/invoiceState";
import Routing from "./Routing";
function App() {
  return (
    <InvoiceState>
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </InvoiceState>
  );
}

export default App;
