"use client";
import Link from "next/link";
import { useContext } from "react";
import { Maincontext } from "../maincontext";
import { AppBar, Toolbar, Box, Badge } from "@mui/material";
import { BookmarkBorder, ShoppingBagOutlined } from "@mui/icons-material";

const Nav = () => {
  const { likescount, itemType } = useContext(Maincontext);

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "primary.light" }}>
        <Box>
          <Toolbar
            sx={{
              "&.MuiToolbar-root": {
                px: 0,
                maxWidth: "1200px",
                mx: "auto",
                px: { xs: 3, md: 0 },
              },
            }}
          >
            <Box sx={{ flexGrow: 1}}>
              <Link href="/" scroll={false} style={{color:'#fff', fontFamily:'cursive'}}>
                e-MarketByHillz
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Link href="/cart" scroll={false}>
                <Badge
                  color="warning"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  overlap="circular"
                  badgeContent={itemType}
                  sx={{ cursor: "pointer" }}
                >
                  <ShoppingBagOutlined
                    fontSize="large"
                    sx={{ color: "#fff" }}
                  />
                </Badge>
              </Link>

              <Link href="/favorite" scroll={false}>
                <Badge
                  color="warning"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  overlap="circular"
                  badgeContent={likescount}
                  sx={{ cursor: "pointer" }}
                >
                  <BookmarkBorder fontSize="large" sx={{ color: "#fff" }} />
                </Badge>
              </Link>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Nav;
