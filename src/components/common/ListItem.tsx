import React from "react";
import WhatsAppIcon from "../../assets/svg_icons"; // Adjust the import path as needed

interface ListProps {
  label: string;
  value: string | number | undefined;
  type?: string;
}

const ListItem: React.FC<ListProps> = ({ label, value, type }) => {
  return (
    <>
      {type === "contact" ? (
        <div className="flex justify-between pb-3 text-gray-50 sm:text-xs md:text-sm">
          Contact{" "}
          <div className="flex items-center">
            <WhatsAppIcon />
            <span className="pl-1 text-teal-600 underline">
              +1 976-475-6788
            </span>
          </div>
        </div>
      ) : type === "temporary" ? (
        <div className="flex justify-between">
          <p
            style={{ paddingBottom: "4px" }}
            className="m-0 flex justify-between p-0 text-gray-50 sm:text-xs md:text-sm"
          >
            {label}
          </p>
          <div className="flex items-center rounded-full border border-yellow-300 bg-yellow-100 px-3 py-0">
            <div
              className="text-center capitalize sm:text-xs md:text-xs"
              style={{ color: "#1C0C0C" }}
            >
              Temporary
            </div>
          </div>
        </div>
      ) : type === "permanent" ? (
        <div className="flex justify-between">
          <p
            style={{ paddingBottom: "4px" }}
            className="m-0 flex justify-between p-0 text-gray-50 sm:text-xs md:text-sm"
          >
            {label}
          </p>
          <div className="flex items-center rounded-full border border-green-300 bg-green-100 px-3 py-0">
            <div
              className="text-center capitalize sm:text-xs md:text-xs"
              style={{ color: "#1C0C0C" }}
            >
              Permanent
            </div>
          </div>
        </div>
      ) : (
        <p
          style={{ paddingBottom: "4px" }}
          className="m-0 flex justify-between p-0 text-gray-50 sm:text-xs md:text-sm"
        >
          {label} <span className="text-black">{value}</span>
        </p>
      )}
    </>
  );
};

export default ListItem;
