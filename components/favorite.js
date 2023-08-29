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
        px:1, py:2
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "#fff",
          px: { md: 5, xs: 2 },
          py: 2, mb:2,
          borderRadius: 3,
        }}
      >
        <Box>Favorite</Box>
        <Link href="/">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "&:hover": { color: "red" },
              gap: 1,
            }}
          >
            <ArrowRightAlt /> Products page
          </Box>
        </Link>
      </Box>

      <Button variant="contained" onClick={RemoveAll}>
        Remove All
      </Button>

      <Box sx={{ width: "100%", display:!likescount?'none':'block'}}>
        <Grid container rowSpacing={2} columnSpacing={{ xs:1.2}}>
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
        <Box sx={{ width: "100%"}}>
          <Box sx={{ position: "relative", overflow: "hidden", height: 200 }}>
            <Image
              alt="items"
              src="/favorite-empty.svg"
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box sx={{ textAlign: "center"}}>favorites are empty</Box>
        </Box>
      )}
    </Box>
  );
};

export default Favorite;
