import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { CloudinaryConfig } from "../../../Cloudinary";
import { Axios } from "../../../api";
import { useNavigate } from "react-router-dom";

const CarouselTraditional = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  const [carouselData, setCarouselData] = useState();

  const fetchCarouselData = async () => {
    try {
      const res = await Axios({
        url: "/carousel",
        method: "GET",
      });
      // console.log(res);
      setCarouselData(res.data.list);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCarouselData();
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      speed: 300,
      behavior: "smooth",
    });
  }, []);
  return (
    // <div className="mt-2">
    <div className=" sm:m-3 sm:mt-0 drop-shadow-md rounded-xl text-2xl overflow-hidden min-h-[180px] sm:min-h-[440px] hero-bg-color flex items-center flex-col pt-3 gap-y-3.5">
      <div className="p-2  w-full ">
        <Slider {...settings}>
          {carouselData?.map((data) => (
            <div key={data._id}>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-10">
                <div className="flex flex-col justify-center sm:gap-6 gap-4 sm:pl-4 sm:pt-0  sm:text-left text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                    {data.subtitle}
                  </h1>
                  <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <h1 className="sm:text-5xl text-[38px] uppercase text-white  md:text-[100px]  font-bold">
                    {data.title2}
                  </h1>
                </div>

                <div className=" order-2 sm:order-1 pl-10 h-fit ">
                  <img
                    src={`${CloudinaryConfig.CLOUDINARY_URL}/image/upload/${data.img_id}`}
                    alt=""
                    className="w-[200px] h-[120px] sm:w-[350px] sm:h-[320px] sm:scale-105 lg:scale-100 object-fit m-auto sm:pl-10 pl-4 drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]  z-40"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    // </div>
  );
};

export default CarouselTraditional;
