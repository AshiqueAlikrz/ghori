import React from "react";
import Carousel from "../components/ui/carousel";

const Testmonial = () => {
  const slideData = [
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://www.floradyle.com/web/image/product.product/7405/image_512?unique=29d7cf2",
    },
    {
      title: "Florade Essence",
      button: "buy",
      src: "https://www.floradyle.com/web/image/product.product/7402/image_512?unique=f75a074",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://www.floradyle.com/web/image/product.product/7405/image_512?unique=29d7cf2",
    },
    {
      title: "Florade Essence",
      button: "buy",
      src: "https://www.floradyle.com/web/image/product.product/7402/image_512?unique=f75a074",
    },
  ];
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden w-full h-full py-20">
      <h3 className="text-4xl font-bold text-[#5a3e36] mb-12">
        Our Available Products
      </h3>

      <Carousel slides={slideData} />
    </div>
  );
};

export default Testmonial;
