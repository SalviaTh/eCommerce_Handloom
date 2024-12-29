import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CloudinaryConfig } from "../../../Cloudinary";
import { fetchProducts } from "../../BaseURL/Product";
import { Link, useNavigate } from "react-router-dom";

const PriceStores = () => {
  const navigate = useNavigate();
  const [filterItems, setFilterItems] = useState([]);

  const {
    data: productData = {},
    isLoading: isLoadingProducts,
    isError: isProductError,
    error: productError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const productLists = productData.products || [];

  const filteredProducts = () => {
    return productLists.filter((product) => product.discountedPrice <= 2000);
  };

  useEffect(() => {
    const filtered = filteredProducts();
    // Sort products by discountedPrice in ascending order
    const sorted = filtered.sort(
      (a, b) => a.discountedPrice - b.discountedPrice
    );
    setFilterItems(sorted);
  }, [productLists]);

  return (
    <div className="p-2 drop-shadow-md">
      <div className="overflow-hidden rounded-xl sm:h-[450px] h-[340px] ">
        <h1 className="gap-4 flex justify-start items-start text-base sm:text-xl font-semibold text-black  p-2">
          Product price below
          <p className="text-[20px] sm:text-[25px] text-red-500">₹2000 </p>
        </h1>
        <div className="overflow-x-scroll scrollbar-hide flex space-x-4 pb-2 scroll-smooth">
          <div className="flex sm:gap-5 gap-3 p-2">
            {filterItems?.map((item) => (
              <div
                key={item._id}
                className="bg-gray-100 drop-shadow-md rounded-md sm:w-[250px] sm:h-[340px] w-[180px] h-[275px] flex flex-col items-center"
              >
                {/* Image Section */}
                <div className="w-full flex justify-center pt-2">
                  <img
                    onClick={() => navigate(`/product/${item._id}`)}
                    className="sm:w-52 sm:h-52 w-[150px] h-[170px] object-cover rounded-md cursor-pointer"
                    src={`${
                      CloudinaryConfig.CLOUDINARY_URL
                    }/image/upload/${item?.image_id[0]?.replace(/"/g, "")}`}
                    alt={item.name}
                  />
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-between w-full p-3">
                  <div className="text-black pl-3 sm:text-[16px] text-[12px]">
                    <p className="truncate">{item.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="line-through text-gray-500 sm:text-[15px] text-[13px]">
                        ₹{item.price}
                      </p>
                      <p className="text-red-500 font-bold sm:text-[18px] text-[15px]">
                        ₹{item.discountedPrice}
                      </p>
                      <p className="text-emerald-500 sm:text-[13px] text-[11px] mt-1">
                        ({item.discount}% OFF)
                      </p>
                    </div>
                  </div>

                  {/* View Button */}
                  <button
                    onClick={() => navigate(`/product/${item._id}`)}
                    type="button"
                    className="bg-red-500 hover:bg-red-600 text-white rounded-md sm:mt-3 mt-2  sm:h-[38px] w-full h-7 sm:text-[16px] text-[12px]"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceStores;
