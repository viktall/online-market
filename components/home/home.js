"use client";
import Searchfield from "./searchfield";
import Cards from "./cards";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        p: 1,
      }}
    >
      <Searchfield />
      <Cards />
    </Box>
  );
};

export default HomePage;
