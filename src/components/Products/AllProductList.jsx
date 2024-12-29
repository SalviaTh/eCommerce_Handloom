import React from "react";
import { CloudinaryConfig } from "../../../Cloudinary";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Rating, ScrollArea } from "@mantine/core";

import { useWishlist } from "../../hooks/useWistlist";

export default function AllProductList({ AllProduct }) {
  const navigate = useNavigate();
  const { isInWishlists, toggleWishlist } = useWishlist();

  const displayedProducts = AllProduct?.products?.slice(0, 20);
  return (
    <div className="mb-6 sm:mt-2 p-3">
      {/* <ScrollArea type="never" h={400}> */}
      <div className="grid grid-cols-2 p-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {displayedProducts?.map((p) => {
          return (
            <div
              className="group shadow-md hover:shadow-lg border border-gray-400 sm:p-3 p-2 rounded-md"
              key={p._id}
            >
              <div className="relative">
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                <img
                  onClick={() => navigate(`/product/${p._id}`)}
                  src={`${
                    CloudinaryConfig.CLOUDINARY_URL
                  }/image/upload/${p?.image_id[0]?.replace(/"/g, "")}`}
                  alt={p.name}
                  className="sm:h-52 sm:w-[240px] w-[150px] h-[170px] object-cover rounded-md"
                />
                <button
                  onClick={() => toggleWishlist(p._id)}
                  type="button"
                  className="absolute top-2 right-2 bg-slate-50 p-[5px] sm:p-[8px] rounded-full"
                >
                  <FaHeart
                    className={
                      isInWishlists(p._id) ? "text-red-600" : "text-gray-400"
                    }
                  />
                </button>
              </div>
              <div className="w-full flex justify-between sm:p-2 mt-2">
                <div className="sm:text-[16px] text-[12px] text-black ">
                  <p>{p.name}</p>
                  <div className="flex items-center gap-3 py-2">
                    <Rating value={p?.averageRating} fractions={2} />
                    <span className="text-orange-500 sm:text-sm text-[10px]">
                      ({p?.totalReviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-[13px] sm:text-[15px]  line-through opacity-65">
                      ₹{p.price}
                    </p>
                    <p className="text-red-500  sm:text-[15px] text-[14px]">
                      ₹{p.discountedPrice}
                    </p>
                    <p className="text-emerald-500 sm:text-[13px] text-[11px]">
                      ({p.discount} % OFF)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
