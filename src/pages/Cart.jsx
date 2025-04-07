import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../componenets/Title";
import { FaRegWindowClose } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Cart = () => {
  const { foods, cartItem } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (foods.length > 0) {
      const tempData = [];
      for (const items in cartItem) {
        console.log(items);
        for (const item in cartItem[items]) {
          console.log(item);
          if (cartItem[items][item] > 0) {
            console.log(cartItem[items][item]);
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItem[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [foods, cartItem, cartData]);

  return (
    <section>
      <div>
        <Title title1={`cart`} title2={`List`} titleStyles={`h3 `} />
        {/* container */}
        <div>
          {cartData.map((item, i) => {
            const productData = foods.find(
              (product) => product._id === item._id
            );
            return "";
          })}
        </div>
      </div>
    </section>
  );
};

export default Cart;
