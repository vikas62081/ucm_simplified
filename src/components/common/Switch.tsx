import React from "react";

interface SwitchProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  id,
  checked,
  onChange,
  className,
}) => {
  return (
    <label
      className={`relative inline-flex cursor-pointer items-center ${className}`}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-primary peer-focus:ring-1 peer-focus:ring-green-200 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
      <div className="absolute left-0 h-5 w-5 rounded-full border bg-white transition-transform peer-checked:translate-x-5 peer-checked:border-white"></div>
    </label>
  );
};

export default Switch;
