import React from "react";
import { CalenderIcon } from "../../assets/svg_icons";

interface TimingInfoProps {
  title: string;
  timing: string;
  type?: string;
}

const TimingInfo: React.FC<TimingInfoProps> = ({ title, timing, type }) => {
  return (
    <div className="flex items-center ">
      <CalenderIcon />
      <div
        className={`flex-div pl-1 text-gray-50 sm:text-xs   ${type === "card" ? "md:text-xs" : "md:text-sm"}`}
      >
        {title}: <span className="text-custom-black ">{timing}</span>
      </div>
    </div>
  );
};

export default TimingInfo;
