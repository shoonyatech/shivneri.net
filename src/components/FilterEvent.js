import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import React from "react";

export default function FilterEvent(props) {
  const { name, change, checked } = props;

  return (
    <FormGroup row>
      {console.log(checked)}
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={change}
            name={name}
            color="primary"
            value={name}
            // disabled={false} // if no vehicle is present disable it
          />
        }
        label={name}
      />
    </FormGroup>
  );
}
