import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactCard = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /(\d{3})(\d{3})(\d{4})/;

    const formData = new FormData(e.target);
    formData.append("access_key", "96c8992f-ca51-48c7-9f69-73c8fb2912e6");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      // setResult(res.message);
    } else {
      console.log("Error", res);
      // setResult(res.message);
    }

    document.getElementById("form").reset();

    toast.success(`${res.message} We will contact you shortly`, {
      position: "top-center",
      autoClose: 3500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const formatPhone = () => {
    const phoneRegex = /(\d{3})(\d{3})(\d{4})/;
    return phoneNumber.replace(phoneRegex, "($1) $2-$3");
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
        onSubmit={handleSubmit}
        className="w-full p-8 my-4 rounded-2xl shadow-xl max-w-full"
      >
        {/* <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        ></input> */}

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
            type="tel"
            placeholder="Phone*"
            name="phone"
            onChange={phoneRegex}
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
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
