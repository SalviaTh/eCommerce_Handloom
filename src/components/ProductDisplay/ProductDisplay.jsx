import React, { useState, useEffect, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./ProductDisplay.css";
import { useParams } from "react-router-dom";
import { Rating } from "@mantine/core";
import { ShopContext } from "../Context/ShopContext";
import { CloudinaryConfig } from "../../../Cloudinary";
import { Axios } from "../../../api";
import Reviews from "../Reviews/Reviews";
import RelatedProduct from "../RelatedProducts/RelatedProduct.jsx";
import LogoLoading from "../../Pages/LogoLoading.jsx";
import { useQuery } from "@tanstack/react-query";
import ChatBox from "../Chat/ChatBox.jsx";

const ProductDisplay = (props) => {
  const { product } = props;
  const navigate = useNavigate();
  const { addToCart, buyNow } = useContext(ShopContext);

  const [mainImg, setMainImg] = useState(null);
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);

  const fetchProductData = async (productId) => {
    try {
      const res = await Axios({
        url: `/product/getOneProduct/${productId}`,
        method: "GET",
      });
      return res.data.product;
    } catch (error) {
      throw new Error("Error fetching product data");
    }
  };

  const { data: productData } = useQuery(
    ["productData", productId],
    () => fetchProductData(productId),
    {
      enabled: !!productId,
      onSuccess: () => setLoading(false),
      onError: () => setLoading(false),
    }
  );
  const imgData1 = `${
    CloudinaryConfig.CLOUDINARY_URL
  }/image/upload/${productData?.image_id[0]?.replace(/"/g, "")}`;
  const imgData2 = `${
    CloudinaryConfig.CLOUDINARY_URL
  }/image/upload/${productData?.image_id[1]?.replace(/"/g, "")}`;
  const imgData3 = `${
    CloudinaryConfig.CLOUDINARY_URL
  }/image/upload/${productData?.image_id[2]?.replace(/"/g, "")}`;
  const imgData4 = `${
    CloudinaryConfig.CLOUDINARY_URL
  }/image/upload/${productData?.image_id[3]?.replace(/"/g, "")}`;

  useEffect(() => {
    if (productData?.image_id) {
      setMainImg(imgData1);
    }
  }, [productData]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {loading ? (
        <LogoLoading />
      ) : (
        productData && (
          <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Navbar />
            <div className="pt-20">
              <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] pb-5">
                <div className="container pb-8 pr-0 sm:pb-0">
                  <div className="sm:flex lg:flex  sm:pt-3 pb-5">
                    <div className="flex flex-col sm:flex-row sm:items-start items-center gap-4">
                      {/* Main Image Section */}
                      <div className="flex justify-center w-full sm:w-[520px] ">
                        <div className="w-full pr-3 sm:h-[520px] h-[400px]">
                          <img
                            className="w-full p-3 h-full object-cover  rounded-md"
                            src={
                              mainImg ||
                              `${
                                CloudinaryConfig.CLOUDINARY_URL
                              }/image/upload/${productData?.image_id[0]?.replace(
                                /"/g,
                                ""
                              )}`
                            }
                            alt="Main Product"
                          />
                        </div>
                      </div>

                      {/* Thumbnails Section */}
                      <div className="flex sm:flex-col flex-row gap-2 sm:w-[120px] w-full sm:overflow-visible overflow-x-auto">
                        {[imgData1, imgData2, imgData3, imgData4].map(
                          (img, index) => (
                            <div
                              key={index}
                              className="flex-shrink-0 w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] pl-3"
                            >
                              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                              <img
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => setMainImg(img)}
                                className={`w-full h-full object-cover border rounded-md cursor-pointer transition-transform hover:scale-105 ${
                                  mainImg === img
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="productdisplay-right mt-4 sm:mt-0 sm:ml-6">
                      <h1 className="sm:text-[20px] text-[15px] font-semibold">
                        {productData.name}
                      </h1>
                      <div className="flex items-center gap-2 py-2">
                        <Rating
                          value={productData?.averageRating}
                          fractions={2}
                        />
                        <span className="text-orange-500 sm:text-[16px] text-[12px]">
                          ({productData?.totalReviews})
                        </span>
                        <span>Reviews</span>
                      </div>

                      <div className="">
                        <span className="text-red-500 text-[18px] sm:text-[24px] font-bold">
                          ₹{productData.discountedPrice}
                        </span>
                        <span className="pl-3 line-through sm:text-[20px] text-[16px] opacity-65">
                          ₹{productData.price}
                        </span>
                        <span className="text-emerald-500 text-[14px] sm:text-[18px] pl-2 ">
                          ({productData.discount} % OFF)
                        </span>
                      </div>

                      <div className="sm:text-[16px] text-[13px] mt-3 text-gray-700">
                        {productData.description}
                      </div>

                      <div className="pt-5 flex sm:text-xl text-[13px] gap-2 font-semibold">
                        {/* <label className="p-3 sm:p-1">Quantity</label>
                        <input
                          className="w-[100px] h-[35px] border border-gray-300 rounded-md text-center"
                          min={1}
                          max={6}
                          type="number"
                          placeholder="Qty"
                        /> */}
                      </div>

                      <div className="productdisplay-right-size mt-5 pb-6">
                        <h4 className="text-[16px] font-medium">Size</h4>
                        <p className="sm:text-[16px] text-[13px]">
                          Length: {productData.sizelength}
                        </p>
                        <p className="sm:text-[16px] text-[13px]">
                          Width: {productData.sizewidth}
                        </p>
                      </div>

                      <div className="flex gap-3 pr-3">
                        <button
                          onClick={() => {
                            buyNow(productData._id);
                            navigate("/checkout");
                          }}
                          type="button"
                          className="flex items-center justify-center sm:w-[140px] sm:h-[50px] h-[40px] bg-red-400 hover:bg-red-500 text-white rounded-full shadow-md transition duration-200"
                        >
                          <span className="sm:text-[16px] text-[13px] font-medium">
                            Buy Now
                          </span>
                        </button>

                        <button
                          onClick={() => {
                            addToCart(productData._id);
                          }}
                          type="button"
                          className="flex items-center justify-center sm:w-[140px] sm:h-[50px] h-[40px] bg-red-400 hover:bg-red-500 text-white rounded-full shadow-md transition duration-200"
                        >
                          <span className="sm:text-[16px] text-[13px] font-medium">
                            Add to Cart
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <RelatedProduct productId={productId} />
                <Reviews />
              </div>
            </div>
          </div>
        )
      )}
      <ChatBox />
    </>
  );
};

export default ProductDisplay;
