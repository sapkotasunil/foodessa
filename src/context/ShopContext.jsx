import React, { createContext, useEffect, useState } from "react";
import { foods } from "../assets/data";
import { useNavigate } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$ ";
  const delivery_charges = 10;
  const navigate = useNavigate();
  const [cartItem, setCartItem] = useState({});
  //adding item to cart

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItem);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItem(cartData);
  };

  //getting total cart count
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const contextValue = {
    foods,
    currency,
    delivery_charges,
    navigate,
    addToCart,
    getCartCount,
    cartItem,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
