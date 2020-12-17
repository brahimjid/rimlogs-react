import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "../const/api";
import {
  Container,
  IconButton,
  TablePagination,
  TextField,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import { green } from "@material-ui/core/colors";
import DatePicker from "./DatePicker";
import moment from "moment";
import TableAddRow from "./TableAddRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  useEffect(() => {
    axios
      .get("/invoices")
      .then((res) => {
        // console.log(res.data.success);
        if (res.data.success) {
          setInvoices(res.data.invoices);
        }
      })

      .catch((err) => console.log(err));
  }, []);

  const [invoices, setInvoices] = useState([]);
  const [iseditable, setIsEditable] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const editRow = (row) => {
    if (row !== null) {
      setIsEditable(true);
      // console.log(row);
      setSelectedRow(row);
    }
  };
  const editRowHandler = () => {
    const body = {
      ...selectedRow,
      amount: Number(selectedRow.amount.replace(/[^0-9.-]+/g, "")),
    };
    axios.put("/invoices/" + selectedRow._id, body).then((res) => {
      console.log(res.data.data.amount);
    });
  };

  return (
    <Container>
      <Paper elevation={3}>
        <TableAddRow />
      </Paper>

      <TableContainer component={Paper} elevation={2}>
        <Table className={classes.table} aria-label="Invoices table">
          <TableHead>
            <TableRow>
              <TableCell>#invoices</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {iseditable && (
              <TableRow>
                <TableCell>
                  <TextField
                    onChange={(e) => {
                      setSelectedRow({
                        ...selectedRow,
                        number: e.target.value,
                      });
                    }}
                    label="#Num"
                    value={selectedRow.number}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    onChange={(e) => {
                      setSelectedRow({
                        ...selectedRow,
                        amount: e.target.value,
                      });
                    }}
                    label="Amount"
                    value={selectedRow.amount}
                  />
                </TableCell>

                <TableCell>
                  <DatePicker
                    style={{ marginBottom: 5 }}
                    value={moment(selectedRow.createdAt, "MM/DD/yyyy")}
                    onChange={(date) => {
                      setSelectedRow({
                        ...selectedRow,
                        createdAt: date._d,
                        //createdAt: moment(date._d).format("MM/DD/yyyy"),
                      });
                    }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={editRowHandler} size="medium">
                    <CheckIcon
                      fontSize="large"
                      style={{ color: green[500], marginTop: 10 }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => setIsEditable(false)}
                    size="medium"
                  >
                    <CancelIcon fontSize="inherit" style={{ marginTop: 10 }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            )}

            {(rowsPerPage > 0
              ? invoices.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : invoices
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>

                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>{row.driver.full_name}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      setIsEditable(true);
                      editRow(row);
                    }}
                  >
                    <EditIcon style={{ color: green[500] }} />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon color={"action"} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={invoices.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Container>
  );
}
