import React from "react";
import { useForm } from "react-hook-form";


//I'm using react form library called react-hook-form;
const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className="section">
      <div className="mx-auto">
        <h1 className="text-4xl top-0 py-24 font-extrabold text-center text-dark text-clip tracking-wider font-mont">SAY  HELLO</h1>
        <div className="block md:flex md:basis-1/2 md:justify-center md:gap-16">
          <div className="">
            <h3>Go on and ask me if you want to know more details about me</h3>
           <h1>Info</h1>
           <p>Email</p>
           <p>Phone</p>
          </div>
          <div className="block px-4 md:flex md:basis-1/2">
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/69209e445c641faf20262c8d68f03fd1"
              method="POST"
              className="max-w-xl"
            >
              <input
                className="w-full bg-secondary font-semibold placeholder-opaque-black p-3"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max Length is 100 character."}
                </p>
              )}

              <input
                className="w-full rounded-sm font-semibold placeholder-opaque-black p-3 mt-5"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="w-full bg-secondary font-semibold placeholder-opaque-black p-3 mt-5"
                type="text"
                placeholder="MESSAGE"
                rows='4'
                cols='50'
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max Length is 2000 character."}
                </p>
              )}

              <button
                 type="submit"
                 className="btn font-semibold mt-6">
                    Send Me a Message  &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
