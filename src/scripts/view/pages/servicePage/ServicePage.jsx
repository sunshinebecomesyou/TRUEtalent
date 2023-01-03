// import Splash from '../../components/splash/Splash'
import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import HeroRecycle from "../../components/hero/Services";
import RecycleWasteInfo from "../../components/halfImg/recycleWaysInfo";
import { Container } from "@mui/system";

const DaurUlang = () => {
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
        <HeroRecycle />
        <RecycleWasteInfo />
      </Container>
      <Footer />
    </div>
  );
};

export default DaurUlang;
