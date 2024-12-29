import React, { useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useParams } from "react-router-dom";

const PricesSort = ({
  prices,
  filteredProduct,
  selectPriceRange,
  handleSelectPrice,
  isLoading,
  isError,
}) => {
  const { categoryId, subcategoryId } = useParams();

  const [isPricesOpen, setIsPricesOpen] = useState(false);

  const handlePriceSelection = (value) => {
    handleSelectPrice(value);
    setIsPricesOpen(false);
  };

  return (
    <div>
      <div className="w-full md:w-auto mt-4">
        <div className="flex items-center justify-between md:justify-start">
          <h3 className="sm:text-lg text-[13px] uppercase font-medium text-slate-500 border-b pb-1 border-slate-300">
            Prices
          </h3>

          <button
            type="button"
            className="md:hidden text-slate-500"
            onClick={() => setIsPricesOpen(!isPricesOpen)}
            aria-label="Toggle Sort By Dropdown"
          >
            {isPricesOpen ? (
              <RiArrowDropUpLine size={30} />
            ) : (
              <RiArrowDropDownLine size={30} />
            )}
          </button>
        </div>
        <form
          className={`text-sm flex flex-col gap-2 py-2 ${
            isPricesOpen ? "block" : "hidden"
          } md:block`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center py-4">
              <p className="text-[15px] font-semibold text-gray-500 animate-pulse">
                Loading prices...
              </p>
            </div>
          ) : isError ? (
            <div className="flex justify-center items-center py-4">
              <p className="text-[15px] font-semibold text-red-500">
                Failed to load prices.
              </p>
            </div>
          ) : prices?.length > 0 ? (
            prices?.map((price) => (
              <div
                key={price._id}
                className="flex items-center gap-3 p-2 md:p-0"
              >
                <input
                  type="radio"
                  name="price"
                  value={`${price.price_lower}-${price.price_upper}`}
                  onChange={(e) => handlePriceSelection(e.target.value)}
                  id={price._id}
                  className="w-4 h-4"
                />
                <label htmlFor={price._id} className="text-xs md:text-sm">
                  ₹ {price?.price_lower}-₹ {price?.price_upper}
                </label>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center py-4">
              <p className="text-[15px] font-semibold text-gray-500">
                No price ranges available.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PricesSort;
