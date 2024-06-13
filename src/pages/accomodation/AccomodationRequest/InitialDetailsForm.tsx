import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import Switch from "../../../components/common/Switch";
import Button from "../../../components/common/Button";
import FormField from "../../../components/common/FormField";
import DateSelector from "../../../components/common/DateSelector/DateSelector";
import SelectField from "../../../components/common/SelectField";
import Gap from "../../../components/common/Gap";
import ToggleButtonWithText from "../../../components/common/ToggleButtonWithText";
import {
  InitialDetailsFormProps,
  InitialFormValues,
  ToggleValue,
  options,
} from ".";

export const InitialDetailsForm: React.FC<InitialDetailsFormProps> = ({
  selectedType,
  utilitiesIncluded,
  setUtilitiesIncluded,
  handleToggle,
  onSubmit,
}) => (
  <Formik<InitialFormValues>
    initialValues={{
      community: "",
      address: "",
      move_in_date: "",
      move_out_date: "",
      option: "",
      rent: 0,
      // utilities_included:false
    }}
    validationSchema={Yup.object().shape({
      community: Yup.string().required("Community is required"),
      address: Yup.string().required("Address is required"),
      move_in_date: Yup.string().required("Move-in date is required"),
      move_out_date:
        selectedType === ToggleValue.Temporary
          ? Yup.string().required("Move-out date is required")
          : Yup.string(),
      option: Yup.string().required("Room plan is required"),
      rent: Yup.number()
        .min(0, "Rent must be a positive number")
        .required("Rent is required"),
    })}
    onSubmit={(values, { setSubmitting }: FormikHelpers<InitialFormValues>) => {
      setSubmitting(false);
      // console.log("INITILA VALUES", values);
      console.log("INITILA VALUES", {
        ...values,
        "utilities-included": utilitiesIncluded,
      });
      onSubmit(values);
    }}
  >
    {({ handleSubmit }) => (
      <Form>
        <p className="heading">Create Accomodation</p>
        <div className="flex flex-col gap-4">
          <FormField
            name="community"
            placeholder="Enter community name"
            label="Community"
          />
          <FormField
            name="address"
            placeholder="Enter your full address"
            label="Address"
          />
          <div>
            <p className="text-label">Type</p>
            <ToggleButtonWithText
              options={[
                { value: ToggleValue.Permanent, label: "Permanent" },
                { value: ToggleValue.Temporary, label: "Temporary" },
              ]}
              initialValue={ToggleValue.Permanent}
              onToggle={handleToggle}
            />
          </div>

          <div>
            <p className="text-label">Move in</p>
            <FormField name="move_in_date" component={DateSelector} />
          </div>

          {selectedType === ToggleValue.Temporary && (
            <div>
              <p className="text-label">Move out</p>
              <FormField name="move_out_date" component={DateSelector} />
            </div>
          )}

          <FormField
            name="option"
            component={SelectField}
            options={options}
            label="Rooms"
          />

          <FormField
            name="rent"
            placeholder="Enter Rent"
            type="number"
            label="Individual rent ($)"
          />

          <div className="mt-2 flex items-center justify-between space-x-2">
            <div className="text-label">
              <div className="flex items-center">
                <div>Utilities included in rent</div>
                <Gap gap={1} />
              </div>

              <span className="text-xs font-normal">
                (gas, sewage, water, pest control, etc.)
              </span>
            </div>

            <Switch
              id="utilities-included"
              checked={utilitiesIncluded}
              onChange={setUtilitiesIncluded}
              className=""
            />
          </div>
        </div>

        <Gap gap={4} />
        <Button label="Next" onClick={() => handleSubmit()} type="secondary" />
        <Gap gap={4} />
      </Form>
    )}
  </Formik>
);
