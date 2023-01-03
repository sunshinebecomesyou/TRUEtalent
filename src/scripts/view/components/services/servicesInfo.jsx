import React from "react";
import { Box, Container } from "@mui/system";
import HeadingSectionText from "../headingSectionText/headingSectionText";
import CardInfo from "../Info/cardServicesInfo";

const servicesInfo = () => {
  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5rem auto",
        minHeight: "400px",
        "&.MuiContainer-root": {
          padding: {
            xs: "40px 24px",
            md: "40px 80px",
          },
        },
      }}
    >
      <HeadingSectionText
        headingText="The Team."
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <CardInfo
          number="1."
          title="Director - Business Development "
          content="With over 20 years of working experience in Business Development and Human Capital area, covering various functions such as business development, Management, recruitment, operations, new business set up, and joint Venture operations."
        />
        <CardInfo
          number="2."
          title="Consultant 1 - Several Recruitment Firms"
          content="Extensive 20 years of working experience in several recruitment firms, performing a full cycle of business development and successful placement of high caliber talents of different functions in directorship and senior manager levels. Building a track record as a trusted and reliable recruiter to satisfied clientele in various industries such as Manufacturing, Pharmaceutical, Logistics, Hospitality and Consumer Goods."
        />
        <CardInfo
          number="3."
          title="Consultant 2 - Recruitment Industry"
          content="A professional Recruiter with over 8 years experiences in recruitment industry. Has a records of placing General Managers to Directors as key placement position ranging from various industry from Manufacturing, Technology Solutions, Agriculture, Mining, Construction and has a strong networking in Property & Real Estate Development industry."
        />
        <CardInfo
          number="4."
          title="Consultant 3 - Recruitment Firm"
          content="An experience Recruiter with more than 10 years of experience in Recruitment Firm. Specialized in handling Sales and Marketing positions from Manager to C levels especially in Consumer Goods and Technology industry."
        />
      </Box>
    </Container>
  );
};

export default servicesInfo;
