"use client";

import Link from "next/link";
//import { grey, red, green } from "@mui/material/colors";
import { useContext } from "react";
import { Maincontext } from "../maincontext";
import { AppBar, Toolbar, Box, Badge } from "@mui/material";
import { BookmarkBorder, ShoppingBagOutlined } from "@mui/icons-material";

const Nav = () => {
  const { likescount, itemType } = useContext(Maincontext);

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ px: { md: 6, sm: 3, xs: 0 } }}
      >
        <Toolbar sx={{ gap: 5 }}>
          <Box sx={{ flexGrow: 1 }}>MUI</Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Link href="/cart">
              <Badge
                color="secondary"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                overlap="circular"
                badgeContent={itemType}
                sx={{ cursor: "pointer" }}
              >
                <ShoppingBagOutlined fontSize="large" color="action"/>
              </Badge>
            </Link>

            <Link href="/favorite">
              <Badge
                color="secondary"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                overlap="circular"
                badgeContent={likescount}
                sx={{ cursor: "pointer" }}
              >
                <BookmarkBorder fontSize="large" color="action"/>
              </Badge>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Nav;
