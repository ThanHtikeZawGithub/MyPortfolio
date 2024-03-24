import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="bg-primaryBg relative dark:bg-gradient-dark">
      <h1 className="absolute inset-0 text-[200px] opacity-25 text-gray-600 stroke-black stroke-2 font-extrabold leading-10 -tracking-widest font-mono overflow-hidden">Contact</h1>
      <div className="mx-auto px-8 p-12 md:pt-24">
        <div className="block md:flex md:basis-1/2 md:justify-center md:gap-16">
          <ContactInfo />
          <div className="block px-4 md:flex md:basis-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
