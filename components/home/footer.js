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
          px: {xs:3, md:0},
          py:3,
          display: "flex",
          justifyContent: "space-between",
          alignItems:'center'
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap:3
          }}
        >
          <Box>
            <Link href="/cart">
              Cart
            </Link>
          </Box>
          <Box>
            <Link href="/favorite">
              favorite
            </Link>
          </Box>
        </Box>
        <Box>
          <IconButton
            sx={{
              bgcolor: "#fff",
              cursor: "pointer",
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 5px 20px",
              "&:hover": {
                transform: "translateY(-1px)",
                bgcolor:'#efefef'
              },
            }}
          >
            <ArrowUpward sx={{ color: "primary.main" }} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", color: "#fff" }}>
        copyright created by victor
      </Box>
    </Box>
  );
};

export default Footer;
