import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Restaurants from "./components/Restaurants";
import SingleResOverview from "./components/SingleResOverview";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Invoice from "./components/Invoice";
import About from "./components/About";
import Contact from "./components/Contact";
import Term from "./components/Term";
import Dataprivacy from "./components/Dataprivacy";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/restaurant" element={<Restaurants />} />
      <Route exact path="/singlerestaurant" element={<SingleResOverview />} />
      <Route exact path="/signin" element={<Signin  />} />
      <Route exact path="/signup" element={<Signup  />} />
      <Route exact path="/checkout" element={<Checkout  />} />
      <Route exact path="/invoice" element={<Invoice  />} />
      <Route exact path="/about" element={<About  />} />
      <Route exact path="/contact" element={<Contact  />} />
      <Route exact path="/terms" element={<Term  />} />
      <Route exact path="/dataprivacy" element={<Dataprivacy  />} />







    
    


    </Routes>
  </BrowserRouter>
);
