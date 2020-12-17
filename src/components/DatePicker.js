import React from "react";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

function DatePicker(props) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        margin="dense"
        id="date-picker-dialog2"
        label="To"
        fullWidth
        format="MM/DD/yyyy"
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;
