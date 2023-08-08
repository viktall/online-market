"use client";

import { createContext, useState, useEffect, useMemo } from "react";
import cards from "@/components/store";
export const Maincontext = createContext();

const Mycontext = ({ children }) => {
  const [state, setState] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [likescount, setLikescount] = useState(null);
  const [itemType, setItemType] = useState(null);
  const [sumup, setSumup] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const HandleRemove = ({ id }) => {
    setSelectedItems(selectedItems.filter((x) => x.id !== id));
    setState(state.map((st) => (st.id === id ? { ...st, likes: false } : st)));
    setLikescount((prev) => prev - 1);
  };

  const RemoveAll = () => {
    setSelectedItems([]);
    setLikescount(null);
    setState(state.map((st) => ({ ...st, likes: false })));
  };
  const HandleLikes = (card) => {
    const { id, likes } = card;
    setState(
      state.map((st) => (st.id === id ? { ...st, likes: !st.likes } : st))
    );

    if (!likes) {
      setLikescount((prev) => prev + 1);
      setSelectedItems([...selectedItems, card]);
    } else {
      setLikescount((prev) => prev - 1);
      setSelectedItems(selectedItems.filter((st) => st.id !== id));
    }

    console.log(selectedItems);
  };

  const HandleCart = ({ id, amount }) => {
    setState(
      state.map((st) =>
        st.id === id
          ? {
              ...st,
              cart: !st.cart,
              quantity: st.quantity + 1,
              total: st.amount * (st.quantity + 1),
            }
          : st
      )
    );
    setItemType((prev) => prev + 1);

    setSumup(state.map((x) => x.total).reduce((a, b) => a + b, amount));
    console.log(state.map((x) => x.total));
  };

  const Reset = ({ id, amount }) => {
    setState(
      state.map((st) =>
        st.id === id
          ? {
              ...st,
              cart: false,
              quantity: 0,
              total: st.amount * (st.quantity - 1),
            }
          : st
      )
    );
    setItemType((prev) => prev - 1);
    setSumup(state.map((x) => x.total).reduce((a, b) => a + b, -amount));
  };
  const Addcount = ({ id, amount }) => {
    setState(
      state.map((st) =>
        st.id === id
          ? {
              ...st,
              quantity: st.quantity + 1,
              total: st.amount * (st.quantity + 1),
            }
          : st
      )
    );

    setSumup(state.map((x) => x.total).reduce((a, b) => a + b, amount));
    console.log(state.map((x) => x.total));
  };

  const Minuscount = ({ id, amount }) => {
    setState(
      state.map((st) =>
        st.id === id
          ? {
              ...st,
              quantity: st.quantity - 1,
              total: st.amount * (st.quantity - 1),
            }
          : st
      )
    );
    setSumup(state.map((x) => x.total).reduce((a, b) => a + b, -amount));
  };

  useEffect(() => {
    setState(cards);
  }, []);

  const Handleselct = (selected) => {
    setFiltered(selected);
  };

  const GetFiltered = () => {
    if (filtered === "All" || !filtered) {
      return state;
    } else {
      return state.filter((item) => item.category === filtered);
    }
  };
  const filteredList = useMemo(GetFiltered, [state, filtered]);

  return (
    <Maincontext.Provider
      value={{
        likescount,
        itemType,
        sumup,
        filteredList,
        selectedItems,
        likescount,
        RemoveAll,
        HandleRemove,
        HandleLikes,
        HandleCart,
        Reset,
        Minuscount,
        Addcount,
        Handleselct,
      }}
    >
      {children}
    </Maincontext.Provider>
  );
};

export default Mycontext;
