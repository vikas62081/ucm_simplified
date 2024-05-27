import Cover from "../pages/Cover.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../components/common/Button";
import Gap from "../components/common/Gap";
import TextInput from "../components/common/TextInput";
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
  return <div className="bg-white flex  h-screen p-3  flex-col space-y-2 font-inter" >
  {/* <div><img src={Cover} alt="W3Schools.com" width={600}/></div>
 <div className="text-2xl font-bold text-gray-800">Sign Up </div>
 <div>
  <input className="text-gray-700 w-full h-10 px-3 text-sm mt-3 placeholder-gray-600  bg-white rounded-lg border" type="text" placeholder="Name" id="forms-labelOverInputCode"/>
  <input className="text-gray-700 w-full h-10 px-3 text-sm mt-3 placeholder-gray-600  bg-white rounded-lg border" type="text" placeholder="Email address" id="forms-labelOverInputCode"/>
  <input className="text-gray-700 w-full h-10 px-3 text-sm mt-3 placeholder-gray-600  bg-white rounded-lg border" type="text" placeholder="Re-enter Mobile Number" id="forms-labelOverInputCode"/>
  <input className="text-gray-700 w-full h-10 px-3 text-sm mt-3 placeholder-gray-600  bg-white rounded-lg border" type="password" placeholder="password" id="forms-labelOverInputCode" />
  <input className="text-gray-700 w-full h-10 px-3 text-sm mt-3 placeholder-gray-600  bg-white rounded-lg border" type="password" placeholder="Re-enter password" id="forms-labelOverInputCode"/>
  <div className="flex flex-col space-y-5">
              <div>
                <button className="shadow-custom h-12 w-full mt-12 bg-primary rounded-lg text-white text-base">
                  Submit
                </button>
              </div>


</div>
</div> */}

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
              <FormField name="mobileNumber" placeholder="+1 / +91 <space> Whatsapp Number" />
              <FormField name="password" placeholder="password" />
              <FormField name="password" placeholder=" Re Enter Password" />
              
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

