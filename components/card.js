"use client";
import { grey, red, green } from "@mui/material/colors";
import {
  Add,
  ArrowRightAlt,
  DeleteOutlined,
  Remove,
  ShoppingCart,
} from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import { Maincontext } from "./maincontext";
import Link from "next/link";

const CardPage = () => {
  const { HandleCart, Reset, Minuscount, Addcount, stateTwo } =
    useContext(Maincontext);

  console.log(stateTwo);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: { md: "60vw", xs: "80vw" },
          display: "flex",
          flexDirection: "column",
          gap: 2,
          py: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "#f2f2f2",
            p: 2,
            borderRadius: 3,
            borderRight: 6,
            borderColor: "green",
          }}
        >
          <Link href="/">
            <Box sx={{ display: "flex", alignItems: "center", "&:hover": { color: "red" }, gap: 1 }}>
              <ArrowRightAlt />
              Back
            </Box>
          </Link>
        </Box>
        {stateTwo.map((st) => (
          <Box
            key={st.id}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              p: 2,
              bgcolor: "#ccc",
              borderRadius: 3,
              borderLeft: 6,
              borderColor: "green",
            }}
          >
            <Box
              sx={{
                borderRadius: 3,
                borderRight: 6,
                borderColor: "green",
                width: { md: "45%", xs: "100vw" },
                height: 280,
                position: "relative",
                display: "flex",
                bgcolor: "#fff",
                overflow: "hidden",
              }}
            >
              <Image
                src={st.img}
                alt="items"
                sizes="100vw"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box
              sx={{
                width: { md: "55%", xs: "100vw" },
                display: "flex",
                flexDirection: "column",
                gap: 3.5,
                py: 3,
                px: 5,
              }}
            >
              <Box>{st.category}</Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>{st.name}</Box> |<Box>{st.amount}</Box>
              </Box>
              <Box>Organic: yes</Box>
              <Box>Package weight: one Kg</Box>
              {st.cart ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  {st.quantity === 1 ? (
                    <Box sx={{ bgcolor: red[400], borderRadius: "50%" }}>
                      <IconButton onClick={() => Reset(st)}>
                        <DeleteOutlined sx={{ color: "#fff", fontSize: 16 }} />
                      </IconButton>
                    </Box>
                  ) : (
                    <Box sx={{ bgcolor: red[400], borderRadius: "50%" }}>
                      <IconButton onClick={() => Minuscount(st)}>
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
                    {st.quantity}
                  </Box>
                  <Box sx={{ bgcolor: green[400], borderRadius: "50%" }}>
                    <IconButton onClick={() => Addcount(st)}>
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
                    onClick={() => HandleCart(st)}
                    endIcon={<ShoppingCart />}
                  >
                    Add to cart
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CardPage;
