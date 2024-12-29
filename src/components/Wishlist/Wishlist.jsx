import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { TiDeleteOutline } from "react-icons/ti";
import { ShopContext } from "../Context/ShopContext";
import Footer from "../Footer/Footer";
import { FaHeart } from "react-icons/fa6";
import ChatBox from "../Chat/ChatBox";
import { Axios } from "../../../api";
import { CloudinaryConfig } from "../../../Cloudinary";
import { Rating } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import LogoLoading from "../../Pages/LogoLoading";

const Wishlist = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useContext(ShopContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllProduct = async () => {
    try {
      const { data } = await Axios({
        url: "/product/allproduct",
        method: "GET",
      });
      setProducts(data.products.filter((i) => i.fav === "Yes"));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleWishlist = async (e, p) => {
    e.preventDefault();
    try {
      const { data } = await Axios.put(`/product/updatefav/${p._id}`, {
        fav: "No",
      });
      if (data) {
        getAllProduct();
      }
    } catch (error) {
      console.error("Something happened while updating the wishlist");
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getAllProduct();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      {loading ? (
        <LogoLoading />
      ) : (
        <div className="pt-16 p-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:p-3 p-2 pl-3">
            {products.map((p) => (
              <div
                className="group shadow-md hover:shadow-lg border border-gray-400 sm:p-3 p-2 rounded-md"
                key={p._id}
              >
                <div className="relative">
                  {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                  <img
                    onClick={() => {
                      navigate(`/product/${p._id}`);
                    }}
                    src={`${
                      CloudinaryConfig.CLOUDINARY_URL
                    }/image/upload/${p?.image_id[0]?.replace(/"/g, "")}`}
                    alt={p.name}
                    className="sm:ml-4 sm:w-52 sm:h-52 w-[150px] h-[170px] object-cover rounded-md"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 bg-slate-50 p-[5px] sm:p-[8px] rounded-full"
                  >
                    <FaHeart
                      className={
                        p.fav === "Yes" ? "text-red-600" : "text-gray-400"
                      }
                      onClick={(e) => handleWishlist(e, p)}
                    />
                  </button>
                </div>
                <div className="w-full flex justify-between sm:p-2 pl-2 pt-2">
                  <div className="sm:text-[16px] text-[12px] text-black">
                    <p>{p.name}</p>
                    <div className="flex items-center gap-3 py-2">
                      <Rating value={p?.averageRating} fractions={2} />
                      <span className="text-orange-500 sm:text-sm text-[10px]">
                        ({p?.totalReviews})
                      </span>
                    </div>
                    <div className="flex w-full  ">
                      <p className="text-[13px] sm:text-[15px]  pr-2 line-through opacity-65">
                        ₹{p.price}
                      </p>
                      <p className="text-red-500 pr-1 sm:text-[16px] text-[14px]">
                        ₹{p.discountedPrice}
                      </p>
                      <p className="text-emerald-500 sm:text-[13px] text-[11px]">
                        ({p.discount} % OFF)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <ChatBox />
      <Footer />
    </div>
  );
};

export default Wishlist;
