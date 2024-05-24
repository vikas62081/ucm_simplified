import { Field, ErrorMessage } from "formik";
import TextInput from "./TextInput";

interface FormFieldProps {
  name: string;
  component?: any;
  optional?: boolean;
  placeholder?: string;
  type?: string; // Include type in props
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  placeholder,
  component = TextInput,
  optional = false,
  type = "text", // Default to text if not specified
}) => {
  const isTextInput = placeholder ? true : false;
  return (
    <div>
      <Field
        name={name}
        as={isTextInput ? component : ""}
        component={isTextInput ? "" : component}
        placeholder={optional ? `${placeholder} (Optional)` : placeholder}
        type={type} // Pass type to the TextInput component
      />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default FormField;
