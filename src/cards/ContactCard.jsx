import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactCard = () => {
  const notify = () => toast("Thank You");

  window.onload = function () {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank You", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-xl font-bold">
          Make your remodeling dreams come true.
          <br />
          Reach out today!
        </h1>
        <br />
        <p>
          <a href="tel:6143906882" className="hover:font-bold">
            614-390-6882
          </a>
        </p>
        <p>
          <a href="mailto:" className="hover:font-bold">
            bnkin.remodeling@yahoo.com
          </a>
        </p>
      </div>

      <form
        id="form"
        className="w-full p-8 my-4 rounded-2xl shadow-xl max-w-full"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="96c8992f-ca51-48c7-9f69-73c8fb2912e6"
        />
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        ></input>

        <div className="flex">
          <h1 className="font-bold uppercase text-2xl mx-auto">
            Send us a message
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="First Name*"
            name="first name"
            required
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name*"
            name="last name"
            required
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email*"
            name="email"
            required
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Phone*"
            name="phone"
            required
          />
        </div>
        <div className="my-4">
          <textarea
            placeholder="Message*"
            name="message"
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <div className="my-2 w-1/2 lg:w-1/4 mx-auto">
          <button
            type="submit"
            className="uppercase text-sm font-bold tracking-wide bg-primary text-white p-3 rounded-lg w-full 
              focus:outline-none focus:shadow-outline hover:bg-secondary transition duration-500"
          >
            Send Message
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactCard;
