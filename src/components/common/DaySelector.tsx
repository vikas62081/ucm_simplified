import React from "react";
import { TEXT_INPUT_HEIGHT } from "../../utilities/constant";
import { FieldProps } from "formik";

const Days = [
  { label: "Select a day", value: "" },
  { label: "Monday", value: "MON" },
  { label: "Tuesday", value: "TUE" },
  { label: "Wednesday", value: "WED" },
  { label: "Thursday", value: "THU" },
  { label: "Friday", value: "FRI" },
  { label: "Saturday", value: "SAT" },
  { label: "Sunday", value: "SUN" },
];

const DaySelector: React.FC<FieldProps> = ({ field }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    field.onChange(event); // Ensuring the change event is handled by Formik
  };

  return (
    <div>
      <select
        {...field}
        onChange={handleChange}
        className="block  w-full appearance-none rounded-md border border-gray-300 bg-white px-2 py-2 pr-10 text-custom-black shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 class=%27feather feather-chevron-down%27%3E%3Cpolyline points=%276 9 12 15 18 9%27/%3E%3C/svg%3E')",
          backgroundPosition: "right 0.75rem center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1.2rem 1.2rem",
          minHeight: TEXT_INPUT_HEIGHT,
        }}
      >
        {Days.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DaySelector;
