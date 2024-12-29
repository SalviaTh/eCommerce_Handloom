import React, { useContext, useState, useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { ShopContext } from "../Context/ShopContext";
import { BsFillArchiveFill } from "react-icons/bs";
import { useAuth } from "../Context/auth";
import { Tooltip, Button } from "@mantine/core";
import { BsFillBoxFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { Avatar } from "@mantine/core";
import { X, Menu } from "lucide-react";
import { Axios } from "../../../api";
import SearchBar from "../Search/SearchBar";
import CategoryOption from "./CategoryOption";
import WomenCategoryOption from "./WomenCategoryOption";
import MenCategoryOption from "./MenCategoryOption";
import HandicraftOption from "./HandicraftOption";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getAllCategory = async () => {
    try {
      const res = await Axios({
        url: "/category",
        method: "GET",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const { data: menCategory, isLoading } = useQuery({
    queryKey: ["menCategory"],
    queryFn: () =>
      Axios({
        url: "/category?gender=male&isProductForKids=false",
        method: "GET",
      }),
  });
  //men
  const menCategories = menCategory?.data?.categories || [];
  const filteredMen = menCategories
    .filter((category) => category.gender?.toLowerCase() === "male")
    .sort((a, b) => a.name?.localeCompare(b.name));

  const { data: womenCategory } = useQuery({
    queryKey: ["womenCategory"],
    queryFn: () =>
      Axios({
        url: "/category?gender=female&isProductForKids=false",
        method: "GET",
      }),
  });
  //women
  const womenCategories = womenCategory?.data?.categories || [];
  const filteredWomen = womenCategories
    .filter((category) => category.gender?.toLowerCase() === "female")
    .sort((a, b) => a.name?.localeCompare(b.name));

  const { data: kidsCategory } = useQuery({
    queryKey: ["kidsCategory"],
    queryFn: () =>
      Axios({
        url: "/category?isProductForKids=true",
        method: "GET",
      }),
  });
  const kidsCategories = kidsCategory?.data?.categories || [];
  const filteredKids = kidsCategories.sort((a, b) =>
    a.name?.localeCompare(b.name)
  );

  const { data: handicraftCategory } = useQuery({
    queryKey: ["handicraftCategory"],
    queryFn: () =>
      Axios({
        url: "/category?gender=neutral&isProductForKids=false",
        method: "GET",
      }),
  });

  const handicraftCategories = handicraftCategory?.data?.categories || [];
  const filteredHandicraft = handicraftCategories
    .filter((category) => category.gender?.toLowerCase() === "neutral")
    .sort((a, b) => a.name?.localeCompare(b.name));

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <>
      <div className=" bg-white duration-200 z-40 fixed top-0 right-0 left-0">
        <div className=" p-2 relative ">
          <div className=" container flex justify-between items-center sm:text-[16px] ">
            <div className="flex items-center gap-7 ">
              <NavLink to="/" onClick={handleScrollToTop}>
                <img
                  className=" object-contain w-[100px] sm:h-[60px] h-[50px]"
                  src="/logo.png"
                  alt=""
                />
              </NavLink>
              <div className="hidden lg:block  ">
                <ul className="  flex items-center font-semibold gap-4 ">
                  <li className="relative cursor-pointer group   ">
                    <span className="  flex items-center text-[16px] mt-1">
                      <MenCategoryOption title="MEN" />
                    </span>

                    <div className=" absolute z-[9999] hidden group-hover:block text-red-400">
                      <MenCategoryOption filteredMen={filteredMen} />
                    </div>
                  </li>

                  <li className="relative cursor-pointer group  ">
                    <span className="flex items-center text-[16px] mt-1">
                      <WomenCategoryOption title="WOMEN" />
                    </span>

                    <div
                      className="absolute z-[9999] hidden group-hover:block text-red-400 "
                      style={{ marginLeft: "-70px" }}
                    >
                      <WomenCategoryOption filteredWomen={filteredWomen} />
                    </div>
                  </li>

                  <li className="relative cursor-pointer group  ">
                    <span className="flex items-center text-[16px] mt-1">
                      <CategoryOption title="KIDS" />
                    </span>

                    <div
                      className="absolute z-[9999] hidden group-hover:block  "
                      style={{ marginLeft: "-170px" }}
                    >
                      <CategoryOption filteredKids={filteredKids} />
                    </div>
                  </li>
                  <li className="relative cursor-pointer group  ">
                    <span className="flex items-center text-[16px] mt-1">
                      <HandicraftOption title="HANDICRAFT" />
                    </span>

                    <div
                      className="absolute z-[9999] hidden group-hover:block  "
                      style={{ marginLeft: "-240px" }}
                    >
                      <HandicraftOption
                        filteredHandicraft={filteredHandicraft}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* navbar right section */}
            <div className="flex justify-between items-center gap-2">
              {/* Search bar section */}
              <SearchBar />

              {/* Hamburger menu button */}
              <button
                type="button"
                onClick={toggleSidebar}
                className="text-black rounded-md md:hidden"
              >
                {!isOpen && <Menu />}
              </button>

              {/* Sidebar */}
              <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 h-full w-64 md:w-80 lg:w-96 bg-white text-red-400 transform transition-transform duration-300 ease-in-out ${
                  isOpen
                    ? "translate-x-0 border border-gray-200"
                    : "-translate-x-full"
                }`}
              >
                <div className="p-4">
                  <div className="flex justify-between">
                    <NavLink
                      to="/"
                      className="text-primary tracking-widest uppercase sm:text-3xl"
                    >
                      <img
                        className="w-[55px] h-[50px] object-contain mb-3"
                        src="/logo.png"
                        alt="Logo"
                      />
                    </NavLink>
                    <button
                      type="button"
                      onClick={toggleSidebar}
                      className="text-black rounded-md md:hidden"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <hr className="h-[2px] bg-gray-500" />
                  <nav>
                    <ul className="space-y-2">
                      <li>
                        <MenCategoryOption
                          title="MEN"
                          filteredMen={filteredMen}
                          toggleSidebar={toggleSidebar}
                        />
                      </li>
                      <li>
                        <WomenCategoryOption
                          title="WOMEN"
                          filteredWomen={filteredWomen}
                          toggleSidebar={toggleSidebar}
                        />
                      </li>
                      <li>
                        <CategoryOption
                          title="KIDS"
                          filteredKids={filteredKids}
                          toggleSidebar={toggleSidebar}
                        />
                      </li>
                      <li>
                        <HandicraftOption
                          title="HANDICRAFT"
                          filteredHandicraft={filteredHandicraft}
                          toggleSidebar={toggleSidebar}
                        />
                      </li>
                      <li>
                        <NavLink
                          to="/cart"
                          className="flex items-center space-x-2 p-2 rounded-md hover:bg-red-300"
                        >
                          <FaShoppingCart size={20} />
                          <span>Cart</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/wishlist"
                          className="flex items-center space-x-2 p-2 rounded-md hover:bg-red-300"
                        >
                          <GrFavorite size={20} />
                          <span>Wishlist</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/myorder"
                          className="flex items-center space-x-2 p-2 rounded-md hover:bg-red-300"
                        >
                          <BsFillArchiveFill size={20} />
                          <span>Orders</span>
                        </NavLink>
                        <NavLink
                          to="/sellOn"
                          className="flex items-center space-x-2 p-2 rounded-md hover:bg-red-300"
                        >
                          <BsFillBoxFill size={20} />
                          <span>Become a Seller</span>
                        </NavLink>
                        <NavLink
                          to="/login"
                          className="flex items-center space-x-2 p-2 rounded-md hover:bg-red-300"
                        >
                          <Avatar size={25} color="red" />
                          <span>Sign In</span>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* end */}
              <div className="hidden md:block ">
                <div className="flex justify-center items-center gap-2">
                  <Tooltip className="bg-red-500" label="carts">
                    <NavLink to="/cart" type="button" className="relative p-3">
                      <label htmlFor="">Bags</label>
                      <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                        {getTotalCartItems()}
                      </div>
                    </NavLink>
                  </Tooltip>
                  <Tooltip className="bg-red-500" label="Wishlist">
                    <NavLink
                      to="/wishlist"
                      type="button"
                      className="relative p-3"
                    >
                      <label htmlFor="">Wishlist</label>
                    </NavLink>
                  </Tooltip>

                  {/* {auth?.token && ( */}
                  <Tooltip className="bg-red-500" label="Orders">
                    <NavLink to="/myorder" type="button" className="relative ">
                      {/* <BsFillArchiveFill className="text-xl text-gray-600 dark:text-gray-400" /> */}
                      <label htmlFor="">Orders</label>
                    </NavLink>
                  </Tooltip>
                  {/* )} */}
                  {/* {!auth.token ? ( */}

                  <div className="relative group">
                    <NavLink to="/login" className="relative p-2">
                      <button type="button" className="focus:outline-none">
                        <Avatar src={null} alt="User Avatar" color="red" />
                      </button>
                    </NavLink>

                    {/* Dropdown Menu */}
                    <div className="absolute left-1/2 transform -translate-x-1/2  w-60 lg:w-72 xl:w-80 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 hidden z-10">
                      <div className="p-4">
                        <NavLink
                          to="/login"
                          className="ml-24 mt-8 bg-red-500  hover:underline text-white  p-2 rounded-lg font-medium transition duration-300"
                        >
                          Your Account
                        </NavLink>
                        <p className="text-[14px] mt-2 pl-12">
                          New customer?
                          <NavLink
                            to="/signup"
                            className="underline text-blue-500"
                          >
                            {" "}
                            Start here.
                          </NavLink>
                        </p>
                        <NavLink
                          to="/myorder"
                          className="block text-gray-700 hover:bg-gray-100 p-2 rounded-lg font-medium transition duration-300"
                        >
                          Your Orders
                        </NavLink>
                        <NavLink
                          to="/wishlist"
                          className="block text-gray-700 hover:bg-gray-100 p-2 rounded-lg font-medium transition duration-300"
                        >
                          Your Wish List
                        </NavLink>
                        <NavLink
                          to="/"
                          className="block text-gray-700 hover:bg-gray-100 p-2 rounded-lg font-medium transition duration-300"
                        >
                          Your Recommendations
                        </NavLink>
                        <NavLink
                          to="/sellOn"
                          className="block text-gray-700 hover:bg-gray-100 p-2 rounded-lg font-medium transition duration-300"
                        >
                          Your Seller Account
                        </NavLink>
                        <NavLink
                          to="/privacypolicy"
                          className="block text-gray-700 hover:bg-gray-100 p-2 rounded-lg font-medium transition duration-300"
                        >
                          Manage Your Content and Devices
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  {/* ) : ( */}
                  {/* <button
                      type="button"
                      className="bg-white w-[80px] h-[30px] outline-black border  dark:text-white dark:bg-black hover:bg-red-500 duration-[3000ms]"
                      onClick={() => {
                        localStorage.removeItem("auth");
                        setAuth({
                          message: "",
                          token: "",
                        });
                      }}
                    >
                      Logout
                    </button>
                  )} */}
                  <NavLink to="/sellOn">
                    <Button
                      className="text-white px-2 py-[-2px]  "
                      variant="filled"
                      color="green"
                    >
                      <BsFillBoxFill className="m-1" />
                      Seller
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
