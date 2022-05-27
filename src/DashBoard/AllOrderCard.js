import React, { useEffect, useState } from "react";

const AllOrderCard = ({ order }) => {
  const {
    productName,
    orderAmount,
    status,
    transactionId,
    paymentAmount,
    product_id,
  } = order;
  const [availableQuantity, setAvailableQuantity] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/available?product_id=${product_id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAvailableQuantity(data[0].availableQuantity));
  }, []);
  console.log(availableQuantity);

  return (
    <div>
      <div class="card bg-neutral-focus mb-5 shadow-xl font-serif">
        <div class="card-body">
          <h2 class="card-title">
            <span className="text-primary">Product Name: </span>
            {productName}
          </h2>
          <p>
            <span className="text-primary">Order Amount: </span>
            {orderAmount}
          </p>
          <p>
            <span className="text-primary">Available Quantity: </span>
            {availableQuantity}
          </p>
          <p>
            <span className="text-primary">Payment Amount: </span>${" "}
            {paymentAmount}
          </p>

          <p>
            <span className="text-primary">Transaction ID: </span>{" "}
            {transactionId}
          </p>
          <p>
            <span className="text-primary">Status: </span>
            <span className="btn btn-xs btn-warning">{status}</span>
          </p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AllOrderCard;
