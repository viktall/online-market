import { ArrowUpward } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        display: "flex",
        flexDirection: "column",
        height: 100,
        gap: 1,
        mt: 8,
        mb: 0,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          borderRadius: "50%",
          bgcolor: "#fff",
          right: 12,
          top: 15,
          cursor: "pointer",
          boxShadow: "rgba(0, 0, 0, 0.08) 0px 5px 20px",
          "&:hover": {
            transform: "translateY(-3px)",
          },
        }}
        onClick={() => window.scrollTo(0, 0)}
      >
        <IconButton>
          <ArrowUpward sx={{ color: "primary.main" }} />
        </IconButton>
      </Box>
      <Box>
        <Link href="/cart">Cart</Link>
      </Box>
      <Box sx={{ flexGrow: 1, bgcolor:'yellow' }}>
        <Link href="/favorite">Cart</Link>
      </Box>

      <Box sx={{ alignSelf: "center", bgcolor:'yellow', color:'#fff' }}>copyright created by victor</Box>
    </Box>
  );
};

export default Footer;
