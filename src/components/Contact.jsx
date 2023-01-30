import React from "react";
import Footer from "./Footer";
import HeaderNavbar from "./HeaderNavbar";

const Contact = () => {
  return (
    <>
    <HeaderNavbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-4xl font-bold">Contact</h1>
        <p className="font-bold">Contact us:</p>
        <p>
          Form: this contact form will be used for general inquiries such as
          sharing customer experience and will be on the page interface.
        </p>
        <p>The form should contain the following fields.</p>
        <ul className="list-disc">
          <li>Name</li>
          <li>Surname</li>
          <li>Subject</li>
          <li>Phone Number</li>
          <li>Email Address</li>
          <li> Message</li>
        </ul>
        <p>
          Need Help! In this section, there should be email address, phone
          number and name of responsible person dealing with following areas
        </p>
        <ol className="list-decimal">
            <li>Payment</li>
            <li>Complain</li>
            <li>Feedback</li>
            

        </ol>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
