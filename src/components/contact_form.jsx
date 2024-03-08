"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Notification from "./notification";

export const ContactForm = () => {
  const timerRef = useRef();
  const [success, setSuccess] = useState(" ");
  const [formData, setFormData] = useState({
    user_name: " ",
    user_email: " ",
    message: " ",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_u9dwq0h",
        "template_rforyda",
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
          from_name: formData.user_name,
          reply_to: formData.user_email,
        },
        { publicKey: "gg083nAeNI3DRt9UR" }
      )
      .then(
        () => {
          setSuccess(true);
          timerRef.current = setTimeout(() => {
            setSuccess(" ");
          }, 2000);
        },
        (error) => {
          setSuccess(false);
          timerRef.current = setTimeout(() => {
            setSuccess(" ");
          }, 2000);
        }
      );
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  console.log(success);

  return (
    <>
      {success === true ? (
        <Notification
          color={"bg-green-200"}
          position="bottom-4 right-8 md:bottom-8 md:right-8 z-20"
        >
          <p className="text-base md:text-xl">😎 message has been sent</p>
        </Notification>
      ) : (
        " "
      )}

      {success === false ? (
        <Notification
          color={"bg-red-200"}
          position="bottom-4 right-8 md:bottom-8 md:right-8 z-20"
        >
          <p className="text-base md:text-xl">😭 failed sending message</p>
        </Notification>
      ) : (
        " "
      )}
      <form
        onSubmit={sendEmail}
        className="flex flex-col gap-6 bg-white/15 border border-white/45 p-4 lg:p-5"
        data-aos="zoom-in"
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-between">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-white">Name</label>
            <input
              type="text"
              name="user_name"
              className="h-8 pl-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-white">Email</label>
            <input
              type="email"
              name="user_email"
              className="h-8 pl-2"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-white">Message</label>
          <textarea
            name="message"
            rows={10}
            className="p-2"
            required
            onChange={handleInputChange}
          />
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
