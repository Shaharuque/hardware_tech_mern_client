import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAuth from "./Authentication/RequireAuth";
import Blog from "./Blog/Blog";
import AddProduct from "./DashBoard/AddProduct";
import AddReview from "./DashBoard/AddReview";
import DashBoard from "./DashBoard/DashBoard";
import MakeUpdate from "./DashBoard/MakeUpdate";
import ManageAllProduct from "./DashBoard/ManageAllProduct";
import ManageProduct from "./DashBoard/ManageProduct";
import MyOrder from "./DashBoard/MyOrder";
import MyProfile from "./DashBoard/MyProfile";
import Home from "./Home/Home";
import Purchase from "./Home/Purchase";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
  const [theme, setTheme] = useState(null);

  return (
    <div data-theme={theme ? "pastel" : "luxury"}>
      <Navbar setTheme={setTheme} theme={theme}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/blog"
          element={
            <RequireAuth>
              <Blog></Blog>
            </RequireAuth>
          }
        ></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route
          path="/dashBoard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route
            path="manageAllOrder"
            element={<ManageAllProduct></ManageAllProduct>}
          ></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="makeUpdate" element={<MakeUpdate></MakeUpdate>}></Route>
          <Route
            path="manageProduct"
            element={<ManageProduct></ManageProduct>}
          ></Route>
        </Route>
        <Route path="/purchase/:id" element={<Purchase></Purchase>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
