import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import HeroWasteBank from "../../components/hero/heroAbout";
import Article from "../../components/article/Article";
import dataVisiMisi from "../../../data/dataVisiMisi";
import ServicesInfo from "../../components/services/servicesInfo";
import RecycleWasteInfo from "../../components/halfImg/About";
import { Container } from "@mui/system";

export default function AboutPage() {
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
        <HeroWasteBank />
        <RecycleWasteInfo />
        <Article dataInfo={dataVisiMisi} textHeading="Vision & Mission" />
        <ServicesInfo />
      </Container>
      <Footer />
    </div>
  );
}
