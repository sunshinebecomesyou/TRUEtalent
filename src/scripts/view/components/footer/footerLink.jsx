import React from "react";
import { Link } from "react-router-dom";
import navbarLinkItem from "../../../data/footerLinkItem";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function FooterLink() {
  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "12px",
          fontSize: "18px",
          fontWeight: 700,
          fontFamily: "Montserrat",
          letterSpacing: "1px",
        }}
      >
        Link
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: "10px 30px",
          gridTemplateColumns: " auto auto auto",
          padding: "10px",
        }}
      >
        {navbarLinkItem.map((navigation, index) => {
          return (
            <Link to={navigation.to} key={index} className="footer-link">
              {navigation.link}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
