import { useQuery } from "@tanstack/react-query";
import React from "react";

import { fetchFooter, fetchFooterSub } from "../../BaseURL/Footer";
import { Link } from "react-router-dom";

const Footer = () => {
  const { data: footer = {} } = useQuery({
    queryKey: ["footer"],
    queryFn: fetchFooter,
  });
  const footerdata = footer.footer || [];

  const { data: footersub = {} } = useQuery({
    queryKey: ["footersub"],
    queryFn: fetchFooterSub,
  });

  const footerdatasub = footersub.footerSubHeading || [];
  // console.log("subfooter", footerdatasub);

  return (
    <div className="bg-gray-100">
      <div className="container">
        <div className="grid md:grid-rows-1 ">
          <div className="py-8 px-2">
            {footerdata?.map((footer) => {
              return (
                <div key={footer._id}>
                  <a
                    href="#"
                    className="text-primary font-semibold tracking-widest text-xl uppercase sm:text-2xl"
                  >
                    <img
                      className="ml-24 sm:ml-0 mb-1 object-contain w-[100px] sm:h-[70px] h-[70px]"
                      src="/logo.png"
                      alt="Logo"
                    />
                    {footer?.title}
                  </a>
                  <p className="text-gray-600 sm:text-[18px] text-[16px] pt-3">
                    {footer?.description}
                  </p>
                </div>
              );
            })}
          </div>
          {/* Footer links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4">
            {footerdatasub?.map((data) => (
              <div key={data._id}>
                <div>
                  <h1 className="text-xl font-bold sm:text-left mb-3 dark:text-white">
                    {data.name}
                  </h1>
                  <ul className="text-xl">
                    {data?.footerlink?.map((link) => (
                      <li key={link._id}>
                        <Link
                          to={
                            link.name === "About Us"
                              ? "/about"
                              : link.name === "Privacy Policy"
                              ? "/privacypolicy"
                              : link.name === "Term and Conditions"
                              ? "/tac"
                              : link.name === "Cancellation & Refund"
                              ? "/cancel"
                              : link.name === "Shipping & Delivery"
                              ? "/shipping"
                              : link.name === "Contact Us"
                              ? "/contact"
                              : "/"
                          }
                          className="text-gray-600 sm:text-[16px] text-[14px] hover:text-red-500 cursor-pointer duration-300"
                        >
                          {link?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
