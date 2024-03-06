"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();
  const [popUp, setPopUp] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs;
    emailjs
      .send(
        "service_u9dwq0h",
        "template_rforyda",
        {
          user_name: e.target.user_name.value,
          user_email: e.target.user_email.value,
          message: e.target.message.value,
          from_name: e.target.user_name.value,
          reply_to: e.target.user_email.value,
        },
        { publicKey: "gg083nAeNI3DRt9UR" }
      )
      .then(
        () => {
          setPopUp(true);
          setSuccess(true);
        },
        (error) => {
          setPopUp(true);
          setsuccess(false);
        }
      );
  };

  return (
    <div>
      <div
        onClick={() => {
          setPopUp(false);
        }}
        className={`${
          popUp ? "block" : "hidden"
        } absolute bg-black/65 flex items-center justify-center h-full left-0 top-0 w-full z-30`}
      >
        <div className="bg-white flex flex-col gap-5 items-center justify-center p-8 lg:p-20">
          <h1 className="text-xl lg:text-2xl">
            {success ? "success sending message" : "failed sending message"}
          </h1>
          <button
            className="bg-accent px-6 py-3 text-white"
            onClick={() => {
              setPopUp(false);
            }}
          >
            close
          </button>
        </div>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 bg-white/15 border border-white/45 p-4 lg:p-5"
        data-aos="zoom-in"
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-between">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-white">Name</label>
            <input type="text" name="user_name" className="h-8 pl-2" />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-white">Email</label>
            <input type="email" name="user_email" className="h-8 pl-2" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-white">Message</label>
          <textarea name="message" rows={10} className="p-2" />
        </div>
        <input
          type="submit"
          value="Send"
          className="bg-accent cursor-pointer duration-200 py-2 text-xl text-white transition-all hover:translate-y-1"
        />
      </form>
    </div>
  );
};
