import React from "react";
import Footer from "./Footer";
import HeaderNavbar from "./HeaderNavbar";

const Invoice = () => {
  return (
    <>
    <HeaderNavbar />
    <div className="flex flex-col justify-center h-96 items-center">
      <h1 className="text-4xl font-bold">You Are Awesome</h1>
      <p className="">Thank you so much For Deine Brstellung!</p>
      <h1 className="text-2xl mt-2 font-bold">Order # M5G9EPE</h1>
    </div>
    <Footer />
    </>
  );
};

export default Invoice;
