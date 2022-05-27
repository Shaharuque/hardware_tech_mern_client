import React from "react";

const MyOrderCard = ({ order }) => {
  const {
    productName,
    orderAmount,
    status,
    transactionId,
    paymentAmount,
    address,
    phone,
  } = order;
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
            <span className="text-primary">Payment Amount: </span>${" "}
            {paymentAmount}
          </p>
          <p>
            <span className="text-primary">Contact No: </span>
            {phone}
          </p>
          <p>
            <span className="text-primary">Address: </span>
            {address}
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

export default MyOrderCard;
