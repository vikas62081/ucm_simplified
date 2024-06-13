import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

interface TooltipProps {
  text: string;
  color: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, color }) => {
  return (
    <div className="group relative inline-block">
      <FontAwesomeIcon
        icon={faInfoCircle}
        className="h-5 w-5 cursor-pointer text-gray-500"
      />
      <div
        className={`absolute left-full top-1/2 z-50 ml-2 w-48 -translate-y-1/2 transform bg-white p-2 text-xs text-black shadow-lg ${color} hidden rounded-lg transition-opacity duration-300 group-hover:block`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
