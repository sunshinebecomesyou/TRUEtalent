import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
// import CustomButton from "../customButton/customButton";

export default function HeroHome() {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(8),
    marginTop: theme.spacing(3),
    background: "transparent",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
      gap: theme.spacing(4),
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontFamily: "Montserrat",
    fontSize: "40px",
    width: "100%",
    color: "rgb(3,152,158)",
    lineHeight: "52px",
    fontWeight: "800",
    margin: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  }));

  return (
    <Container
      sx={{
        minHeight: "400px",
        background:
          "linear-gradient(145deg, rgba(3,152,158,1) 0%, rgba(174,228,237,1) 100%)",
        marginBottom: "20px",
        padding: {
          xs: "0 24px",
          md: "0 80px",
        },
        fontFamily: "Montserrat",
      }}
    >
      <CustomBox>
        <Box
          sx={{
            width: "100%",
            flex: "1",
          }}
        >
          <Title variant="h1" sx={{ color: "#ffffff" }}>
            Strengths of our Services
          </Title>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Montserrat",
              fontSize: {
                xs: "14px",
                md: "16px",
              },
              color: "#ffffff",
              my: 2,
              marginBottom: "32px",
            }}
          >
            Our services provides talent acquisition from C-suites to all level
            positions from all industries and functions. We have tenured
            recruiters, supported by a reliable team that brings in-depth
            specialization, knowledge, cross-border market insight, and talent
            that other agencies and internal teams find difficult to match.
          </Typography>
        </Box>

        <Box
          sx={{
            width: {
              sx: "100%",
              lg: "calc(100% / 3)",
            },
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "./images/sean-pollock-PhYq704ffdA-unsplash.jpg"
            }
            alt="heroImg"
            style={{
              width: "100%",
              marginBottom: "2rem",
              marginTop: "4rem",
              borderRadius: "20px",
            }}
          />
        </Box>
      </CustomBox>
    </Container>
  );
}
