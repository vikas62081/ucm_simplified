import React from "react";
import { TEXT_INPUT_HEIGHT } from "../../utilities/constant";

export interface CounterTypes {
  count: number;
  incrementHandler: () => void;
  decrementHandler: () => void;
}

export const Counter: React.FC<CounterTypes> = ({
  count,
  incrementHandler,
  decrementHandler,
}) => {
  return (
    <div
      style={{ height: TEXT_INPUT_HEIGHT }}
      className="flex w-full items-center rounded-md border border-gray-300 p-1"
    >
      <button
        style={{ backgroundColor: "#F5F5F5" }}
        className="text-custom-black flex h-8 w-8 items-center justify-center rounded-md outline-none"
        onClick={decrementHandler}
        onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.93)")}
        onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg
          className="text-custom-black h-6 w-6 "
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

      <div className="text-custom-black text-md flex flex-grow justify-center">
        {count}
      </div>

      <button
        style={{ backgroundColor: "#F5F5F5" }}
        className="text-custom-black ml-1 flex h-8 w-8 items-center justify-center rounded-md text-2xl outline-none"
        onClick={incrementHandler}
        onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.93)")}
        onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg
          className="text-custom-black h-6 w-6"
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
