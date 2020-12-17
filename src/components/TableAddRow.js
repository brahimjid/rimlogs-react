import {
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";
import DatePicker from "./DatePicker";
const drs = [
  {
    id: 1,
    name: "sidi",
  },
  {
    id: 2,
    name: "med",
  },
  {
    id: 3,
    name: "cheikh",
  },
];
const TableAddRow = () => {
  return (
    <Grid
      container
      justify="space-around"
      direction="row"
      alignItems="center"
      style={{ padding: 10 }}
      spacing={2}
    >
      <Grid item xs={6} lg={3} md={3}>
        <FormControl fullWidth>
          <InputLabel htmlFor="standard-adornment-number">invoice #</InputLabel>
          <Input
            value={1035}
            //  onChange={handleChange('amount')}
            // startAdornment={<InputAdornment position="start">#</InputAdornment>}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={3}>
        <FormControl fullWidth>
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            value={2000}
            //  onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </Grid>

      <Grid item item xs={12} lg={3}>
        <DatePicker

        // value={moment(selectedRow.createdAt, "MM/DD/yyyy")}
        // onChange={(date) => {
        //   setSelectedRow({
        //     ...selectedRow,
        //     createdAt: date._d,
        //     //createdAt: moment(date._d).format("MM/DD/yyyy"),
        //   });
        // }}
        />
      </Grid>
      <Grid item item xs={12} lg={3}>
        <FormControl className="selectDr">
          <InputLabel>Driver</InputLabel>
          <Select

          // value={age}
          // onChange={handleChange}
          // input={<BootstrapInput />}
          >
            {drs.map((item) => (
              <MenuItem value={item.id}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default TableAddRow;
