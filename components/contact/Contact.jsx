import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="bg-primaryBg dark:bg-gradient-dark">
      <div className="mx-auto px-8 pt-12 md:pt-24">
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