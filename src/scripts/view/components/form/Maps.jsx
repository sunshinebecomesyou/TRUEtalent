import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
export default function Checkout() {
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: { xs: 3, md: 6 },
            padding: {
              xs: "40px 24px",
              md: "40px 80px",
            },
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d991.5204297163782!2d106.7776384!3d-6.2529634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11a320b2779%3A0x85f08c33ba7e7417!2sPT%20Tama%20Cipta%20Group!5e0!3m2!1sid!2sid!4v1672762257969!5m2!1sid!2sid"
            width="950"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
