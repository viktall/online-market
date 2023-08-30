"use client";

import Link from "next/link";
import { grey, orange, amber} from "@mui/material/colors";
import { useContext } from "react";
import { Maincontext } from "../maincontext";
import { AppBar, Toolbar, Box, Badge } from "@mui/material";
import { BookmarkBorder, ShoppingBagOutlined } from "@mui/icons-material";

const Nav = () => {
  const { likescount, itemType } = useContext(Maincontext);

  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ px: { md: 8, sm: 3 } }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>OnlineMarket</Box>

          <Box sx={{ display: "flex", alignItems: "center", gap:3}}>
            <Link href="/cart">
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
                <ShoppingBagOutlined fontSize="large" sx={{ color: "#fff" }} />
              </Badge>
            </Link>

            <Link href="/favorite">
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
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Nav;
