"use client";
import { Box, Button, Grid } from "@mui/material";
import { useContext } from "react";
import { Maincontext } from "@/components/maincontext";
import Image from "next/image";
import { ArrowRightAlt } from "@mui/icons-material";
import Link from "next/link";

const Favorite = () => {
  const { selectedItems, HandleRemove, likescount, RemoveAll } =
    useContext(Maincontext);
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
          mb: 2,
          borderRadius: 3,
        }}
      >
        <Box sx={{ color: "GrayText" }}>Favorite</Box>
        <Link href="/">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "&:hover": { color: "red" },
            }}
          >
            <ArrowRightAlt /> Products page
          </Box>
        </Link>
      </Box>

      <Button variant="contained" onClick={RemoveAll}>
        Remove All
      </Button>

      <Box sx={{ width: "100%", display: !likescount ? "none" : "block", mt:2 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1.2 }}>
          {selectedItems.map((st) => (
            <Grid key={st.id} item xs={6} sm={3} md={2.4} lg={2}>
              <Box sx={{ width: "100%", p: 1, bgcolor: "#fff" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: 150,
                    position: "relative",
                    overflow: "hidden",
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

                <Box>
                  <Box>{st.name}</Box>
                  <Box>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => HandleRemove(st)}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {!likescount && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2, mt:2
          }}
        >
          <Box sx={{ position: "relative", width: 200, height: 200 }}>
            <Image
              alt="items"
              src="/favorite-empty.svg"
              fill
              sizes="100%"
              priority
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box sx={{color:'error.main'}}>favorites are empty</Box>
        </Box>
      )}
    </Box>
  );
};

export default Favorite;
