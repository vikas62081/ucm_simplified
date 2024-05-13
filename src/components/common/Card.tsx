// src/components/Card.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface CardProps {
  title: string;
  description: string;
  icon: IconDefinition; // The icon is now a specific type from Font Awesome
  onClick: () => void; // Function to handle click events
}

const Card: React.FC<CardProps> = ({ title, description, icon, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg p-4 flex flex-col items-center text-center shadow-sm cursor-pointer border border-gray-200 hover:border-gray-300 hover:shadow-md transition-shadow transition-border duration-300"
      onClick={onClick}
      aria-role="button"
      role="button" // Correct role for accessibility
    >
      <FontAwesomeIcon icon={icon} size="2x" className="mb-4 text-primary" />
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
};

export default Card;
