import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../components/common/Button";
import Gap from "../../components/common/Gap";
import TimePicker from "../../components/common/TimePicker";
import DaySelector from "../../components/common/DaySelector";
import FormField from "../../components/common/FormField";
import ScrollToTop from "../../components/common/ScrollToTop";

const desiredSubjectDetailsSchema = Yup.object().shape({
  subject: Yup.string().required("Subject is required*"),
  professorName: Yup.string().required("Professor name is required*"),
  crn: Yup.string(),
  firstDay: Yup.string().required("First day is required*"),
  firstTime: Yup.string().required("Time is required*"),
  secondDay: Yup.string(),
  secondTime: Yup.string(),
});

const DesiredSubjectEntry = (props: any) => {
  return (
    <div>
      <ScrollToTop />
      <p className="heading">Desired Subject Details</p>
      <Formik
        initialValues={{
          subject: "advance algo",
          professorName: "",
          crn: "",
          firstDay: "",
          firstTime: "",
          secondDay: "",
          secondTime: "",
        }}
        validationSchema={desiredSubjectDetailsSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          const data = {
            subject: values.subject,
            timing:
              values.firstDay +
              values.firstTime +
              " " +
              values.secondDay +
              values.secondTime,
            professorName: values.professorName,
            crn: values.crn,
            type: "expectedCard",
          };
          props.onClick("create", data);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <Form className="flex flex-col gap-4">
            <FormField name="subject" placeholder="Subject you want" />
            <FormField name="professorName" placeholder="Professor Name" />
            <FormField name="crn" placeholder="CRN" optional />
            <FormField name="firstDay" component={DaySelector} />
            <FormField name="firstTime" component={TimePicker} />
            <div>
              {secondDayLabel()}
              <FormField name="secondDay" component={DaySelector} optional />
            </div>
            <FormField name="secondTime" component={TimePicker} optional />
            <Button
              label="Save"
              onClick={() => handleSubmit()}
              type="secondary"
            />
            <Gap gap={4} />
          </Form>
        )}
      </Formik>
    </div>
  );

  function secondDayLabel() {
    return (
      <p className="text-label pt-2 text-gray-400">
        Second day and time (only for summer)
      </p>
    );
  }
};

export default DesiredSubjectEntry;
