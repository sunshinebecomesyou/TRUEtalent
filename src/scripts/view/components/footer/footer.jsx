import React from "react";
import { styled } from "@mui/material";
import { Box, Container } from "@mui/system";
import { TbMapPin } from "react-icons/tb";
import FooterLink from "./footerLink";
import { Typography } from "@mui/material";
// import NavbarBrand from "../navbar/navbarBrand";
import SocialMediaFooter from "./socialMediaFooter";

export default function Footer() {
  const TextWithIcon = styled("div")(() => ({
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: "22px",
    color: "#000000",
  }));

  const FooterTextLink = styled("p")(() => ({
    fontWeight: 400,
    fontSize: "14px",
  }));

  return (
    <Container
      component="footer"
      sx={{
        maxWidth: {
          xs: "100%",
          lg: "100%",
          xl: "1200px",
        },
        padding: {
          xs: "32px 24px",
          md: "32px 80px",
        },
        background: "linear-gradient(145deg, rgba(175,229,238,1) 0%, rgba(174,228,237,1) 100%)",
        color: "#000000",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "flex-start",
        gap: {
          xs: "32px",
          md: "24px",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "40%",
          },
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
         <Typography
        sx={{
          marginBottom: "12px",
          fontSize: "18px",
          fontWeight: 700,
          fontFamily: "Montserrat",
          letterSpacing: "1px",
        }}
      >
        TRUEtalent
      </Typography>
        {/* <NavbarBrand /> */}
        {/* <FooterTextLink
          sx={{
            fontFamily: "Montserrat",
            fontSize: "14px",
            color: "#000000",
            lineHeight: "24px",
          }}
        >
          Companiesfact
        </FooterTextLink> */}
        <TextWithIcon
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <TbMapPin />
          <FooterTextLink>
            BSD Office 99, Gedung EduCenter lt.2 Unit 24055 Sekolah Foresta No.
            8, BSD City, Kel. Lengkong Kulon Kec. Pagedangan – Kab Tangerang,
            Banten 15331 Indonesia
          </FooterTextLink>
        </TextWithIcon>
        <TextWithIcon
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* <TbBuildingCommunity /> */}
          <FooterTextLink>
          Companiesfact
          </FooterTextLink>
        </TextWithIcon>

        {/* <TextWithIcon
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FaMapMarkerAlt />
          <FooterTextLink>Jam 08.00 - 17.00</FooterTextLink>
        </TextWithIcon> */}
      </Box>
      <FooterLink />
      <SocialMediaFooter />
    </Container>
  );
}
