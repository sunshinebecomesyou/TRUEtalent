import React from "react";
import Footer from "../../components/footer/footer";
import HeroServices from "../../components/hero/Client";
import Place from "../../components/card/Placement";
import Navbar from "../../components/navbar/navbar";
import { Container } from "@mui/system";

export default function Services() {
  return (
    <div className="container">
      <Navbar />
      <Container
        component="main"
        sx={{
          "&.MuiContainer-root": {
            padding: "0",
          },
          maxWidth: {
            xs: "100%",
            lg: "100%",
            xl: "1200px",
          },
        }}
      >
        <HeroServices />
        <Place/>
      </Container>
      <Footer />
    </div>
  );
}
