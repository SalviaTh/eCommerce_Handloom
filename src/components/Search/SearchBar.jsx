import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Axios } from "../../../api";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await Axios({
          url: "/product/allproduct",
          method: "GET",
        });
        setProducts(res.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearchProduct(value);

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.category?.name.toLowerCase().includes(value.toLowerCase()) ||
        product.subcategory?.subCategoryName
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        product.collection?.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchProduct) {
      navigate(`/search/${searchProduct}`);
      setSearchProduct("");
    }
  };

  const handleProductClick = (product) => {
    setSearchProduct("");
    setFilteredProducts([]);
    navigate(`/search/${product.name}`);
  };

  return (
    <div className="relative group sm:block">
      <input
        type="text"
        placeholder="Search for products"
        className="search-bar"
        value={searchProduct}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <FaSearch
        onClick={() => {
          if (searchProduct) {
            navigate(`/search/${searchProduct}`);
            setSearchProduct("");
          }
        }}
        className="text-xl text-gray-600 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 duration-200 cursor-pointer"
      />

      {searchProduct && filteredProducts.length > 0 && (
        <div className="dropdown mt-2">
          {filteredProducts.map((product) => (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              key={product.id}
              className="dropdown-item cursor-pointer hover:bg-red-400"
              onClick={() => handleProductClick(product)}
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
