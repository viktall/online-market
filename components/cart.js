"use client";
import { grey, red, green } from "@mui/material/colors";
import {
  Add,
  ArrowRightAlt,
  Cancel,
  CancelOutlined,
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
    discount,
  } = useContext(Maincontext);
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        px: 1,
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#fff",
          px: { md: 2, xs: 1 },
          py: 1.5,
          mb: 1.5,
          borderRadius: 3,
        }}
      >
        <Box sx={{ color: "GrayText" }}>Basket</Box>
        <Link href="/">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "&:hover": { color: "red" },
            }}
          >
            <ArrowRightAlt /> Product Page
          </Box>
        </Link>
      </Box>

      {!selectedItemCart.length ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: 300, height: 300, position: "relative" }}>
            <Image
              src="/empty-cart.png"
              alt="items"
              sizes="100%"
              fill
              priority
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
          <Box>The shopping cart is empty</Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              px: { md: 2, xs: 1 },
              py: 1.5,
              mb: 1.5,
              borderRadius: 3,
              bgcolor: "#fff",
              color: "error.main",
            }}
          >
            Shipping is free for purchases over 100 000$
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            <Box flex={{ md: 3 }} sx={{ width: "100%" }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {selectedItemCart.map((sel) => (
                  <Box
                    key={sel.id}
                    sx={{
                      py: { sm: 2, xs: 1 },
                      pr: { sm: 10, xs: 6 },
                      pl: { sm: 2, xs: 1 },
                      borderRadius: 3,
                      bgcolor: "#fff",
                      borderRight: 6,
                      borderColor: "green",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      position: "relative",
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
                        sizes="100%"
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Box>{sel.name}</Box>
                      <Box>{sel.total}</Box>
                    </Box>

                    <Box
                      sx={{
                        bgcolor: "warning.main",
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
                        bgcolor: "warning.main",
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
                        width: 35,
                        py: 1.5,
                        textAlign: "center",
                        border: "2px solid orange",
                        borderRadius: "10px",
                      }}
                    >
                      {sel.quantity}
                    </Box>
                    <Box sx={{ bgcolor: "success.light", borderRadius: "50%" }}>
                      <IconButton onClick={() => Addcount(sel)}>
                        <Add sx={{ fontSize: 16, color: "#fff" }} />
                      </IconButton>
                    </Box>

                    <Box
                      sx={{
                        position: "absolute",
                        top: 9,
                        right: 6,
                        zIndex: 1,
                      }}
                      onClick={() => Reset(sel)}
                    >
                      <CancelOutlined />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box flex={{ md: 2 }} sx={{ width: "100%" }}>
              <Box
                sx={{
                  px: 2,
                  pb: 2,
                  pt: 4,
                  bgcolor: "#fff",
                  borderRadius: 3,
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 4,
                  borderLeft: 6,
                  borderColor: "green",
                }}
              >
                <Box className="offerBadge">%{discount}</Box>
                <Box sx={{ display: "flex", gap: 7 }}>
                  <Box>Total shopping cart</Box> | <Box>{sumup}$</Box>
                </Box>

                <Box
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: 0,
                      pr: 0,
                      py: 0,
                      height: 45,
                    },
                    "& .MuiButton-root": {
                      height: 45,
                      borderRadius: 0,
                      textTransform: "none",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box>Do you have a discount code?</Box>
                  <Box>
                    <TextField
                      id="search"
                      size="small"
                      label="Search item..."
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Button variant="contained">Apply</Button>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
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
                  <Box>{sumup < 100000 ? sumup + 10000 : sumup}$</Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    width: "100%",
                    "& .MuiButton-root": {
                      textTransform: "none",
                    },
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
                      sx={{
                        bgcolor: "warning.main",
                        "&:hover": { bgcolor: "warning.main", opacity: 0.95 },
                      }}
                    >
                      Remove {itemType} items from the shippin cart
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};
export default CartPage;
