import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Cards from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/system";

const Items = () => {
  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    gap: "24px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "24px",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5rem",
        padding: {
          xs: "0 24px",
          md: "0 80px",
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "rgb(3,152,158)",
          my: 3,
          padding: "12px",
        }}
      >
        Drive transformation through people.
      </Typography>

      <GuidesBox>
        <GuideBox>
          <Cards sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={process.env.PUBLIC_URL + "/images/search.png"}
              alt="Deep Specialization
              "
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Deep Specialization
              </Typography>
            </CardContent>
          </Cards>

          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </GuideBox>
        <GuideBox>
          <Cards sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={process.env.PUBLIC_URL + "/images/puzzle.png"}
              alt="Hybrid Search Solutions"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Hybrid Search Solutions
              </Typography>
            </CardContent>
          </Cards>

          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </GuideBox>
        <GuideBox>
          <Cards sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={process.env.PUBLIC_URL + "/images/recruitment.png"}
              alt="Recruiters"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Recruiters Team
              </Typography>
            </CardContent>
          </Cards>

          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </GuideBox>
      </GuidesBox>
    </Container>
  );
};

export default Items;
