import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function HandicraftOption({
  title,
  filteredHandicraft,
  toggleSidebar,
}) {
  const [showCategories, setShowCategories] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (categoryId) => {
    setOpenCategoryId(openCategoryId === categoryId ? null : categoryId);
  };

  const handleHandicraftClick = () => {
    setShowCategories((prev) => !prev);
  };

  return (
    <div className="relative w-full bg-white">
      <p
        className="sm:hidden cursor-pointer p-3  text-lg text-red hover:bg-gray-100"
        onClick={handleHandicraftClick}
      >
        {title}
      </p>

      {/* MOBILE VIEW */}
      {isMobile && showCategories && (
        <div className="w-full bg-white border-t">
          {filteredHandicraft?.map((category) => (
            <div key={category._id} className="border-b">
              {/* Category Header */}
              <div
                className="flex justify-between items-center cursor-pointer p-3 hover:bg-gray-100 transition-all duration-200"
                onClick={() => handleCategoryClick(category._id)}
              >
                <span className="font-medium text-gray-800">
                  {category.name}
                </span>

                {openCategoryId === category._id ? (
                  <FaChevronDown size={14} />
                ) : (
                  <FaChevronRight size={14} />
                )}
              </div>

              {/* Subcategories with Slide-Down Effect */}
              <ul
                className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                  openCategoryId === category._id ? "max-h-40" : "max-h-0"
                }`}
              >
                {category?.subCategories?.map((subcategory) => (
                  <li
                    key={subcategory._id}
                    className="p-2 pl-6 hover:bg-gray-50"
                  >
                    <NavLink
                      to={`/sorted/${category._id}/${subcategory._id}`}
                      className="block text-gray-700 hover:text-red-500"
                      onClick={() => toggleSidebar()}
                    >
                      {subcategory.subCategoryName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* LAPTOP VIEW */}
      {!isMobile && (
        <div className="group relative">
          {/* Main title (category) */}
          <p className="cursor-pointer p-2 text-lg hover:bg-red-500">{title}</p>
          {/* Dropdown for subcategories */}
          <div className="hidden group-hover:grid absolute left-0 top-0 z-10 bg-gray-50 px-4 grid-cols-3 gap-4 overflow-y-auto w-[600px]">
            {filteredHandicraft?.map((category) => (
              <div key={category._id} className="category">
                {/* Category Name */}
                <NavLink
                  key={category._id}
                  to={`/sorted/${category._id} `}
                  className="font-bold text-red-500 cursor-pointer"
                >
                  {category.name}
                </NavLink>
                {/* Subcategories List */}
                <ul className="list-none mt-2 mb-3">
                  {category?.subCategories
                    ?.sort((a, b) =>
                      a.subCategoryName.localeCompare(b.subCategoryName)
                    )
                    .map((subcategory) => (
                      <li key={subcategory._id}>
                        <NavLink
                          to={`/sorted/${category._id}/${subcategory._id}`}
                          className="block text-sm text-black hover:text-red-500"
                        >
                          {subcategory.subCategoryName}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
