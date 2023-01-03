import React from "react";
import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
import InputField from "./InputField";
import PropTypes from "prop-types";

export default function BiodataForm({ orderData, setOrderData }) {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={3}
        sx={{
          padding: "32px 40px",
        }}
        component="form"
      >
     
      </Grid>
    </React.Fragment>
  );
}

BiodataForm.propTypes = {
  orderData: PropTypes.object.isRequired,
  setOrderData: PropTypes.func.isRequired,
};
