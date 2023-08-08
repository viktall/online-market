"use client";

import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { Maincontext } from "@/components/maincontext";
import Image from "next/image";
import { ArrowRightAlt } from "@mui/icons-material";
import { useRouter } from "next/navigation";



const CartPage = () => {
  const router=useRouter()
  const { selectedItems, HandleRemove, likescount,  RemoveAll } = useContext(Maincontext);
  return (
    <Box sx={{ display: "flex" }}>
      <Box flex={1}></Box>
      <Box flex={12} sx={{ height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "red",
            p: 2,
            borderRadius: 3,
            m: 2,
          }}
        >
          <Box>Favorite</Box>
          <Box sx={{display:'flex', alignItems:'center', cursor:'pointer', '&:hover':{color:'yellow'}}} onClick={() => router.push("/")}><ArrowRightAlt/> Products page</Box>
        </Box>
        <Box sx={{ display: "inline-flex", m: 2 }}>
          <Button variant="contained" onClick={ RemoveAll}>Remove All</Button>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          {selectedItems.map((st) => (
            <Box key={st.id}>
              <Box
                sx={{
                  height: 250,
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "#fff",
                  borderRadius: 2,
                }}
              >
                <Image
                  width={180}
                  height={180}
                  alt="items"
                  src={st.img}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Box flexGrow={1} />
                <Box>
                  <Box>{st.name}</Box>
                  <Box>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={()=>HandleRemove(st)}
                    >
                      Remove
                    </Button>
                  </Box>

                  
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        {!likescount && <Box>favorites are empty</Box>}
      </Box>
      <Box flex={1}></Box>
    </Box>
  );
};

export default CartPage;
