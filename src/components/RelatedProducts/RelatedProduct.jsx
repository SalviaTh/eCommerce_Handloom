import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CloudinaryConfig } from "../../../Cloudinary";
import { fetchProducts } from "../../BaseURL/Product";
import { Rating } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { ScrollArea, Box } from "@mantine/core";
import { useWishlist } from "../../hooks/useWistlist";

const RelatedProduct = ({ productId }) => {
  const [currentProductId, setCurrentProductId] = useState(productId);
  const navigate = useNavigate();
  const { isInWishlists, toggleWishlist } = useWishlist();
  const {
    data: relatedproducts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["relatedproduct"],
    queryFn: fetchProducts,
  });

  const currentProduct = relatedproducts?.products?.find(
    (product) => product._id === currentProductId
  );

  let relatedProducts = [];
  if (currentProduct) {
    relatedProducts = relatedproducts?.products?.filter((product) => {
      // Ensure product.subcategory exists before accessing category
      const subcategoryMatch =
        product.subcategory &&
        product.subcategory._id === currentProduct.subcategory._id;
      const isDifferentProduct = product._id !== currentProduct._id;

      return subcategoryMatch && isDifferentProduct;
    });
  }

  console.log("related", relatedProducts);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentProductId]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[200px]">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-700">Loading, Please wait...</p>
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching products</div>;
  }

  const handleOnclickProduct = (productId) => {
    setCurrentProductId(productId);
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <h1 className="text-center sm:text-[24px] font-semibold underline text-gray-800">
        Related Products
      </h1>
      <div className="overflow-x-scroll scrollbar-hide flex space-x-4 pb-2 scroll-smooth">
        <div className="flex flex-grow gap-2 p-3 sm:pl-4 mt-2 pb-5">
          {relatedProducts?.length > 0 ? (
            relatedProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white sm:h-[350px] sm:w-[250px] h-[300px] w-[180px] shadow-lg transition-shadow duration-300 border border-gray-400 rounded-lg overflow-hidden p-3 flex flex-col items-center"
              >
                <div className="relative">
                  {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                  <img
                    onClick={() => {
                      handleOnclickProduct(product._id);
                    }}
                    className="sm:h-52 sm:w-[240px] w-[150px] h-[170px] object-cover rounded-md"
                    src={`${
                      CloudinaryConfig.CLOUDINARY_URL
                    }/image/upload/${product?.image_id[0]?.replace(/"/g, "")}`}
                    alt={product.name}
                  />
                  <button
                    onClick={(e) => {
                      toggleWishlist(product._id);
                    }}
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
                <div className="w-full flex justify-between sm:p-2 pt-2">
                  <div className="sm:text-[16px] text-[12px] text-black">
                    <p className="">{product.name}</p>
                    <div className="flex items-center gap-3 py-2">
                      <Rating value={product?.averageRating} fractions={2} />
                      <span className="text-orange-500 sm:text-sm text-[10px]">
                        ({product?.totalReviews})
                      </span>
                    </div>
                    <div className="flex w-full  ">
                      <p className="text-[13px] sm:text-[15px]  pr-2 line-through opacity-65">
                        ₹{product.price}
                      </p>
                      <p className="text-red-500 pr-1 sm:text-[16px] text-[14px]">
                        ₹{product.discountedPrice}
                      </p>
                      <p className="text-emerald-500 sm:text-[13px] text-[11px]">
                        ({product.discount} % OFF)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center text-center text-gray-700 bg-gray-50 border border-gray-200 rounded-lg shadow-md col-span-full w-full py-8">
              <div className="flex flex-col items-center">
                <p className="text-lg font-semibold mb-2">
                  No Related Products Found
                </p>
                <p className="text-sm text-gray-500">
                  Please try searching for any products or check back later.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RelatedProduct;
