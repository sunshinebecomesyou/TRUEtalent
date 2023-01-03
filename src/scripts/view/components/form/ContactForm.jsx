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
        {/* <Grid item xs={12}>
          <InputField
            type="text"
            disabled={false}
            id="name"
            label="First Name"
            value={orderData.name}
            handle={(event) =>
              setOrderData({ ...orderData, name: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            type="text"
            disabled={false}
            id="name"
            label="Last Name"
            value={orderData.name}
            handle={(event) =>
              setOrderData({ ...orderData, name: event.target.value })
            }
          />
        </Grid> */}
            <Grid item xs={12} sm={6}>
          <InputField
            type="email"
            disabled={false}
            id="email"
            label="First Name"
            value={orderData.email}
            handle={(event) =>
              setOrderData({ ...orderData, email: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            type="text"
            disabled={false}
            id="phoneNumber"
            label="Last Name"
            value={orderData.phoneNumber}
            handle={(event) =>
              setOrderData({ ...orderData, phoneNumber: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            type="email"
            disabled={false}
            id="email"
            label="Email Address"
            value={orderData.email}
            handle={(event) =>
              setOrderData({ ...orderData, email: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            type="text"
            disabled={false}
            id="phoneNumber"
            label="Phone Number"
            value={orderData.phoneNumber}
            handle={(event) =>
              setOrderData({ ...orderData, phoneNumber: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            type="email"
            disabled={false}
            id="email"
            label="Company"
            value={orderData.email}
            handle={(event) =>
              setOrderData({ ...orderData, email: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            type="text"
            disabled={false}
            id="phoneNumber"
            label="Country"
            value={orderData.phoneNumber}
            handle={(event) =>
              setOrderData({ ...orderData, phoneNumber: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            type="email"
            disabled={false}
            id="cardNumber"
            label="How Can We Help You?"
            value={orderData.cardNumber}
            handle={(event) =>
              setOrderData({ ...orderData, cardNumber: event.target.value })
            }
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

BiodataForm.propTypes = {
  orderData: PropTypes.object.isRequired,
  setOrderData: PropTypes.func.isRequired,
};
