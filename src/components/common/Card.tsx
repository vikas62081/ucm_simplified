// src/components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon: string; // Assuming the icon path is a string
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
      <img src={icon} alt={`${title} icon`} className="w-12 h-12 mb-2" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
