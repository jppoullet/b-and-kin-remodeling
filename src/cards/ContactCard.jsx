import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactCard = () => {
  const [firstName, setFirstName] = useState("");
  const notify = () => toast("Thank You");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Thank You", {
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
        onSubmit={handleSubmit}
        className="w-full p-8 my-4 rounded-2xl shadow-xl max-w-full"
      >
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
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Phone*"
          />
        </div>
        <div className="my-4">
          <textarea
            placeholder="Message*"
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="my-2 w-1/2 lg:w-1/4 mx-auto">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-primary text-white p-3 rounded-lg w-full 
              focus:outline-none focus:shadow-outline hover:bg-secondary transition duration-500"
          >
            Send Message
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
};

export default ContactCard;
