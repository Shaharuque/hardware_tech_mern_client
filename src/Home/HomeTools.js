import axios from "axios";
import React, { useEffect, useState } from "react";
import Tool from "./Tool";
import { Wave } from "react-animated-text";

const HomeTools = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const run = async () => {
      const { data } = await axios.get(
        "https://sea-tech.herokuapp.com/products"
      );
      setProducts(data);
    };
    run();
    console.log(products);
  }, []);
  return (
    <div
      id="products"
      className="min-h-screen mx-auto container max-w-7xl py-20"
    >
      <h1 className="text-2xl md:text-5xl font-serif text-center text-neutral-content pb-20">
        <Wave text="OUR PRODUCTS"></Wave>
      </h1>
      <div className="  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 p-3">
        {products?.map((product, index) => (
          <Tool key={index} product={product}></Tool>
        ))}
      </div>
    </div>
  );
};

export default HomeTools;
