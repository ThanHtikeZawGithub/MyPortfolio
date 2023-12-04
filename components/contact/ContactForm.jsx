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
      className="w-full font-semibold dark:bg-primary text-primary3 placeholder-opaque-black p-3 rounded-md"
      type="text"
      placeholder="Kindly write your fullname"
      {...register("name", {
        required: true,
        maxLength: 100,
      })}
    />
    {errors.name && (
      <p className="text-red mt-1 text-primary3">
        {errors.name.type === "required" && "This field is required."}
        {errors.name.type === "maxLength" &&
          "Max Length is 100 character."}
      </p>
    )}

    <input
      className="w-full rounded-sm font-semibold dark:bg-primary text-primary3 placeholder-opaque-black  p-3 mt-5"
      type="text"
      placeholder="Kindly write your email"
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
      className="w-full dark:bg-primary text-primary3 font-semibold placeholder-opaque-black p-3 mt-5"
      type="text"
      placeholder="Kindly Write a message you want to talk about or want more details about me"
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
       className="btn items-center font-semibold mt-6 tracking-widest text-normal dark:text-primary">
          Send Me a Message  &rarr;
    </button>
  </form>
  )
}

export default ContactForm