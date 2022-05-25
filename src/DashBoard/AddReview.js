import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

const AddReview = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="p-10 flex flex-col items-center justify-center ">
      <h2 className="text-2xl pb-10">Add A New Product</h2>
      <form
        onSubmit={handleSubmit}
        className="mt-5 grid grid-cols-1 gap-3 justify-items-center"
      >
        <input
          type="text"
          name="name"
          disabled
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          name="email"
          disabled
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Your Address"
          name="address"
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type=""
          name="phone"
          placeholder="Phone Number"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          id="education"
          name="education"
          placeholder="Education"
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="submit"
          value="Update"
          className=" btn btn-bordered btn-secondary  max-w-xs"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddReview;
