import Cover from "../pages/Cover.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../components/common/Button";
import FormField from "../components/common/FormField";
import ScrollToTop from "../components/common/ScrollToTop";

const SignUpScreenSchema = Yup.object().shape({
  name: Yup.string().required("Name is required*"),
  email: Yup.string().required("Email is required*"),
  mobileNumber: Yup.string()
    .matches(
      /^\+1 \d{10}$|^\+91 \d{10}$/, // Enforces the country code and ensures the correct number of digits follow
      "Please enter a valid US or Indian mobile number with the country code",
    )
    .required("Mobile number is required"),
    password: Yup.string().required("Password is required*"),
});

const SignUpScreen = () => {
  return <div className="bg-white" >
  <div>
      <div><img src={Cover} alt="Uni Simplified" width={600}/></div>
      <p className="heading">Sign Up</p>
      {/* INPUTS*/}
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          mobileNumber: "",
        }}
        validationSchema={SignUpScreenSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("VALUES", values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <div className="flex flex-col gap-4">
              <FormField name="name" placeholder="Name" />
              <FormField name="email" placeholder="Email" />
              <FormField name="mobileNumber" placeholder="Mobile number" />
              <FormField type="password" name="password" placeholder="Password"/>
              <FormField type="password" name="password" placeholder="Password"/>

            <Button
              label="Submit"
              onClick={() => handleSubmit()}
              type="primary"
            />
            </div>
            
            
          </Form>
        )}
      </Formik>
    </div>



 </div>

     
}
export default SignUpScreen

