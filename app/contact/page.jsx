"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cfmmnlp",
        "template_fmvts7a",
        form.current,
        "2qeaMXLo7xFUpCTe0"
      )
      .then(
        (result) => {
          alert("Your message was successfully sent!", result.text);
          // Optionally reset the form, show a success message, etc.
        },
        (error) => {
          alert("Failed...", error.text);
          // Optionally handle the error, show an error message, etc.
        }
      );
  };
  return (
    <div className="bg-gradient-to-b from-[#202835] to-[#363636] px-5 md:px-16 pb-5 min-h-[calc(100vh-100px)]">
      <div className="w-full text-white text-xl lg:text-2xl font-bold py-5 lg:px-24">
        Please wait patiently as it takes time for our members to process and
        reply to your messages. You should expect a response from us within 7
        business days.
      </div>

      <div className="container mx-auto mt-4 md:px-10 lg:px-20">
        <div className="w-full p-1 mt-4 py-10 md:px-12 mr-auto rounded-2xl shadow-2xl bg-[#F7F7F7]">
          <div className="flex justify-center">
            <h1 className="font-bold uppercase text-3xl lg:text-5xl">
              Send us a message
            </h1>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5 mx-8 md:mx-0 lg:mx-0">
              <input
                className="w-full bg-[#E3E3E3] text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="from_name"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-[#E3E3E3] text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="from_last_name"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-[#E3E3E3] text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                name="user_email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-[#E3E3E3] text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                name="user_phone"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4 mx-8 md:mx-0 lg:mx-0">
              <textarea
                placeholder="Message*"
                name="message"
                className="w-full h-64 bg-[#E3E3E3] text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/3 lg:w-1/4 ml-8 md:ml-0 lg:ml-0">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-[#04183E] hover:bg-[#08A1DD] text-gray-100 p-3 rounded-lg w-full 
                          focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
