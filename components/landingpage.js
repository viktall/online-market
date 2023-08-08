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
  Delete,
  DeleteOutline,
  Favorite,
  FavoriteBorder,
  Remove,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

const Landingpage = () => {
  const router = useRouter();
  const Items = ["All", "Vegetables", "Fruits", "Nuts", "Beans"];

  const {
    likescount,
    itemType,
    sumup,
    filteredList,
    HandleLikes,
    HandleCart,
    Reset,
    Minuscount,
    Addcount,
    Handleselct,
  } = useContext(Maincontext);

  return (
    <Box>
      <Box>
        <AppBar position="static" color="inherit">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            MUI
            <Box
              sx={{
                "& .MuiInputBase-root": {
                  bgcolor: "#fff",
                  height: 40,
                  width: { sm: 530 },
                  borderRadius: 0,
                  pr: 0,
                },
                "& .MuiButton-root": {
                  height: 40,
                  borderRadius: 0,
                  width: 120,
                },
                display: { xs: "none", sm: "block" },
              }}
            >
              <TextField
                id="search"
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Box onClick={() => router.push("/cart")} sx={{cursor:'pointer'}}>
                {sumup}
                <Badge
                  color="secondary"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  overlap="circular"
                  badgeContent={itemType}
                >
                  <ShoppingBagOutlinedIcon fontSize="large" />
                </Badge>
              </Box>
              <Box onClick={() => router.push("/favorite")} sx={{cursor:'pointer'}}>
                <Badge
                  color="secondary"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  overlap="circular"
                  badgeContent={likescount}
                >
                  <BookmarkBorderIcon fontSize="large" />
                </Badge>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ mx: { sm: 6, md: 10, xs: 2 } }}>
        <Box sx={{ overflow: "auto", py: 0.8, display: "flex", my: 2 }}>
          <Box
            sx={{ bgcolor: "#fff", gap: 2, p: 1, display: "flex", flexGrow: 1 }}
          >
            {Items.map((item, index) => (
              <Box
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  bgcolor: "primary.main",
                  color: "#fff",
                  height: 30,
                  px: 2,
                  alignItems: "center",
                  borderRadius: "15px",
                }}
                key={index}
                onClick={() => Handleselct(item)}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            "& .MuiInputBase-root": {
              bgcolor: "#fff",
              height: 40,
              borderRadius: 0,
              pr: 0,
            },
            "& .MuiButton-root": { height: 40, borderRadius: 0, width: 120 },
            bgcolor: "yellow",
            display: { sm: "none" },
          }}
        >
          <TextField
            id="search"
            label="Search item..."
            fullWidth
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            py: 2,
            justifyContent: "center",
          }}
        >
          {filteredList.map((card) => (
            <Box
              key={card.id}
              sx={{
                width: 225,
                height: 320,
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
                }}
              >
                <Checkbox
                  inputProps={{ "aria-label": "controlled" }}
                  icon={<FavoriteBorder color="error" />}
                  checkedIcon={<Favorite color="error" />}
                  checked={card.likes}
                />
              </Box>
              <Box sx={{ alignSelf: "center", flexGrow: 1 }}>
                <Image
                  width={180}
                  height={180}
                  alt="items"
                  src={card.img}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  py: 1,
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
  );
};

export default Landingpage;
