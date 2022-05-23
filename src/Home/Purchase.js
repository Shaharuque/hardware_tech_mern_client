import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const params = useParams();
  const _id = params.id;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const run = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/product?id=${_id}`
      );
      setProduct(data);
    };
    run();
  }, []);

  const { name, img, description, availableQuantity, price } = product;

  return (
    <div className="min-h-screen sm:p-20">
      <div class="card bg-neutral-focus shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img || "image"} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold ">{product?.name || "Name"}</h2>
          <p className="font-bold">
            <span className="text-warning text-xl font-serif">Price: </span>${" "}
            {price}
          </p>
          <p className="font-bold">
            <span className="font-serif text-warning text-xl">Available: </span>
            {availableQuantity} PCS
          </p>

          <p className="font-bold">
            <span className="font-serif text-warning text-xl">
              Description:{" "}
            </span>{" "}
            {description}
          </p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
