// import React, { useState } from "react";
// import { FieldProps } from "formik";
// import { TEXT_INPUT_HEIGHT } from "../../utilities/constant";
// import { EyeDisabled, EyeEnabled } from "../../assets/svg_icons";

// interface InputProps extends FieldProps<string> {
//   placeholder: string;
//   type?: string;
// }

// const TextInput: React.FC<InputProps> = ({
//   placeholder,
//   field,
//   form,
//   type = "text",
//   ...props
// }) => {
//   const [inputType, setInputType] = useState(type);

//   const togglePasswordVisibility = () => {
//     setInputType(inputType === "password" ? "text" : "password");
//   };

//   const countryCodeOptions = [
//     { code: "+91", flag: "🇮🇳", label: "+91 " },
//     { code: "+1", flag: "🇺🇸", label: "+1 " },
//   ];

//   return (
//     <div className="focus-within:ring-0.5 relative flex items-center rounded-md border border-gray-300 shadow-sm focus-within:border-primary focus-within:ring-primary">
//       {type === "tel" && (
//         <select
//           className="rounded-l-md border-r border-gray-300 pl-2 pr-10 text-sm text-custom-black focus:border-primary focus:outline-none focus:ring-primary"
//           style={{
//             backgroundImage:
//               "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 class=%27feather feather-chevron-down%27%3E%3Cpolyline points=%276 9 12 15 18 9%27/%3E%3C/svg%3E')",
//             backgroundPosition: "right 0.75rem center",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "1.2rem 1.2rem",
//             appearance: "none",
//             minHeight: TEXT_INPUT_HEIGHT,
//           }}
//         >
//           {countryCodeOptions.map((option) => (
//             <option key={option.code} value={option.code}>
//               {option.flag} {option.label}
//             </option>
//           ))}
//         </select>
//       )}
//       <input
//         {...field}
//         {...props}
//         type={type === "tel" ? "tel" : inputType}
//         className={`block w-full flex-1 bg-white px-3 py-2 text-custom-black sm:text-sm ${
//           type === "tel" ? "" : "rounded-md"
//         } focus:border-primary focus:outline-none focus:ring-primary`}
//         placeholder={placeholder}
//         style={{ minHeight: TEXT_INPUT_HEIGHT }}
//       />
//       {type === "password" && (
//         <button
//           type="button"
//           onClick={togglePasswordVisibility}
//           className="absolute inset-y-0 right-0 flex items-center pr-3"
//         >
//           {inputType === "password" ? <EyeEnabled /> : <EyeDisabled />}
//         </button>
//       )}
//     </div>
//   );
// };

// export default TextInput;
import React, { useState } from "react";
import { FieldProps } from "formik";
import { TEXT_INPUT_HEIGHT } from "../../utilities/constant";
import { EyeDisabled, EyeEnabled } from "../../assets/svg_icons";

interface InputProps extends Partial<FieldProps<string>> {
  placeholder: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<InputProps> = ({
  placeholder,
  field,
  form,
  type = "text",
  name,
  value,
  onChange,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);
  const [internalValue, setInternalValue] = useState(value || "");

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  // Handle change for independent usage
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  // Determine the appropriate value and change handler
  const inputValue = field ? field.value : internalValue;
  const inputChangeHandler = field ? field.onChange : handleInputChange;

  const countryCodeOptions = [
    { code: "+91", flag: "🇮🇳", label: "+91 " },
    { code: "+1", flag: "🇺🇸", label: "+1 " },
  ];

  return (
    <div className="focus-within:ring-0.5 relative flex items-center rounded-md border border-gray-300 shadow-sm focus-within:border-primary focus-within:ring-primary">
      {type === "tel" && (
        <select
          className="rounded-l-md border-r border-gray-300 pl-2 pr-10 text-sm text-custom-black focus:border-primary focus:outline-none focus:ring-primary"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 class=%27feather feather-chevron-down%27/%3E%3C/svg%3E')",
            backgroundPosition: "right 0.75rem center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1.2rem 1.2rem",
            appearance: "none",
            minHeight: TEXT_INPUT_HEIGHT,
          }}
        >
          {countryCodeOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.flag} {option.label}
            </option>
          ))}
        </select>
      )}
      <input
        {...field} // Spread field props if present (Formik usage)
        {...props} // Spread other props
        name={name || field?.name} // Use provided name or Formik’s field name
        value={inputValue} // Use conditional value
        onChange={inputChangeHandler} // Use conditional onChange handler
        type={type === "tel" ? "tel" : inputType} // Adjust input type for password visibility toggle
        className={`block w-full flex-1 bg-white px-3 py-2 text-custom-black sm:text-sm ${
          type === "tel" ? "" : "rounded-md"
        } focus:border-primary focus:outline-none focus:ring-primary`}
        placeholder={placeholder}
        style={{ minHeight: TEXT_INPUT_HEIGHT }} // Maintain the style as provided
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          {inputType === "password" ? <EyeEnabled /> : <EyeDisabled />}
        </button>
      )}
    </div>
  );
};

export default TextInput;
