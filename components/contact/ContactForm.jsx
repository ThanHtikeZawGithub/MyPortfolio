import React, { useRef } from 'react'
import { useForm } from "react-hook-form";


const ContactForm = () => {

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

    const ref = useRef();
  return (
    <form
    ref={ref}
    target="_blank"
    onSubmit={onSubmit}
    action="https://formsubmit.co/69209e445c641faf20262c8d68f03fd1"
    method="POST"
    className="flex flex-col items-center md:items-start w-full"
  >
    <input
      className="w-full font-semibold font-poppin dark:bg-primary text-slate-800 p-3 rounded-md"
      type="text"
      placeholder="Write your name"
      {...register("name", {
        required: true,
        maxLength: 50,
      })}
    />
    {errors.name && (
      <p className="mt-1 text-red-500">
        {errors.name.type === "required" && "This field is required."}
        {errors.name.type === "maxLength" &&
          "Max Length is 50 character."}
      </p>
    )}

    <input
      className="w-full rounded-md font-semibold dark:bg-primary text-slate-800 p-3 mt-5"
      type="text"
      placeholder="Write your email"
      {...register("email", {
        required: true,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      })}
    />
    {errors.name && (
      <p className="text-red-500 mt-1">
        {errors.name.type === "required" && "This field is required."}
        {errors.name.type === "pattern" && "Invalid email address."}
      </p>
    )}

    <textarea
      className="w-full rounded-md dark:bg-primary text-slate-800 font-semibold p-3 mt-5"
      type="text"
      placeholder="Write message"
      rows='4'
      cols='50'
      {...register("message", {
        required: true,
        maxLength: 2000,
      })}
    />
    {errors.name && (
      <p className="text-red-500 mt-1">
        {errors.name.type === "required" && "This field is required."}
        {errors.name.type === "maxLength" &&
          "Max Length is 2000 character."}
      </p>
    )}

    <button
       type="submit"
       className="btn items-center font-semibold mt-6 tracking-widest text-normal hover:text-primary dark:text-primary">
          Send Me a Message  &rarr;
    </button>
  </form>
  )
}

export default ContactForm