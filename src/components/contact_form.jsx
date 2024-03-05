"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();
  const message = [];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_u9dwq0h", "template_rforyda", form.current, {
        publicKey: "gg083nAeNI3DRt9UR",
        reply_to: e.target.user_email.value,
      })
      .then(
        () => {
          message.push(
            <p className="mt-5 text-center text-green-400 w-full text-lg lg:text-2xl">
              success sending massage
            </p>
          );
        },
        (error) => {
          message.push(
            <p className="mt-5 text-center text-red-400 w-full text-lg lg:text-2xl">
              failed sending massage
            </p>
          );
        }
      );
  };

  console.log(message);

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 bg-white/15 border border-white/45 p-4 lg:p-5"
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-between">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-white">Name</label>
            <input type="text" name="user_name" className="h-8" />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-white">Email</label>
            <input type="email" name="user_email" className="h-8" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-white">Message</label>
          <textarea name="message" rows={10} />
        </div>
        <input
          type="submit"
          value="Send"
          className="bg-accent py-2 text-xl text-white"
        />
      </form>
      <div>{message}</div>
    </div>
  );
};
