import { Field, ErrorMessage } from "formik";
import TextInput from "./TextInput";

interface FormFieldProps {
  name: string;
  component?: any;
  optional?: boolean;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  placeholder,
  component = TextInput,
  optional = false,
}) => {
  const isTextInput = placeholder ? true : false;
  return (
    <div>
      <Field
        name={name}
        as={isTextInput ? component : ""}
        component={isTextInput ? "" : component}
        placeholder={optional ? `${placeholder} (Optional)` : placeholder}
      />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default FormField;
