"use client";
import { grey, red, green } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Image from "next/image";
import { useContext } from "react";
import { Maincontext } from "./maincontext";

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  InputAdornment,
  TextField,
  IconButton,
  Badge,
  Checkbox,
} from "@mui/material";

import {
  Add,
  DeleteOutline,
  Favorite,
  FavoriteBorder,
  Remove,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const Items = ["All", "Vegetables", "Fruits", "Nuts", "Beans"];

  const {
    likescount,
    sumup,
    itemType,
    filteredList,
    HandleLikes,
    HandleCart,
    Reset,
    Minuscount,
    Addcount,
    Handleselct,
    Handlecarttrans,
  } = useContext(Maincontext);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <AppBar
        position="static"
        color="inherit"
        sx={{ px: { md: 6, sm: 3, xs: 0 } }}
      >
        <Toolbar sx={{ gap: 5 }}>
          <Box sx={{ flexGrow: 1 }}>MUI</Box>
          <Box sx={{ display: "flex" }}>
            {Items.map((item, index) => (
              <Button key={index} onClick={() => Handleselct(item)}>
                {item}
              </Button>
            ))}
          </Box>{" "}
          |
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Badge
              color="secondary"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              overlap="circular"
              badgeContent={itemType}
              onClick={() => router.push("/cart")}
              sx={{ cursor: "pointer" }}
            >
              <ShoppingBagOutlinedIcon fontSize="large" />
            </Badge>

            <Badge
              color="secondary"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              overlap="circular"
              badgeContent={likescount}
              onClick={() => router.push("/favorite")}
              sx={{ cursor: "pointer" }}
            >
              {sumup}<BookmarkBorderIcon fontSize="large" />
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "90%" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb:3 }}>
            <Box
              sx={{
                "& .MuiInputBase-root": {
                  width: 430,
                  borderRadius: 0,
                  pr: 0,
                  py: 0,
                  height: 45,
                },
                "& .MuiButton-root": {
                  height: 45,
                  borderRadius: 0,
                  width: 100,
                },
              }}
            >
              <TextField
                id="search"
                size="small"
                label="Search item..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button variant="contained">
                        <SearchIcon />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {filteredList.map((card) => (
              <Box
                key={card.id}
                sx={{
                  width: 225,
                  height: 300,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "#fff",
                  p: 1,
                }}
              >
                <Box
                  onClick={() => HandleLikes(card)}
                  sx={{
                    alignSelf: "end",
                    bgcolor: "#efefef",
                    borderRadius: "50%",
                    position: "absolute",
                    zIndex: 1,
                  }}
                >
                  <Checkbox
                    inputProps={{ "aria-label": "controlled" }}
                    icon={<FavoriteBorder color="error" />}
                    checkedIcon={<Favorite color="error" />}
                    checked={card.likes}
                  />
                  
                </Box>

                <Box
                  onClick={() => Handlecarttrans(card)}
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    flexGrow: 1
                  }}
                >
                  <Image
                    src={card.img}
                    alt="items"
                    sizes="100vw"
                    fill
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    py: 1
                  }}
                >
                  <Box>{card.name}</Box>
                  <Box>{`$${card.amount}`}</Box>
                </Box>
                {card.cart ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 2,
                      alignItems: "center",
                    }}
                  >
                    {card.quantity === 1 ? (
                      <Box sx={{ bgcolor: red[400], borderRadius: "50%" }}>
                        <IconButton onClick={() => Reset(card)}>
                          <DeleteOutline sx={{ color: "#fff", fontSize: 16 }} />
                        </IconButton>
                      </Box>
                    ) : (
                      <Box sx={{ bgcolor: red[400], borderRadius: "50%" }}>
                        <IconButton onClick={() => Minuscount(card)}>
                          <Remove sx={{ color: "#fff", fontSize: 16 }} />
                        </IconButton>
                      </Box>
                    )}
                    <Box
                      sx={{
                        width: 32,
                        py: 0.6,
                        textAlign: "center",
                        border: 1,
                        borderRadius: "6px",
                      }}
                    >
                      {card.quantity}
                    </Box>
                    <Box sx={{ bgcolor: green[400], borderRadius: "50%" }}>
                      <IconButton onClick={() => Addcount(card)}>
                        <Add sx={{ fontSize: 16 }} />
                      </IconButton>
                    </Box>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      "& .MuiButton-root": { borderRadius: 0 },
                    }}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => HandleCart(card)}
                      endIcon={<ShoppingCartOutlinedIcon />}
                    >
                      Add to cart
                    </Button>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
