import React, { useLayoutEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatBox from "../Chat/ChatBox";
const AboutUs = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="bg-white  duration-200 overflow-hidden pt-16">
        <Navbar />
        <div className=" mt-4 text-2xl overflow-hidden rounded-3xl min-h-[580px] sm:min-h-[650px] bg-gray-50 flex  items-center flex-col pt-8 gap-y-3.5">
          <h1 className=" flex justify-center pt-2 font-semibold text-gray-500 hover:text-red-500 dark:hover:text-white">
            About Us
          </h1>
          <div className=" container flex flex-col  sm:text-xl text-[15px] gap-2 mt-2 ">
            <p>Eyongkart shopping - Imphal, Manipur</p>
            <p>
              Manipur online handloom shopping,delivering Manipur products
              across the cities.
            </p>
            <p>
              Eyongkart is an online shopping platform offering a variety of
              manipur products.Handloom products like rani phee, wangkhei phee,
              phanek mayek naibi,pheijom kurta ,muka phee,top,blouse,khudei etc.
            </p>
            <p>
              Textile handicrafts in Manipur are renowned for their intricate
              designs, vibrant colors, and traditional motifs that reflect the
              state's rich cultural heritage. Weaving is one of the oldest and
              most significant forms of handicraft in Manipur, and it is deeply
              embedded in the daily life and customs of the Manipuri people.
              Women, in particular, have historically been the primary weavers
              in the region, often producing high-quality textiles that are used
              for both everyday wear and ceremonial purposes. Here’s an overview
              of some prominent textile handicrafts in Manipur:
            </p>
          </div>
        </div>
      </div>
      <ChatBox />
      <Footer />
    </>
  );
};

export default AboutUs;
