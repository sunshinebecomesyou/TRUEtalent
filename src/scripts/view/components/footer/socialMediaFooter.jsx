import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import {
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandYoutube,
  TbBrandTelegram,
  TbBrandWhatsapp,
} from "react-icons/tb";

export default function SocialMediaFooter() {
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
        Temukan Kami
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Link to="/" className="media-icon">
          <TbBrandLinkedin size={24} />
        </Link>
        <Link to="/" className="media-icon">
          <TbBrandInstagram size={24} />
        </Link>
        <Link to="/" className="media-icon">
          <TbBrandYoutube size={24} />
        </Link>
        <Link to="/" className="media-icon">
          <TbBrandTelegram size={24} />
        </Link>
        <Link to="/" className="media-icon">
          <TbBrandWhatsapp size={24} />
        </Link>
      </Box>
    </Box>
  );
}
