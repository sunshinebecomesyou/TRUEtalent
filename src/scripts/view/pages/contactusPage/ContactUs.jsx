import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import HeroAboutUs from "../../components/hero/Contact";
import { Container } from "@mui/system";
import Checkout from "../../components/form/Contact";
import Maps from "../../components/form/Maps";

const About = () => {
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
        <HeroAboutUs />
        <Checkout />
        <Maps />
      </Container>
      <Footer />
    </div>
  );
};

export default About;
