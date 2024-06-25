import React from "react";
import { TEXT_INPUT_HEIGHT } from "../../utilities/constant";

export interface CounterTypes {
  count: number;
  incrementHandler: (key: string) => void;
  decrementHandler: (key: string) => void;
  key: string; // Add the key prop to the interface
}

export const Counter: React.FC<CounterTypes> = ({
  count,
  incrementHandler,
  decrementHandler,
  key, // Receive the key prop
}) => {
  return (
    <div
      style={{ height: TEXT_INPUT_HEIGHT }}
      className="flex w-full items-center rounded-md border border-gray-300 p-1"
    >
      <button
        style={{ backgroundColor: "#F5F5F5" }}
        className="flex h-8 w-8 items-center justify-center rounded-md text-custom-black outline-none"
        onClick={() => decrementHandler(key)} // Pass the key to the handler
        onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.93)")}
        onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg
          className="h-6 w-6 text-custom-black "
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      <div className="text-md flex flex-grow justify-center text-custom-black">
        {count}
      </div>

      <button
        style={{ backgroundColor: "#F5F5F5" }}
        className="ml-1 flex h-8 w-8 items-center justify-center rounded-md text-2xl text-custom-black outline-none"
        onClick={() => incrementHandler(key)} // Pass the key to the handler
        onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.93)")}
        onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg
          className="h-6 w-6 text-custom-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};
