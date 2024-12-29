import React, { useState, useEffect } from "react";
import { createContext } from "react";
import all_product from "../../assets/all_products";
import { Axios } from "../../../api";

export const ShopContext = createContext();

const getInitialCartItems = () => {
  const cart = window.localStorage.getItem("cartItems");
  return cart ? JSON.parse(cart) : [];
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getInitialCartItems);
  const [buyProduct, setBuyProduct] = useState([]);
  const [data, setData] = useState(null);

  const buyNow = (id) => {
    const addData = data.filter((data) => data._id === id);
    localStorage.setItem("checkoutItem", JSON.stringify(addData));
    setBuyProduct(addData);
  };

  const buyFromCart = () => {
    let items = localStorage.getItem("cartItems");
    if (items) {
      items = JSON.parse(items);
      localStorage.setItem("checkoutItem", JSON.stringify(items));
      setBuyProduct(items);
    }
  };

  const fetchProducts = async () => {
    const res = await Axios.get("/product/allproduct");
    setData(res.data.products);
    console.log(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const addToCart = (itemId) => {
    if (data) {
      const addData = data.find((item) => item._id === itemId); // Find item in product data
      setCartItems((prev) => {
        const existingItem = prev.find((item) => item._id === itemId); // Check if item already exists in the cart
        let updatedCartItems;
        if (existingItem) {
          // Update quantity and subtotal if item already exists
          updatedCartItems = prev.map((item) =>
            item._id === itemId
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  subtotal: (item.quantity + 1) * item.discountedPrice,
                }
              : item
          );
        } else {
          // Add new item to cart with initial quantity and subtotal
          updatedCartItems = [
            ...prev,
            { ...addData, quantity: 1, subtotal: addData.discountedPrice },
          ];
        }
        // Save updated cart to localStorage
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        return updatedCartItems;
      });
    }
  };
  const substractQuantity = (itemId) => {
    setCartItems((prev) => {
      const updatedCartItems = prev.map((item) =>
        item._id === itemId && item.quantity > 0
          ? {
              ...item,
              quantity: item.quantity - 1,
              subtotal: (item.quantity - 1) * item.discountedPrice,
            }
          : item
      );
      return updatedCartItems;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      // Find the item in the cart
      const item = prev.find((item) => item._id === itemId);

      // If the item is not in the cart, return the previous state
      if (!item) {
        return prev;
      }

      // If the quantity is 1, remove the item from the cart
      // if (item.quantity === 1) {
      const updatedCartItems = prev.filter((item) => item._id !== itemId);

      // Update the cart in local storage
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      return updatedCartItems;

      // Otherwise, decrease the quantity and update the subtotal
    });
  };

  // const getTotalCartAmount = () => {
  //   const totalAmount = cartItems.reduce((total, item) => {
  //     return total + item.subtotal;
  //   }, 0);

  //   return totalAmount;
  // };
  const getTotalCartAmount = () => {
    let total = 0;
    if (buyProduct.length) {
      buyProduct.map((i) => {
        total = total + i.discountedPrice * i.quantity;
      });
    }
    return total;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return cartItems.length;
  };
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    substractQuantity,
    buyNow,
    buyProduct,
    buyFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
