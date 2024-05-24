import { useState } from "react";
import { TEXT_INPUT_HEIGHT } from "../../utilities/constant";
import { FieldProps } from "formik";

const TimePicker: React.FC<FieldProps> = ({ field, form }) => {
  const [time, setTime] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTime(value);
    form.setFieldValue(field.name, value); // Update Formik's state directly
  };

  return (
    <div>
      <input
        {...field}
        type="time"
        id="time"
        name="time"
        value={time}
        onChange={handleChange}
        className="focus:ring-primar mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black shadow-sm focus:border-primary focus:outline-none sm:text-sm"
        style={{ minHeight: TEXT_INPUT_HEIGHT }} // Ensures a larger tap target on mobile devices
      />
    </div>
  );
};

export default TimePicker;
