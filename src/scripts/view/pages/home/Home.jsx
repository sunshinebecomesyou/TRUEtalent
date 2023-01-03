import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HeroHome from "../../components/hero/heroHome";
import Note from "../../components/hero/note";
import Card from "../../components/card/Items";
import { Container } from "@mui/system";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Note />
      <Container
        component="main"
        sx={{
          "&.MuiContainer-root": {
            padding: "0",
          },
          maxWidth: {
            xs: "100%",
            lg: "100%",
            xl: "100vw",
          },
        }}
      >
        <HeroHome />
        <Card/>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
