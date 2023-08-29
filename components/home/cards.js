"use client";
import { grey, red, green } from "@mui/material/colors";
import {
  Add,
  DeleteOutlined,
  Favorite,
  FavoriteBorder,
  Remove,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { Maincontext } from "../maincontext";
import { Box, Button, Checkbox, Grid, IconButton } from "@mui/material";
import Image from "next/image";

const Cards = () => {
  const {
    HandleLikes,
    HandleCart,
    Reset,
    Minuscount,
    Addcount,
    Handlecarttrans,
    search,
    filteredList
  } = useContext(Maincontext);
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        {filteredList.filter((fil) => {

          return search.toLowerCase()===''? fil:fil.name.toLowerCase().includes(search)
          
        
        }).map((card) => (
          <Grid key={card.id} item xs={6} sm={4} md={3} lg={2.4}>
            <Box
              sx={{
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                bgcolor: "#fff",
                p: 1,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 5px 20px",
                "&:hover": {
                  boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 30px",
                  transform: "translateY(-3px)",
                },
              }}
            >
              <Box
                onClick={() => HandleLikes(card)}
                sx={{
                  alignSelf: "end",
                  bgcolor: "#efefef",
                  borderRadius: "50%",
                  position: "absolute",
                  zIndex: 1,
                }}
              >
                <Checkbox
                  id={card.name}
                  inputProps={{ "aria-label": "controlled" }}
                  icon={<FavoriteBorder color="error" />}
                  checkedIcon={<Favorite color="error" />}
                  checked={card.likes}
                />
              </Box>
              <Box
                onClick={() => Handlecarttrans(card)}
                sx={{
                  width: "100%",
                  height: 200,
                  position: "relative",
                  overflow: "hidden",
                  flexGrow: 1,
                }}
              >
                <Image
                  src={card.img}
                  alt="items"
                  sizes="100%"
                  fill
                  priority
                  style={{ objectFit: "contain", display: "flex" }}
                />
              </Box>

              <Box
                sx={{ display: "flex", justifyContent: "space-between", py:1 }}
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
                        <DeleteOutlined sx={{ color: "#fff", fontSize: 16 }} />
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
                      width:35,
                      py: 1.5,
                      textAlign: "center",
                      border:'2px solid green',
                      borderRadius: "10px",
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
                    endIcon={<ShoppingCartOutlined />}
                  >
                    Add to cart
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;
