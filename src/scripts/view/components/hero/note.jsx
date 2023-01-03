import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function HeroHome() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(8),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
      gap: theme.spacing(4),
    },
  }));

  return (
    <Container
      sx={{
        minHeight: "400px",
        width: "100%",
        backgroundImage: "url(./images/BG-Quotes.jpg)",
        backgroundSize: "cover",
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
            width: "100vw",
            flex: "1",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Montserrat",
              lineHeight: "none",
              fontWeight: "bold",
              fontSize: {
                xs: "14px",
                md: "68px",
              },
              color: "#ffffff",
              my: 2,
              marginBottom: "32px",
            }}
          >
            “We help our clients not just change the world”
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
        ></Box>
      </CustomBox>
    </Container>
  );
}
