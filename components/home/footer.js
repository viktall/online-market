"use client";
import { ArrowUpward } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.light",
        pb: 1,
        mt: "auto",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 3, md: 0 },
          py: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box>
            <Link href="/cart">Cart</Link>
          </Box>
          <Box>
            <Link href="/favorite">favorite</Link>
          </Box>
        </Box>
        <Box
          onClick={() => window.scrollTo(0, 0)}
          sx={{
            bgcolor: "#fff",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: "rgba(0, 0, 0, 0.08) 0px 5px 20px",
            "&:hover": {
              transform: "translateY(-1px)",
            },
          }}
        >
          <IconButton>
            <ArrowUpward sx={{ color: "primary.main" }} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", color: "#dcdcdc", fontSize:14 }}>
        &copy; 2023, created by vhillz.codes
      </Box>
    </Box>
  );
};

export default Footer;
