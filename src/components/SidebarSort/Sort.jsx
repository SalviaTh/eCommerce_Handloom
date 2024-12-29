import React, { useState } from "react";
import PricesSort from "./PricesSort";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { Axios } from "../../../api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const getCollectionName = async (categoryId, subcategoryId) => {
  const url = subcategoryId
    ? `/product/sorted/${categoryId}/${subcategoryId}`
    : `/product/sorted/${categoryId}`;

  const res = await Axios.get(url);
  return res.data.collections;
};

const Sort = ({
  prices,
  handleSelectPrice,
  selectPriceRange,
  filteredProduct,
}) => {
  const { categoryId, subcategoryId } = useParams();
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  const {
    data: collectionData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["collectionsort", categoryId, subcategoryId],
    queryFn: () => getCollectionName(categoryId, subcategoryId),
    enabled: !!categoryId,
  });

  return (
    <div className="bg-white p-2 sm:min-h-[calc(100vh-120px)] border border-black">
      {/* Collection Section */}
      <div className="w-full md:w-auto">
        <div className="flex items-center justify-between md:justify-start">
          <h3 className="sm:text-lg text-[13px] uppercase font-medium text-slate-500 border-b pb-1 border-slate-300">
            Collection
          </h3>
          <button
            type="button"
            className="md:hidden text-slate-500"
            onClick={() => setIsCollectionOpen(!isCollectionOpen)}
            aria-label="Toggle Collection Dropdown"
          >
            {isCollectionOpen ? (
              <RiArrowDropUpLine size={30} />
            ) : (
              <RiArrowDropDownLine size={30} />
            )}
          </button>
        </div>
        <form
          className={`text-sm flex flex-col gap-2 py-2 ${
            isCollectionOpen ? "block" : "hidden"
          } md:block`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center py-4">
              <p className="text-[15px] font-semibold text-gray-500 animate-pulse">
                Loading collections...
              </p>
            </div>
          ) : isError ? (
            <div className="flex justify-center items-center py-4">
              <p className="text-[15px] font-semibold text-red-500">
                No collections.
              </p>
            </div>
          ) : (
            collectionData?.map((collection, index) => (
              <div key={index} className="flex items-center gap-3 p-2 md:p-0">
                <input
                  type="checkbox"
                  name="collection"
                  value={`${collection.name}`}
                  id={collection._id}
                  className="w-4 h-4"
                />
                <label htmlFor={collection._id} className="text-xs md:text-sm">
                  {collection}
                </label>
              </div>
            ))
          )}
        </form>
      </div>

      <PricesSort
        prices={prices}
        filteredProduct={filteredProduct}
        handleSelectPrice={handleSelectPrice}
        selectPriceRange={selectPriceRange}
      />
    </div>
  );
};

export default Sort;
