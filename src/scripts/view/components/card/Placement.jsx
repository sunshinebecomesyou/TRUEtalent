import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Cards from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const FlexBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "20px",
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
          color: "#3778C6",
          textTransform: "uppercase",
          my: 3,
          padding: "12px",
        }}
      >
        <span
          style={{
            color: "#365E7D",
          }}
        >
          successful
        </span>{" "}
        placements
      </Typography>

      <GuidesBox>
        <GuideBox>
          <Cards sx={{ maxWidth: 345 }}>
            <FlexBox>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Chief of Staff
                  <br /> Brand Manager <br /> HR Operation Lead
                </Typography>
              </CardContent>
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  backgroundImage: "url(./images/profile.png)",
                  backgroundSize: "cover",
                }}
              ></Box>
            </FlexBox>
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
            <FlexBox>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Public Relation <br /> Manager Business <br /> Analyst Product
                  Manager
                </Typography>
              </CardContent>
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  backgroundImage: "url(./images/profile2.png)",
                  backgroundSize: "cover",
                }}
              ></Box>
              {/* <CardMedia
              component="img"
              height="140"
              image={process.env.PUBLIC_URL + "/images/profile.png"}
              alt="Deep Specialization
              "
            /> */}
            </FlexBox>
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
            <FlexBox>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Digital Product Manager <br /> Legal Counsel <br /> Project
                  Manager
                </Typography>
              </CardContent>
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  backgroundImage: "url(./images/tester.png)",
                  backgroundSize: "cover",
                }}
              ></Box>
              {/* <CardMedia
              component="img"
              height="140"
              image={process.env.PUBLIC_URL + "/images/profile.png"}
              alt="Deep Specialization
              "
            /> */}
            </FlexBox>
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
