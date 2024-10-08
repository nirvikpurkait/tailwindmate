import React from "react";
import { type Message } from "./color";

type PopupProps = Message & { popupOpened: boolean };

const Popup = ({ message, status, popupOpened }: PopupProps) => {
  return (
    <div
      className={`fixed bottom-4 mr-4 mt-4 cursor-pointer rounded-md px-8 py-3 pl-4 text-white transition-all md:bottom-8 ${
        status === "success"
          ? "shadow-success border border-green-600 bg-green-800"
          : " "
      } ${
        status === "success"
          ? " "
          : "shadow-error border border-red-600 bg-red-800"
      } ${popupOpened ? "right-0 md:right-4" : "-right-full"} `}
    >
      {status === "success" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 inline h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-2 inline h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V5zm1 11a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <p className="inline">{message}</p>
    </div>
  );
};

export default Popup;
