import React from "react";
import Footer from "./Footer";
import HeaderNavbar from "./HeaderNavbar";
import { useDispatch, useSelector } from "react-redux";

const Invoice = () => {
  const {msg} = useSelector(state => state?.menu);
  return (
    <>
    <HeaderNavbar />
    <div className="flex flex-col justify-center h-96 items-center">
      <h1 className="text-4xl font-bold">You Are Awesome</h1>
      <p className="">Thank you so much For Deine Brstellung!</p>
      <h1 className="text-2xl mt-2 font-bold">Order # {msg.order_number}</h1>
    </div>
    <Footer />
    </>
  );
};

export default Invoice;
