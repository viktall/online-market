"use client";
import { grey, red, green } from "@mui/material/colors";
import {
  Add,
  ArrowRightAlt,
  Cancel,
  DeleteOutlined,
  Remove,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";
import { Maincontext } from "./maincontext";

const CartPage = () => {
  const {
    selectedItemCart,
    itemType,
    removeAllFromcart,
    Addcount,
    Minuscount,
    Reset,
    sumup,
  } = useContext(Maincontext);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          width: { md: "85vw", xs: "96vw" },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            py: 2,
            px: 4,
            bgcolor: "#ccc",
            borderRadius: 3,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>Basket</Box>
          <Link href="/">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ArrowRightAlt /> Product Page
            </Box>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            px: 4,
            py: 2,
            bgcolor: "#ccc",
            borderRadius: 3,
          }}
        >
          shipping is free for purchases over 100 000$
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <Box flex={3}>
            {selectedItemCart.map((sel) => (
              <Box
                key={sel.id}
                sx={{
                  p: { sm: 3, xs: 1 },
                  borderRadius: 3,
                  bgcolor: "#ccc",
                  borderRight: 6,
                  borderColor: "green",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    position: "relative",
                    height: 80,
                    width: 80,
                  }}
                >
                  <Image
                    src={sel.img}
                    alt="img1"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Box>
                  <Box>{sel.name}</Box>
                  <Box>{sel.total}</Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    pr: { sm: 5 },
                    justifyContent: "flex-end",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: red[400],
                      borderRadius: "50%",
                      display: sel.quantity === 1 ? "block" : "none",
                    }}
                  >
                    <IconButton onClick={() => Reset(sel)}>
                      <DeleteOutlined sx={{ color: "#fff", fontSize: 16 }} />
                    </IconButton>
                  </Box>

                  <Box
                    sx={{
                      bgcolor: red[400],
                      borderRadius: "50%",
                      display: sel.quantity === 1 ? "none" : "block",
                    }}
                  >
                    <IconButton onClick={() => Minuscount(sel)}>
                      <Remove sx={{ color: "#fff", fontSize: 16 }} />
                    </IconButton>
                  </Box>

                  <Box
                    sx={{
                      width: 32,
                      py: 0.6,
                      textAlign: "center",
                      border: 1,
                      borderRadius: "6px",
                    }}
                  >
                    {sel.quantity}
                  </Box>
                  <Box sx={{ bgcolor: green[400], borderRadius: "50%" }}>
                    <IconButton onClick={() => Addcount(sel)}>
                      <Add sx={{ fontSize: 16 }} />
                    </IconButton>
                  </Box>
                </Box>
                <IconButton
                  sx={{ alignSelf: "start" }}
                  onClick={() =>Reset(sel)}
                >
                  <Cancel />
                </IconButton>
              </Box>
            ))}
          </Box>
          <Box flex={2}>
            <Box
              sx={{
                p: 2,
                bgcolor: "#ccc",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Box sx={{ display: "flex", gap: 8 }}>
                <Box>Total shopping cart</Box> | <Box>{sumup}$</Box>
              </Box>

              <Box
                sx={{
                  "& .MuiInputBase-root": {
                    width: 320,
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
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Box> Do you have a discount code?</Box>
                <TextField
                  id="search"
                  size="small"
                  label="Search item..."
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button variant="contained">Apply</Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", gap: 10 }}>
                <Box>Shipping cost</Box>
                <Box>10000$</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Box>Total amount payable</Box>
                <Box>{sumup<100000? sumup + 10000: sumup }$</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: "100%",
                }}
              >
                <Box>
                  <Button variant="contained" fullWidth>
                    Continue the purchase process
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={removeAllFromcart}
                  >
                    Remove {itemType} items from the shippin cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CartPage;
