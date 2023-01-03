import React from "react";
import { Box } from "@mui/system";

const navbarBrand = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <img
        className="logo-image"
        src={process.env.PUBLIC_URL + "/svg/tamacipta.png"}
        alt="TRUEtalent"
      />
      <h1 className="logo-name">TRUEtalent</h1>
    </Box>
  );
};

export default navbarBrand;
