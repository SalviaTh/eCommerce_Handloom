import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { FaTimes } from "react-icons/fa";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import { CloudinaryConfig } from "../../../Cloudinary";

const CartItem = ({ item, substractQuantity, addToCart, removeFromCart }) => (
  <div className="flex flex-row   border border-gray-400 rounded-lg shadow-lg p-6 transition-all hover:shadow-2xl">
    <div className="w-full sm:w-[120px]  sm:h-[150px] h-[150px] flex justify-center items-center mb-4 sm:mb-0">
      <img
        className="sm:w-full sm:h-full w-[120px] h-[160px] object-fit rounded-lg"
        src={`${
          CloudinaryConfig.CLOUDINARY_URL
        }/image/upload/${item?.image_id[0]?.replace(/"/g, "")}`}
        alt=""
      />
    </div>

    <div className=" sm:ml-4 flex flex-col  justify-between w-full">
      <div className="flex justify-between mb-2">
        <h3 className=" sm:text-xl font-semibold text-black text-[15px]">
          {item.name}
        </h3>
        <button
          type="button"
          className="text-red-500 p-1 hover:text-red-600 transition"
          onClick={() => removeFromCart(item._id)}
        >
          <FaTimes size={20} />
        </button>
      </div>

      {/* <div className="flex justify-between text-[15px] mb-2"> */}
      <div className=" flex sm:text[18px] text-[14px]">
        <p className="font-semibold sm:text[18px] text-red-400 ">
          ₹{item.discountedPrice}
        </p>
        <p className="font-semibold sm:text[18px] text-black line-through pl-2 ">
          ₹{item.price}
        </p>
        <p className="font-semibold text-gray-500 pl-2 ">
          ({item.discount}%OFF)
        </p>
      </div>

      {/* </div> */}

      <div className="flex justify-between  pr-3">
        <p className="font-semibold text-gray-800 sm:text-[18px] text-[14px] ">
          Qty: {item.quantity}
        </p>
        <div className="flex gap-4">
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6 flex justify-center items-center transition"
            onClick={() => substractQuantity(item._id)}
          >
            <span className="font-bold text-xl">-</span>
          </button>
          <span className="flex justify-center items-center font-semibold text-lg text-black dark:text-white">
            {item.quantity}
          </span>
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6 flex justify-center items-center transition"
            onClick={() => addToCart(item._id)}
          >
            <span className="font-bold text-xl">+</span>
          </button>
        </div>
      </div>
      <h3 className="font-semibold text-black ">
        SubTotal: ₹ {item.discountedPrice * item.quantity}
      </h3>
    </div>
  </div>
);

const CartTotals = ({ total, navigate }) => (
  <div className="mt-8 bg-white border border-gray-400 p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl">
    <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
      Cart Totals
    </h2>
    <div className="flex justify-between mb-4">
      <p className="text-lg text-gray-700 dark:text-gray-300">Subtotals</p>
      <p className="text-lg text-black dark:text-white">₹ {total}</p>
    </div>
    <div className="flex justify-between mb-4">
      <p className="text-lg text-gray-700 dark:text-gray-300">Shipping Fee</p>
      <p className="text-lg text-black dark:text-white">Free</p>
    </div>
    <hr className="my-4 border-t border-gray-300 dark:border-gray-600" />
    <div className="flex justify-between text-lg font-semibold">
      <h3>Total</h3>
      <h3>₹ {total}</h3>
    </div>

    <div className="mt-6 flex justify-center">
      <button
        type="button"
        className="w-[250px] h-[50px] bg-red-500 text-white text-[16px] rounded-lg hover:bg-red-600 transition cursor-pointer"
        onClick={() => navigate("/checkout")}
      >
        PROCEED TO CHECKOUT
      </button>
    </div>
  </div>
);

const CartsItems = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const {
    getTotalCartAmount,
    cartItems,
    substractQuantity,
    addToCart,
    removeFromCart,
  } = useContext(ShopContext);
  const navigate = useNavigate();

  const getTotal = () => {
    let total = 0;
    if (cartItems?.length) {
      cartItems.forEach((i) => {
        total += i.discountedPrice * i.quantity;
      });
    }
    return total;
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 top-0 overflow-hidden">
      <Navbar />

      <div className="py-8 px-4 sm:px-8 flex flex-col gap-10">
        {cartItems.length > 0 ? (
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                substractQuantity={substractQuantity}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-lg font-semibold text-gray-500 ">
            Your cart is empty! Start shopping now.
          </div>
        )}

        <CartTotals total={getTotal()} navigate={navigate} />
      </div>
    </div>
  );
};

export default CartsItems;
