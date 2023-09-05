"use client";
import Image from "next/image";
import {
  Add,
  DeleteOutlined,
  Favorite,
  FavoriteBorder,
  Remove,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Box, Button, Checkbox, Grid, IconButton } from "@mui/material";
import { useContext } from "react";
import { Maincontext } from "../maincontext";

const Cards = () => {
  const {
    HandleLikes,
    HandleCart,
    Reset,
    Minuscount,
    Addcount,
    Handlecarttrans,
    search,
    filteredList,
  } = useContext(Maincontext);

  const productFilter = filteredList.filter((fil) => {
    return !search.toLowerCase()
      ? fil
      : fil.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        {productFilter.length > 0 ? (
          productFilter.map((card) => (
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
                  boxShadow: "rgba(0, 0, 0, 0.03) 0px 5px 20px",
                  "&:hover": {
                    transform: "translateY(-1px)"
                  },
                }}
              >
                <Box
                  onClick={() => HandleLikes(card)}
                  sx={{
                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 20px",
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
                    display: "flex",
                  }}
                >
                  <Image
                    src={card.img}
                    alt={card.name}
                    sizes="100%"
                    fill
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: 1,
                  }}
                >
                  <Box>{card.name}</Box>
                  <Box>{card.amount.toLocaleString()}$</Box>
                </Box>

                {card.cart ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 2,
                      py: 1,
                      alignItems: "center",
                      bgcolor: "#eee",
                    }}
                  >
                    {card.quantity === 1 ? (
                      <Box
                        sx={{ bgcolor: "warning.main", borderRadius: "50%" }}
                      >
                        <IconButton onClick={() => Reset(card)}>
                          <DeleteOutlined
                            sx={{ color: "#fff", fontSize: 16 }}
                          />
                        </IconButton>
                      </Box>
                    ) : (
                      <Box
                        sx={{ bgcolor: "warning.main", borderRadius: "50%" }}
                      >
                        <IconButton onClick={() => Minuscount(card)}>
                          <Remove sx={{ color: "#fff", fontSize: 16 }} />
                        </IconButton>
                      </Box>
                    )}
                    <Box
                      sx={{
                        width: 35,
                        py: 1.5,
                        textAlign: "center",
                        border: "2px solid orange",
                        borderRadius: "10px",
                      }}
                    >
                      {card.quantity}
                    </Box>
                    <Box sx={{ bgcolor: "success.light", borderRadius: "50%" }}>
                      <IconButton onClick={() => Addcount(card)}>
                        <Add sx={{ color: "#fff", fontSize: 16 }} />
                      </IconButton>
                    </Box>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      "& .MuiButton-root": {
                        textTransform: "none",
                        borderRadius: 0,
                      },
                    }}
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => HandleCart(card)}
                      endIcon={<ShoppingCartOutlined />}
                    >
                      Add to cart
                    </Button>
                  </Box>
                )}
              </Box>
            </Grid>
          ))
        ) : (
          <Box sx={{ width: "100%", display:'flex', alignItems:'center', flexDirection:'column', gap:2, py:2}}>
            <Box sx={{ color: "red"}}>
              Oops! No item match your search
            </Box>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                height:230,
                width: 230
              }}
            >
              <Image
                src="/bare-tree.png"
                alt="not found"
                sizes="100%"
                fill
                priority
                style={{ objectFit: "contain" }}
              />
            </Box>
            
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Cards;
