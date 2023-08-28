"use client";
import { grey, red, green } from "@mui/material/colors";
import {
  Add,
  ArrowRightAlt,
  DeleteOutlined,
  Remove,
  ShoppingCart,
} from "@mui/icons-material";
import { Box, Button, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import { Maincontext } from "./maincontext";
import Link from "next/link";

const CardPage = () => {
  const { HandleCart, Reset, Minuscount, Addcount, stateTwo } =
    useContext(Maincontext);

  return (
    <Box
      sx={{
        maxWidth: "700px",
        mx: "auto",
        p: 2,
      }}
    >
      <Box
        sx={{
          p: 2,
          bgcolor: "#fff",
          borderRadius: 3,
          borderRight: 6,
          borderColor: "green",
          mb: 2,
        }}
      >
        <Link href="/">
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              "&:hover": { color: "red" },
              gap: 1,
            }}
          >
            <ArrowRightAlt />
            Back
          </Box>
        </Link>
      </Box>

      {stateTwo.map((st) => (
        <Grid
          sx={{
            bgcolor: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 20px",
            borderRadius: 3,
            borderLeft: 6,
            borderColor: "green",
            p: 1,
          }}
          key={st.id}
          container
        >
          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <Box
              sx={{
                display: "flex",
                borderRadius: 3,
                borderRight: 6,
                borderColor: "green",
                width: "100%",
                height: 225,
                position: "relative",
                bgcolor: "#fff",
                overflow: "hidden",
                boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 20px",
              }}
            >
              <Image
                src={st.img}
                alt="items"
                sizes="100%"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>

          <Grid key={st.id} item xs={12} md={6} sx={{ display:'flex', flexDirection:'column', gap:1, p: 2 }}>
            <Box sx={{py:1}}>{st.category}</Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", py:1 }}>
              <Box>{st.name}</Box> |<Box>{st.amount}</Box>
            </Box>
            <Box sx={{py:3, flexGrow:1}}>
              <Box>Organic: yes</Box>
              <Box>Package weight: one Kg</Box>
            </Box>
            {st.cart ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  alignItems: "center"
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
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default CardPage;
