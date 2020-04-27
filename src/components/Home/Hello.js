import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import React from "react";

const Checkbox1 = ({ name, checked = false, onChange, label }) => (
  <FormGroup row>
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          name={name}
          color="primary"
          value={name}
          // disabled={false} // if no vehicle is present disable it
        />
      }
      label={label != undefined ? label : name}
    />
  </FormGroup>
);

export default Checkbox1;
