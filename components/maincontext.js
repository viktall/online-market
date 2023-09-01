"use client";
import { useRouter } from "next/navigation";
import { createContext, useState, useMemo } from "react";
import cards from "@/components/store";
export const Maincontext = createContext();

const Mycontext = ({ children }) => {
  const router = useRouter();
  const [state, setState] = useState(cards);
  const [stateTwo, setStateTwo] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [search, setSearch] = useState("");
  const [likescount, setLikescount] = useState(null);
  const [itemType, setItemType] = useState(null);
  const [sumup, setSumup] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemCart, setSelectedItemCart] = useState([]);
  const [discountCode, setDiscountcode] = useState("");
  

  const code = "UGWU";
  const treshold = 100000;
  const shippingCost = 10000;
  const discount = 20;
  const totalAmountPayable = sumup < treshold ? sumup + shippingCost : sumup;
  const discountedPrice = sumup - (sumup * discount) / 100;

  const toggle =
    (discountCode !== code && sumup < treshold) ||
    (discountCode === code && discountedPrice < treshold);

  const offer =
    discountCode === code && discountedPrice < treshold
      ? discountedPrice + shippingCost
      : discountCode === code && discountedPrice > treshold
      ? discountedPrice
      : totalAmountPayable;



      const HandleSubmit=(e)=>{
         e.preventDefault();
         setDiscountcode('')
      }

  const HandleRemove = ({ id }) => {
    setSelectedItems((prev) => prev.filter((x) => x.id !== id));
    setState((prev) =>
      prev.map((st) => (st.id === id ? { ...st, likes: false } : st))
    );
    setLikescount((prev) => prev - 1);
  };
  const removeAllFromcart = () => {
    setSelectedItemCart([]);
    setItemType(null);
    setState((prev) =>
      prev.map((st) => ({
        ...st,
        cart: false,
        quantity: 0,
        total: 0,
      }))
    );

    setSumup(0);
  };

  const Handlecarttrans = (card) => {
    router.push("/card");
    setStateTwo([card]);
  };

  const RemoveAll = () => {
    setSelectedItems([]);
    setLikescount(null);
    setState((prev) => prev.map((st) => ({ ...st, likes: false })));
  };
  const HandleLikes = (card) => {
    const { id, likes } = card;
    setState((prev) =>
      prev.map((st) => (st.id === id ? { ...st, likes: !st.likes } : st))
    );

    if (!likes) {
      setLikescount((prev) => prev + 1);
      setSelectedItems([...selectedItems, card]);
    } else {
      setLikescount((prev) => prev - 1);
      setSelectedItems((prev) => prev.filter((st) => st.id !== id));
    }
  };

  const HandleCart = (card) => {
    const { id, quantity, amount } = card;
    setState((prev) =>
      prev.map((st) =>
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

    setStateTwo((prev) =>
      prev.map((st) =>
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

    setSelectedItemCart([
      ...selectedItemCart,
      { ...card, quantity: quantity + 1, total: amount * (quantity + 1) },
    ]);
    setItemType((prev) => prev + 1);
    const holdTotal = state.reduce(
      (totalPrice, amt) => totalPrice + amt.total,
      amount
    );
    setSumup(holdTotal);
  };

  const Reset = ({ id, total }) => {
    setState((prev) =>
      prev.map((st) =>
        st.id === id
          ? {
              ...st,
              cart: false,
              quantity: 0,
              total: 0,
            }
          : st
      )
    );
    setStateTwo((prev) =>
      prev.map((st) =>
        st.id === id
          ? {
              ...st,
              cart: false,
              quantity: 0,
              total: 0,
            }
          : st
      )
    );
    setSelectedItemCart((prev) => prev.filter((x) => x.id !== id));
    setItemType((prev) => prev - 1);

    setSumup((prev) => prev - total);
  };
  const Addcount = (card) => {
    const { id, amount } = card;
    setState((prev) =>
      prev.map((st) =>
        st.id === id
          ? {
              ...st,
              quantity: st.quantity + 1,
              total: st.amount * (st.quantity + 1),
            }
          : st
      )
    );
    setStateTwo((prev) =>
      prev.map((st) =>
        st.id === id
          ? {
              ...st,
              quantity: st.quantity + 1,
              total: st.amount * (st.quantity + 1),
            }
          : st
      )
    );

    setSelectedItemCart((prev) =>
      prev.map((st) =>
        st.id === id
          ? {
              ...st,
              quantity: st.quantity + 1,
              total: st.amount * (st.quantity + 1),
            }
          : st
      )
    );

    const holdTotal = state.reduce(
      (totalPrice, amt) => totalPrice + amt.total,
      amount
    );
    setSumup(holdTotal);
  };

  const Minuscount = ({ id, amount }) => {
    setState((prev) =>
      prev.map((st) =>
        st.id === id
          ? {
              ...st,
              quantity: st.quantity - 1,
              total: st.amount * (st.quantity - 1),
            }
          : st
      )
    );
    setStateTwo((prev) =>
      prev.map((st) =>
        st.id === id
          ? {
              ...st,
              quantity: st.quantity - 1,
              total: st.amount * (st.quantity - 1),
            }
          : st
      )
    );
    setSelectedItemCart((prev) =>
      prev.map((st) =>
        st.id === id
          ? {
              ...st,
              quantity: st.quantity - 1,
              total: st.amount * (st.quantity - 1),
            }
          : st
      )
    );

    setSumup((prev) => prev - amount);
  };

  const Handleselct = (event) => {
    setFiltered(event.target.value);
  };

  const GetFiltered = () => {
    if (filtered) {
      return state.filter((item) => item.category === filtered);
    } else {
      return state;
    }
  };

  const filteredList = useMemo(GetFiltered, [state, filtered]);

  return (
    <Maincontext.Provider
      value={{
        likescount,
        itemType,
        sumup,
        filtered,
        filteredList,
        selectedItems,
        stateTwo,
        selectedItemCart,
        search,
        discount,
        shippingCost,
        offer,
        discountedPrice,
        discountCode,
        toggle,
        treshold,
        HandleSubmit,
        setDiscountcode,
        setSearch,
        removeAllFromcart,
        Handlecarttrans,
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
