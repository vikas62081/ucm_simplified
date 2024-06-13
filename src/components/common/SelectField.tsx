import React from "react";
import { FieldProps } from "formik";

// Define the props for the SelectField component
interface SelectFieldProps extends Partial<FieldProps> {
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  field,
  name,
  value,
  onChange,
  options,
}) => {
  const selectName = field?.name || name;
  const selectValue = field?.value || value;
  const selectOnChange = field?.onChange || onChange;

  return (
    <div>
      <select
        name={selectName}
        value={selectValue}
        onChange={selectOnChange}
        className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-2 py-2 pr-10 text-custom-black shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 class=%27feather feather-chevron-down%27%3E%3Cpolyline points=%276 9 12 15 18 9%27/%3E%3C/svg%3E')",
          backgroundPosition: "right 0.75rem center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1.2rem 1.2rem",
        }}
      >
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
