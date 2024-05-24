import React from "react";
import { TEXT_INPUT_HEIGHT } from "../../utilities/constant";
import { FieldProps } from "formik";

interface InputProps extends FieldProps<string> {
  placeholder: string;
  type?: string; // Optional type property
}

const TextInput: React.FC<InputProps> = ({
  placeholder,
  field,
  form,
  type = "text", // Default type is text
  ...props
}) => {
  return (
    // <div className="mb-4">
    <input
      {...field}
      {...props}
      type={type} // Use the type property here
      className=" text-custom-black xs:text-xs mt-1 block w-full  rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm md:text-sm"
      placeholder={placeholder}
      style={{ minHeight: TEXT_INPUT_HEIGHT }}
    />
    // </div>
  );
};

export default TextInput;
