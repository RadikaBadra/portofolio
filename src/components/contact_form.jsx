"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Notification from "./notification";

export const ContactForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState(" ");

  const sendEmail = (e) => {
    e.preventDefault();
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
          setSuccess(true);
        },
        (error) => {
          setSuccess(false);
        }
      );
  };

  console.log(success);

  return (
    <>
      {success === true ? (
        <Notification
          color={"bg-green-200"}
          position="bottom-4 right-8 md:bottom-8 md:right-12"
        >
          <p className="text-base md:text-xl">😎 message has been sent</p>
        </Notification>
      ) : (
        " "
      )}
      {success === false ? (
        <Notification
          color={"bg-red-200"}
          position="bottom-4 right-8 md:bottom-8 md:right-12"
        >
          <p className="text-base md:text-xl">😭 failed sending message</p>
        </Notification>
      ) : (
        " "
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 bg-white/15 border border-white/45 p-4 lg:p-5"
        data-aos="zoom-in"
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-between">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-white">Name</label>
            <input type="text" name="user_name" className="h-8 pl-2" required />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-white">Email</label>
            <input
              type="email"
              name="user_email"
              className="h-8 pl-2"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-white">Message</label>
          <textarea name="message" rows={10} className="p-2" required />
        </div>
        <input
          type="submit"
          value="Send"
          className="bg-accent cursor-pointer duration-200 py-2 text-xl text-white transition-all hover:translate-y-1"
        />
      </form>
    </>
  );
};
