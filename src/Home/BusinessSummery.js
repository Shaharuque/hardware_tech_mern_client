import React from "react";
import { Wave } from "react-animated-text";
import people from "../img/1275780-380e81.svg";
import computer from "../img/computer.svg";
import like from "../img/like.svg";
import flag from "../img/flag.svg";
import bg from "../img/Petroleum-lines-waving-on-transparent-background-PNG.png";
import { current } from "daisyui/src/colors";

const BusinessSummery = () => {
  return (
    <div
      className="min-h-screen py-20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className=" max-w-7xl container mx-auto">
        <h1 className="text-2xl md:text-4xl font-serif text-center text-neutral-content pb-20">
          <Wave text="MILLIONS BUSINESS TRUST US"></Wave>
        </h1>
        <div className=" rounded  py-10 min-h-[300px]  shadow-current  flex md:flex-row flex-col justify-around  ">
          <div class="stats bg-inherit  ">
            <div class="stat text-center ">
              <div class="stat-title">
                <img
                  className="mx-auto"
                  src={people}
                  style={{ height: "56px" }}
                  alt=""
                />
              </div>
              <div class="stat-value">256k+</div>
              <div class="stat-desc font-serif font-bold">Customers</div>
            </div>
          </div>
          <div class="stats bg-inherit ">
            <div class="stat text-center">
              <div class="stat-title">
                <img
                  className="mx-auto "
                  src={flag}
                  style={{ height: "56px" }}
                  alt=""
                />
              </div>
              <div class="stat-value">67</div>
              <div class="stat-desc font-serif font-bold">Countries</div>
            </div>
          </div>
          <div class="stats bg-inherit">
            <div class="stat text-center">
              <div class="stat-title">
                <img
                  className="mx-auto"
                  src={computer}
                  style={{ height: "56px" }}
                  alt=""
                />
              </div>
              <div class="stat-value">300+</div>
              <div class="stat-desc font-serif font-bold">Products</div>
            </div>
          </div>
          <div class="stats bg-inherit ">
            <div class="stat text-center">
              <div class="stat-title">
                <img
                  className="mx-auto"
                  src={like}
                  style={{ height: "56px" }}
                  alt=""
                />
              </div>
              <div class="stat-value">40M</div>
              <div class="stat-desc font-serif font-bold">Visits</div>
            </div>
          </div>
        </div>
        {/* <div class="stats my-20  min-h-[300px] shadow shadow-xl shadow-current flex flex-col lg:flex-row ">
        <div class="stat">
          <div class="stat-figure text-primary">
            <img
              style={{ height: "56px", width: "56px" }}
              src={people}
              alt=""
            />
          </div>
          <div class="stat-title">Total Customer</div>
          <div class="stat-value text-primary">25.6K </div>
          <div class="stat-desc">21% more than last month</div>
        </div>
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-14 h-14 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Total Likes</div>
          <div class="stat-value text-primary">255.6K</div>
          <div class="stat-desc">21% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-14 h-14 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Page Views</div>
          <div class="stat-value text-secondary">2.6M</div>
          <div class="stat-desc">21% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img src="https://api.lorem.space/image/face?w=128&h=128" />
              </div>
            </div>
          </div>
          <div class="stat-value">86%</div>
          <div class="stat-title">Tasks done</div>
          <div class="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default BusinessSummery;
