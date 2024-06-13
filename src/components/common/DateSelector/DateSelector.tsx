import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FieldProps } from "formik";
import "./index.css";

interface DateSelectorProps extends FieldProps {
  placeholder: string;
}

const DateSelector: React.FC<DateSelectorProps> = ({ field, form }) => {
  const handleChange = (date: Date | null) => {
    form.setFieldValue(field.name, date); // Setting the field value using Formik
  };

  return (
    <div className="relative flex w-full items-center">
      <DatePicker
        selected={(field.value && new Date(field.value)) || null}
        onChange={handleChange}
        // showTimeSelect
        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-custom-black focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        dateFormat="MMMM d, yyyy"
        placeholderText={"Select Date"}
        wrapperClassName="w-full"
        popperClassName="custom-datepicker-popper"
      />
    </div>
  );
};

export default DateSelector;
