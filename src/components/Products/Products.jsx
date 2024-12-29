import React, { useEffect, useState } from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import { Axios } from "../../../api";
import { useQuery } from "@tanstack/react-query";
import MenProduct from "./MenProduct";
import AllProductList from "./AllProductList";
import { Spinner } from "./Spinner";

const Products = () => {
  const [products, setProducts] = useState();
  const [wishlistUpdate, setWishlistUpdate] = useState(false);
  const [filteredWomenProductList, setFilterWomnenProductList] = useState([]);
  const [filteredMenProductList, setFilterMenProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllProduct = async () => {
    try {
      setLoading(true);
      const res = await Axios({
        url: "/product/allproduct",
        method: "GET",
      });
      setProducts(res.data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const { data: productList, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
  });

  // Filter Men and Women products
  const filteredProduct = () => {
    if (productList?.products) {
      const filteredWomenProduct = productList?.products?.filter(
        (productListItem) => productListItem?.gender === "Female"
      );
      setFilterWomnenProductList(filteredWomenProduct);

      const filteredMenProduct = productList?.products?.filter(
        (productListItem) => productListItem?.gender === "Male"
      );
      setFilterMenProductList(filteredMenProduct);
    }
  };

  useEffect(() => {
    filteredProduct();
  }, [productList]);

  useEffect(() => {
    getAllProduct();
  }, [wishlistUpdate]);

  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl min-h-[500px] sm:min-h-[650px] flex items-center flex-col pt-6 gap-y-3.5">
      <div>
        <Heading title="Latest Products" subtitle={"Explore our products"} />
        <AllProductList
          AllProduct={productList}
          type="all"
          setWishlistUpdate={setWishlistUpdate}
        />
      </div>

      <div>
        <Heading title="Men Products" subtitle={"Explore our men products"} />
        <MenProduct
          filteredMenProductList={filteredMenProductList}
          type="men"
          setWishlistUpdate={setWishlistUpdate}
        />
      </div>

      <div>
        <Heading
          title="Women Products"
          subtitle={"Explore our women products"}
        />
        <ProductCard
          filteredWomenProductList={filteredWomenProductList}
          product={productList?.products.map((product) => product)}
          type="women"
          setWishlistUpdate={setWishlistUpdate}
        />
      </div>
    </div>
  );
};

export default Products;
