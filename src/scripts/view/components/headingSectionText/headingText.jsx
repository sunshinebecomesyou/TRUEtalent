import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function HeadingText({ headingText }) {
  return (
    <Typography
      variant="h3"
      sx={{
        fontFamily: "Montserrat",
        fontSize: {
          xs: "28px",
          md: "36px",
        },
        fontWeight: "700",
        color: "#2B699E",
        my: 1,
        padding: "12px",
        // borderTop: "3px solid rgb(3,152,158)",
        textAlign: "center",
      }}
    >
      {headingText}
    </Typography>
  );
}

HeadingText.propTypes = {
  headingText: PropTypes.string.isRequired,
};
