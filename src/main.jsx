import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Restaurants from "./components/Restaurants";
import SingleResOverview from "./components/SingleResOverview";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/restaurant" element={<Restaurants />} />
      <Route exact path="/singlerestaurant" element={<SingleResOverview />} />


    </Routes>
  </BrowserRouter>
);
