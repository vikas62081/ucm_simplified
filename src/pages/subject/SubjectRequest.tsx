import TimePicker from "../../components/common/TimePicker";
import DaySelector from "../../components/common/DaySelector";
import Button from "../../components/common/Button";
import { PlusIcon } from "../../assets/svg_icons";
import Gap from "../../components/common/Gap";
import Divider from "../../components/common/Divider";
import { useState } from "react";
import DesiredSubjectEntry from "./DesiredSubjectEntry";
import SubjectCard, {
  SubjectCardTypes,
} from "../../components/subject/SubjectCard";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormField from "../../components/common/FormField";

const subjectDetailsSchema = Yup.object().shape({
  subject: Yup.string().required("Subject is required*"),
  professorName: Yup.string().required("Professor name is required*"),
  crn: Yup.string(),
  day: Yup.string().required("Day is required*"),
  time: Yup.string().required("Time is required*"),
  mobileNumber: Yup.string()
    .matches(
      /^\+1 \d{10}$|^\+91 \d{10}$/, // Enforces the country code and ensures the correct number of digits follow
      "Please enter a valid US or Indian mobile number with the country code",
    )
    .required("Mobile number is required"),
});

const MAXIMUM_DESIRED_SUBJECT_ALLOWED = 3;

const expectSubjectData: SubjectCardTypes[] = [
  {
    subject: "Advanced Algo",
    timing: "MON, 11:00 AM",
    professorName: "Mohd. Yousouf",
    crn: "12345",
    type: "expectedCard",
  },
];

const SubjectRequest = () => {
  const [desiredSubjectVisible, setDesiredSubjectVisible] = useState(false);

  const setDesiredSubjectPage = (
    type?: "update" | "create",
    values?: SubjectCardTypes,
  ) => {
    console.log("UPDATE", type);
    values && console.log("Values", values);
    values && expectSubjectData.push(values);

    setDesiredSubjectVisible(!desiredSubjectVisible); //  The function `setDesiredSubjectPage` toggles the visibility of the desired subject page.
  };

  return desiredSubjectVisible ? (
    <DesiredSubjectEntry onClick={setDesiredSubjectPage} />
  ) : (
    <div>
      <p className="heading">New Swap Request</p>
      <p className="text-label">Current Subject Details</p>
      {/* INPUTS*/}
      <Formik
        initialValues={{
          subject: "",
          professorName: "",
          crn: "",
          day: "",
          time: "",
          mobileNumber: "",
        }}
        validationSchema={subjectDetailsSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("VALUES", values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <div className="flex flex-col gap-4">
              <FormField name="subject" placeholder="Subject you want" />
              <FormField name="professorName" placeholder="Professor Name" />
              <FormField name="crn" placeholder="CRN" optional />
              <FormField name="day" component={DaySelector} />
              <FormField name="time" component={TimePicker} />
            </div>
            {/* ADD DESIRED SUBJECT */}
            <Gap gap={4} />
            <p className="text-label">Add Desired Subject</p>
            <div className="flex flex-col gap-3">
              {expectSubjectData.map((item: SubjectCardTypes) => {
                return (
                  <div
                    onClick={() => {
                      setDesiredSubjectPage("update", item);
                    }}
                  >
                    <SubjectCard
                      subject={item.subject}
                      timing={item.timing}
                      professorName={item.professorName}
                      crn={item.crn}
                      type={"expectedCard"}
                      dropShadow={true}
                    />
                  </div>
                );
              })}
            </div>
            <Gap gap={3} />

            {expectSubjectData.length < MAXIMUM_DESIRED_SUBJECT_ALLOWED && (
              <Button
                icon={<PlusIcon />}
                label="Add Subject"
                type="tertiary"
                onClick={setDesiredSubjectPage}
              />
            )}

            <Divider />
            {/* CONTACT DETAILS */}
            <p className="text-label">Contact Details</p>
            <FormField
              name="mobileNumber"
              placeholder="+1 / +91 <space> Whatsapp Number "
            />
            <Gap gap={4} />
            <Button
              label="Sumbit"
              onClick={() => handleSubmit()}
              type="primary"
            />
            <Gap gap={4} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SubjectRequest;
