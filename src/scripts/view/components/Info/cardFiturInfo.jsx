import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

export default function CardFiturInfo({ icon, content }) {
  return (
    <Box
      sx={{
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: {
          xs: "center",
          sm: "space-between",
        },
        border: "2px solid rgb(3,152,158)",
        width: "100%",
        height: "max-content",
        borderRadius: "100px",
        gap: "12px",
      }}
    >
      <Box
        sx={{
          border: "2px solid rgb(3,152,158)",
          padding: "4px",
          borderRadius: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          fontFamily: "Montserrat",
          width: "100%",
          fontSize: "14px",
          fontWeight: "500",
          color: "rgb(3,152,158)",
          textAlign: "left",
        }}
      >
        {content}
      </Typography>
    </Box>
  );
}

CardFiturInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
