import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { MINIMUM_BUTTON_HEIGHT } from "../../utilities/constant";

interface ButtonProps {
  label: string;
  icon?: ReactNode;
  type?: "primary" | "secondary" | "tertiary";
  to?: string | number;
  onClick?: () => void;
}

const getClassNames = (
  type: "primary" | "secondary" | "tertiary" | undefined,
) => {
  const baseClasses =
    "drop-shadow-custom flex items-center justify-center rounded-md border";
  switch (type) {
    case "primary":
      return `${baseClasses} border-primary bg-primary text-white font-semibold`;
    case "secondary":
      return `${baseClasses} border-primary bg-white text-primary font-semibold`;
    case "tertiary":
      return `${baseClasses} border-primary bg-white text-primary font-medium text-sm`;
    default:
      return `${baseClasses} border-primary bg-white text-primary font-medium text-sm`;
  }
};

const Button: React.FC<ButtonProps> = ({ label, icon, type, to, onClick }) => {
  const classNames = getClassNames(type);
  const formattedLabel =
    type === "tertiary" || type === "secondary" ? label.toUpperCase() : label;
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (typeof to === "number") {
      navigate(to); // This works if `to` is -1 to navigate back
    } else if (typeof to === "string") {
      navigate(to, { state: { name: "John Doe", age: 30 } }); // Navigate to a specific path with data
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{ minHeight: MINIMUM_BUTTON_HEIGHT }}
      className={classNames}
    >
      <div className="flex items-center">
        {icon}
        <div
          className={`pl-${icon ? 1 : 0} text-center ${type === "tertiary" ? "text-xs" : "text-md"}`}
        >
          {formattedLabel}
        </div>
      </div>
    </div>
  );
};

export default Button;
