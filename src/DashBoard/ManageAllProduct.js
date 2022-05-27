import React, { useEffect, useState } from "react";
import { Wave } from "react-animated-text";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import AllOrderCard from "./AllOrderCard";
import MyOrderCard from "./MyOrderCard";

const ManageAllProduct = () => {
  const [allOrder, setAllOrder] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/allOrder`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, []);
  console.log(allOrder);
  return (
    <div
      id="products"
      className="min-h-screen mx-auto container flex flex-col max-w-7xl py-5"
    >
      <h1 className="text-2xl md:text-4xl font-serif text-center text-neutral-content pb-20">
        <Wave text="Manage All Orders"></Wave>
      </h1>

      <div className=" px-5">
        {allOrder?.map((order, index) => (
          <AllOrderCard order={order}></AllOrderCard>
        ))}
      </div>
    </div>
  );
};

export default ManageAllProduct;
