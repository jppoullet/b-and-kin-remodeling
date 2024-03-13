import React, { useRef } from "react";
import Btn from "./Btn";
import { reviews } from "../assets";

const TestimonialsModal = () => {
  const dialogRef = useRef();

  const toggleDialog = () => {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  };

  return (
    <>
      <button
        onClick={toggleDialog}
        className="md:bg-secondary bg-secondary text-white py-3 px-6 rounded-full shadow-md hover:bg-alternate hover:scale-105 transform transition duration-150"
      >
        View Testimonials
      </button>
      <dialog
        ref={dialogRef}
        className="min-w-full min-h-full text-white  bg-black bg-opacity-90"
      >
        <div>
          <h2 className="text-center md:text-3xl text-2xl pt-20 pb-10">
            Read what our customers have to say
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mx-10">
            {reviews.map((review) => (
              <div
                key={review.Name}
                className="bg-primary text-white rounded-md p-3 shadow-md"
              >
                <p>{review.Review}</p>

                <p className="text-secondary mt-2">
                  {review.Name} - {review.Location}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={toggleDialog}
          className="p-2 bg-secondary opacity-80 hover:opacity-100 text-black rounded-lg text-xl absolute top-7 right-7"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </dialog>
    </>
  );
};

export default TestimonialsModal;
