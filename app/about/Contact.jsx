import React from "react";
import ContactForm from "../ContactForm";
import ContactInfo from "../ContactInfo";


//I'm using react form library called react-hook-form;
const Contact = () => {
  return (
    <section className="section">
      <div className="mx-auto">
        <h1 className="text-4xl top-0 py-24 font-extrabold text-center text-dark text-clip tracking-wider font-mont">SAY  HELLO</h1>
        <div className="block md:flex md:basis-1/2 md:justify-center md:gap-16">
          <ContactInfo/>
          <div className="block px-4 md:flex md:basis-1/2">
          <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
