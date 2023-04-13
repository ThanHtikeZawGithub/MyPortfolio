import React from "react";
import ContactForm from "../ContactForm";
import ContactInfo from "../ContactInfo";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../Icons";

//I'm using react form library called react-hook-form;
const Contact = () => {
  return (
    <section>
      <div className="mx-auto px-8">
        <h1 className="text-3xl top-0 py-6 font-extrabold text-center text-dark dark:text-primary3 text-clip tracking-wider font-mont">
          _Say Hello
        </h1>
        <div className="block md:flex md:basis-1/2 md:justify-center md:gap-16">
          <ContactInfo />
          <div className="block px-4 md:flex md:basis-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="mt-12 bg-indigo-900 w-full px-0">
        <div className="flex items-center justify-between px-8 md:px-20">
          <div className="py-4">
            <h3 className="font-semibold text-base md:text-xl text-primary font-open">Than Htike Zaw</h3>
            <p className="font-semibold text-sm md:text-lg text-primary font-open">Full-stack developer</p>
          </div>
          <div className="flex items-center justify-between gap-1 md:gap-4">
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon/>
          </div>
        </div>
        <div className='py-5 text-center'>
                <p className='text-xs md:text-base md:text-center font-semibold text-primary'>
                    Copyright
                    <sup className='text-xs md:text-base font-semibold text-primary'>
                            &copy;
                    </sup>
                    All Reserved Rights 2022 
                    <span className='font-semibold text-primary text-xs md:text-base '>
                             / Than Htike Zaw
                    </span>
                </p>

            </div>
      </div>
    </section>
  );
};

export default Contact;
