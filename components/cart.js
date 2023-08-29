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
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 3,
      }}
    >
      <Box
        sx={{
          width: { xs: "93vw", sm: "90vw", md: "87vw", lg: "84vw" },
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
            bgcolor: "#fff",
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
                display: "flex",
                px: 4,
                py: 2,
                bgcolor: "#fff",
                borderRadius: 3,
              }}
            >
              shipping is free for purchases over 100 000$
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Box flex={{ md: 3 }} sx={{ width: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap:2}}>
                  {selectedItemCart.map((sel) => (
                    <Box
                      key={sel.id}
                      sx={{
                        p: { sm: 3, xs: 1 },
                        borderRadius: 3,
                        bgcolor: "#fff",
                        borderRight: 6,
                        borderColor: "green",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        position: "relative"
                      }}
                    >
                      <Box
                        sx={{
                          overflow: "hidden",
                          position: "relative",
                          height: 80,
                          width: 80
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
                      <Box>
                        <Box>{sel.name}</Box>
                        <Box>{sel.total}</Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          justifyContent: "flex-end",
                          flexGrow: 1, pr:5, bgcolor:'red', height:'100%'
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
                            <DeleteOutlined
                              sx={{ color: "#fff", fontSize: 16 }}
                            />
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
                            width: 35,
                            
                            textAlign: "center",
                            border:'2px solid green',
                            borderRadius: "10px",
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
                      <Box
                        sx={{
                          position: "absolute",
                          top:15,
                          right:12,
                          zIndex: 1
                        }}
                        onClick={() => Reset(sel)}
                      >
                        <Cancel />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box flex={{ md: 2 }} sx={{ width: "100%" }}>
                <Box
                  sx={{
                    p: 2,
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
                  <Box sx={{ display: "flex", gap: 8 }}>
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
          </>
        )}
      </Box>
    </Box>
  );
};
export default CartPage;
