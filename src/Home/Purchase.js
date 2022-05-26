import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const params = useParams();
  const _id = params.id;
  console.log(_id);
  const [product, setProduct] = useState([]);
  const [orderAmount, setOrderAmount] = useState(0);

  const { name, img, description, availableQuantity, price } = product;
  const [error, setError] = useState(null);

  const Amount = () => {
    const value = document.getElementById("amount").value;
    if (value < 100) {
      setError("Can't Order Less Than 100 PCS");
    } else if (value > availableQuantity) {
      setError("Can't Order More Than Available PCS");
    } else {
      setOrderAmount(value);
      setError(null);
    }
  };

  useEffect(() => {
    const run = async () => {
      const { data } = await axios.get(
        `https://sea-tech.herokuapp.com/product?id=${_id}`
      );
      setProduct(data);
    };
    run();
  }, []);
  const handleSubmit = (event) => {
    document.getElementById("submit").setAttribute("disabled");
    event.preventDefault();
    const order = {
      name: user?.displayName,
      email: user?.email,
      product_id: _id,
      productName: name,
      oderAmount: orderAmount,
      paymentAmount: orderAmount * price,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    console.log(order);
  };

  return (
    <div className="min-h-screen sm:p-20">
      <div class="card bg-neutral-focus shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold ">{product?.name}</h2>
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
          <div class="card-actions w-full justify-around items-center">
            <p className="max-w-xs text-sm border p-1 text-center  rounded bg-secondary">
              <span className="font-serif">Minimum Order Quantity</span>:{" "}
              <span className="text-md text-accent-content font-bold">100</span>
            </p>
            {/* <button class="btn btn-primary">Buy Now</button> */}
            {/* <!-- The button to open modal --> */}
            <label for="my-modal" class="btn dis modal-button bg-primary">
              Buy Now
            </label>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <label
                  for="my-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-center font-bold text-lg">
                  Order For : {name}
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="mt-5 grid grid-cols-1 gap-3 justify-items-center"
                >
                  <input
                    type="text"
                    name="name"
                    value={user?.displayName}
                    disabled
                    className="input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="email"
                    name="email"
                    value={user?.email}
                    disabled
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="text"
                    placeholder="Your Address"
                    name="address"
                    className="input input-bordered w-full max-w-xs"
                    required
                  />

                  <input
                    required
                    type=""
                    name="phone"
                    placeholder="Phone Number"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <input
                    required
                    onChange={Amount}
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Order Quantity"
                    className="input input-bordered w-full max-w-xs"
                  />
                  {error && <p className="font-bold text-error">{error}</p>}
                  {!error && (
                    <p className="font-serif">
                      Your Need to Pay: $ {price * orderAmount}
                    </p>
                  )}

                  <input
                    id="submit"
                    type="submit"
                    value="Pay"
                    className="btn btn-bordered btn-secondary  max-w-xs"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
