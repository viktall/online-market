"use client";

import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { Maincontext } from "@/components/maincontext";
import Image from "next/image";
import { ArrowRightAlt } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Favorite = () => {
  const router = useRouter();
  const { selectedItems, HandleRemove, likescount, RemoveAll } =
    useContext(Maincontext);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          width: { md: "87vw", xs: "97vw" },
          display: "flex",
          flexDirection: "column",
          gap:3,
          py:3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignSelf: "center",
            justifyContent: "space-between",
            width: "90%",
            bgcolor: "#ccc",
            px: {md:5, xs:2},
            py:2,
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
        <Box sx={{ width: "90%", alignSelf: "center" }}>
          <Button variant="contained" onClick={RemoveAll}>
            Remove All
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {selectedItems.map((st) => (
            <Box key={st.id}>
              <Box
                sx={{
                  height: 250,
                  width: 200,
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "#fff",
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "80%",
                    position: "relative",
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
                <Box flexGrow={1} />
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
            </Box>
          ))}
        </Box>
        {!likescount && (
          <Box sx={{display:'flex', flexDirection:'column'}}>
            <Box sx={{position:'relative', overflow:'hidden', height:210}}>
              <Image
                alt="items"
                src="/favorite-empty.svg"
                fill
                sizes="100vw"
                style={{objectFit:'contain'}}
              />
            </Box>
            <Box sx={{textAlign:'center'}}>favorites are empty</Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Favorite;
