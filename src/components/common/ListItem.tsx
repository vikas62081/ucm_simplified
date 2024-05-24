import React from "react";
interface ListProps {
  label: string;
  value: string | undefined;
}

const ListItem: React.FC<ListProps> = ({ label, value }) => {
  return (
    <p
      style={{ paddingBottom: "4px" }}
      className="flex justify-between  text-xs text-gray-400"
    >
      {label} <span className="text-black">{value}</span>
    </p>
  );
};

export default ListItem;
