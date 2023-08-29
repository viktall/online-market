"use client";
import { Search } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  TextField,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

import { useContext } from "react";
import { Maincontext } from "../maincontext";

const Searchfield = () => {
  const { filtered, search, setSearch, Handleselct} = useContext(Maincontext);
  const Items = [
    { id: "", product: "All" },
    { id: "Vegetables", product: "Vegetables" },
    { id: "Fruits", product: "Fruits" },
    { id: "Nuts", product: "Nuts" },
    { id: "Beans", product: "Beans" },
  ];

  return (
    <Box sx={{ p: 1, display: "flex", borderRadius: 2, bgcolor: "#fff", my:2, gap:1}}>
      <TextField
        id="search"
        size="small"
        label="Search item..."
        value={search}
        onChange={e=>setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="idkey"
          value={filtered}
          onChange={Handleselct}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {Items.map((it) => (
            <MenuItem key={it.id} value={it.id}>
              {it.product}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Searchfield;
