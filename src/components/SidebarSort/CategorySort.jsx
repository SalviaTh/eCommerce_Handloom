import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CloudinaryConfig } from "../../../Cloudinary";
import { Rating, Skeleton } from "@mantine/core";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../../hooks/useWistlist";
import Sort from "./Sort";
import Navbar from "../Navbar/Navbar";
import ChatBox from "../Chat/ChatBox";
import Footer from "../Footer/Footer";
import { fetchProducts } from "../../BaseURL/Product";
import { Axios } from "../../../api";

const getPriceRanges = async () => {
  const res = await Axios.get("/pricerange/getpriceranges");
  return res.data;
};

// const getFilteredPrice = async (subcategory, priceRange) => {
//   const url = `/product/filterbyprice/${subcategory}/${priceRange}`;
//   const res = await Axios.get(url);
//   return res.data.products;
// };
const getFilteredPrice = async (categoryId, subcategoryId, priceRange) => {
  const url = `/product/filterbyprice/${categoryId}/${subcategoryId}/${priceRange}`;
  const res = await Axios.get(url);
  return res.data.products;
};

const CategorySort = React.memo(() => {
  const { categoryId, subcategoryId } = useParams();
  const navigate = useNavigate();
  const [selectPriceRange, setSelectPriceRange] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const {
    data: prices,
    isLoading: priceLoading,
    isError: priceError,
  } = useQuery({
    queryKey: ["priceranges"],
    queryFn: getPriceRanges,
    staleTime: 1000 * 60 * 5,
  });

  const { data: filteredProduct = [] } = useQuery({
    queryKey: ["filteredPrices", categoryId, subcategoryId, selectPriceRange],
    queryFn: () =>
      getFilteredPrice(categoryId, subcategoryId, selectPriceRange),
    enabled: selectPriceRange !== "", // Query enabled only when a price range is selected
    staleTime: 1000 * 60 * 5,
  });

  const handleSelectPrice = (priceRange) => {
    setSelectPriceRange(priceRange);
    setCurrentPage(1);
  };

  const { data: products = [] } = useQuery({
    queryKey: ["categoryproductsort"],
    queryFn: fetchProducts,
  });

  const productsArray = products?.products || [];
  // const productDetails = productsArray.filter(
  //   (product) => product.category && product.category._id === categoryId
  // );
  const productDetails = productsArray.filter((product) => {
    return (
      product.category &&
      product.category._id === categoryId &&
      (subcategoryId
        ? product.subcategory && product.subcategory._id === subcategoryId
        : true)
    );
  });

  const handleNavigate = (productId) => {
    navigate(`/product/${productId}`);
  };

  const { isInWishlists, toggleWishlist } = useWishlist();

  const paginateProducts = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(
    (selectPriceRange ? filteredProduct : productDetails).length / itemsPerPage
  );

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <div className="pt-16">
        <div className="overflow-hidden min-h-[550px] sm:min-h-[650px] pb-5 flex justify-start">
          <div className="sm:p-2 pl-6 pr-5 mt-4">
            <div className="lg:grid grid-cols-[250px,1fr] gap-3">
              <Sort
                prices={prices}
                handleSelectPrice={handleSelectPrice}
                isError={priceError}
                isLoading={priceLoading}
                selectPriceRange={selectPriceRange}
                filteredProduct={filteredProduct}
              />

              <div>
                {priceLoading ? (
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:pl-2 pt-4">
                    {[...Array(8)].map((_, index) => (
                      <Skeleton
                        key={index}
                        height={200}
                        width="100%"
                        radius="md"
                        className="sm:h-[230px] sm:w-[250px] w-[160px] h-[170px] bg-gray-200 mb-4"
                      />
                    ))}
                  </div>
                ) : paginateProducts(
                    selectPriceRange ? filteredProduct : productDetails
                  ).length > 0 ? (
                  <>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:pl-2 pt-3">
                      {paginateProducts(
                        selectPriceRange ? filteredProduct : productDetails
                      ).map((product) => (
                        <div
                          className="group shadow-md hover:shadow-lg border border-gray-400 sm:p-3 p-2 rounded-md"
                          key={product._id}x
                        >
                          <div className="relative">
                            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                            <img
                              onClick={() => handleNavigate(product._id)}
                              src={`${
                                CloudinaryConfig.CLOUDINARY_URL
                              }/image/upload/${product?.image_id[0]?.replace(
                                /"/g,
                                ""
                              )}`}
                              alt="Product"
                              className="cursor-pointer sm:h-52 sm:w-[240px] w-[150px] h-[170px] object-cover rounded-md"
                            />
                            <button
                              onClick={(e) => toggleWishlist(product._id)}
                              type="button"
                              className="absolute top-2 right-2 bg-slate-50 p-[5px] sm:p-[8px] rounded-full"
                            >
                              <FaHeart
                                className={
                                  isInWishlists(product._id)
                                    ? "text-red-600"
                                    : "text-gray-400"
                                }
                              />
                            </button>
                          </div>
                          <div className="w-full flex justify-between sm:p-1 mt-2">
                            <div className="sm:text-[16px]  text-[12px] text-black">
                              <p className="w-full ">{product.name}</p>
                              <div className="flex items-center gap-3 py-2">
                                <Rating
                                  value={product?.averageRating}
                                  fractions={2}
                                />
                                <span className="text-orange-500 sm:text-sm text-[10px]">
                                  ({product?.totalReviews})
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="text-[13px] sm:text-[15px] line-through opacity-65">
                                  ₹{product.price}
                                </p>
                                <p className="text-red-500 sm:text-[15px] text-[14px]">
                                  ₹{product.discountedPrice}
                                </p>
                                <p className="text-emerald-500 sm:text-[13px] text-[11px]">
                                  ({product.discount} % OFF)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-center mt-32 gap-2 items-center ">
                      {/* First Page Arrow */}
                      <button
                        type="button"
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded-md ${
                          currentPage === 1
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        &laquo;
                      </button>

                      {/* Previous Page Arrow */}
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded-md ${
                          currentPage === 1
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        &lt;
                      </button>

                      {/* Dynamically Display Page Numbers */}
                      {Array.from(
                        { length: Math.min(3, totalPages) },
                        (_, index) => {
                          const startPage = Math.max(
                            Math.min(currentPage - 2, totalPages - 3 + 1),
                            1
                          );
                          const page = startPage + index;

                          return (
                            // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                            page <= totalPages && (
                              // biome-ignore lint/a11y/useButtonType: <explanation>
                              <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded-md ${
                                  currentPage === page
                                    ? "bg-red-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                              >
                                {page}
                              </button>
                            )
                          );
                        }
                      )}

                      {/* Next Page Arrow */}
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 rounded-md ${
                          currentPage === totalPages
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        &gt;
                      </button>

                      {/* Last Page Arrow */}
                      <button
                        type="button"
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 rounded-md ${
                          currentPage === totalPages
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        &raquo;
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center w-full min-h-[calc(100vh-200px)] sm:p-36 sm:pt-10 pb-20">
                    <div className="flex flex-col items-center bg-white  p-6 sm:p-8  w-full max-w-3xl text-center">
                      <img
                        src="/nofound.png"
                        alt="No products found"
                        className="w-24 h-20 sm:w-32 sm:h-24 mb-4"
                      />
                      <p className="text-gray-800 font-semibold text-lg sm:text-xl mb-2">
                        No Products Available for products.
                      </p>
                      <p className="text-gray-500 text-sm sm:text-base mb-4">
                        We're sorry, but no products are available for this
                        category. Check back later.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <ChatBox />
        <Footer />
      </div>
    </div>
  );
});

export default CategorySort;
