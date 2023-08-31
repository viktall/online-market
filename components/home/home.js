"use client";
import Searchfield from "./searchfield";
import Cards from "./cards";
import { Box } from "@mui/material";
import Footer from "./footer";

const HomePage = () => {
  return (
    <Box>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 1,
          py: 2,
        }}
      >
        <Searchfield />
        <Cards />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
