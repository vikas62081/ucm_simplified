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
      className="transition-border flex cursor-pointer flex-col items-center rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm transition-shadow duration-300 hover:border-gray-300 hover:shadow-md"
      onClick={onClick}
      role="button" // Correct role for accessibility
    >
      <FontAwesomeIcon icon={icon} size="2x" className="mb-4 text-primary" />
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="mb-4 text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
