import React, { useState } from "react";

const ContactCard = () => {
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`First Name: ${firstName}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      class="w-full p-8 my-4 rounded-2xl shadow-xl max-w-full"
    >
      <div class="flex">
        <h1 class="font-bold uppercase text-primary text-2xl mx-auto">
          Send us a message
        </h1>
      </div>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
        <input
          class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="First Name*"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Last Name*"
        />
        <input
          class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Email*"
        />
        <input
          class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Phone*"
        />
      </div>
      <div class="my-4">
        <textarea
          placeholder="Message*"
          class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div class="my-2 w-1/2 lg:w-1/4 mx-auto">
        <button
          class="uppercase text-sm font-bold tracking-wide bg-primary text-white p-3 rounded-lg w-full 
              focus:outline-none focus:shadow-outline md:focus:bg-secondary hover:bg-secondary"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactCard;
