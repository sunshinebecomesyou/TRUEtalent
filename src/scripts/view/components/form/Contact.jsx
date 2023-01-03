import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import getStepContent from "./GetStepContent";
import { Box } from "@mui/material";
import FormButton from "./FormButton";
import CONFIG from "../../../global/config";
import HeadingSectionText from "../headingSectionText/headingSectionText";

const steps = ["Biodata"];

const theme = createTheme();

export default function Checkout() {
  const [orderData, setOrderData] = React.useState({
    id: +new Date(),
    name: "",
    phoneNumber: "",
    address: "",
    email: "",
    cardNumber: "",
    trashQty: 1,
    trashType: "",
    price: 0,
    total: 0,
  });

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function handleOrderSubmit(e) {
    handleNext(e);
    localStorage.setItem(CONFIG.DATAORDER, JSON.stringify(orderData));
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          width: {
            xs: "100%",
            md: "80%",
          },
          margin: "5rem auto",
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 6 },
            padding: {
              xs: "40px 24px",
              md: "40px 80px",
            },
          }}
        >
          <HeadingSectionText headingText="Contact" />
          <Stepper
            activeStep={activeStep}
            sx={{
              pt: 3,
              pb: 5,
            }}
          >
            {steps.map((label) => (
              <Step
                key={label}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "#4B6F49",
                  },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#4B6F49",
                  },
                }}
              >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                a: {
                  padding: "12px 24px",
                  minHeight: "40px",
                  minWidth: "120px",
                  backgroundColor: "#4B6F49",
                  marginTop: "24px",
                  borderRadius: "12px",
                },
              }}
            >
              <Typography variant="h5" gutterBottom>
                Thank you for what you sent!
              </Typography>
              <Typography variant="subtitle1">
                your submit number is #{orderData.id}. Wait, our team will
                immediately check and respond.
              </Typography>
              {/* <Link
                to={`invoice/${orderData.id}`}
                className="invoice_detail_btn"
              >
                Lihat Detail
              </Link> */}
            </Box>
          ) : (
            <>
              {getStepContent(orderData, setOrderData, activeStep)}
              <FormButton
                steps={steps}
                activeStep={activeStep}
                handleBack={handleBack}
                handleNext={handleNext}
                handleOrderSubmit={handleOrderSubmit}
              />
            </>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
