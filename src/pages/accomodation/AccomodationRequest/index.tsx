import React, { useState } from "react";
import { InitialDetailsForm } from "./InitialDetailsForm";
import { AdditionalDetailsForm } from "./AdditionalDetailsForm";

export const options = [
  { label: "Select room plan", value: "" },
  { label: "2 BED 2 BATH", value: "2B2B" },
  { label: "3 BED 2 BATH", value: "3B2B" },
  { label: "1 BED 1 BATH", value: "1B1B" },
  { label: "2 BED 1/2 BATH", value: "1B0.5B" },
];

export const roommateOptions = [
  { label: "BOYS", value: "BOYS" },
  { label: "GIRLS", value: "GIRLS" },
  { label: "ANY", value: "ANY" },
];

export const MAXIMUM_ROOMMATES_TYPE_ALLOWED = 3;

export enum ToggleValue {
  Permanent = "permanent",
  Temporary = "temporary",
}

interface CounterState {
  key: string;
  count: number;
}

export interface InitialFormValues {
  community: string;
  address: string;
  move_in_date: string;
  move_out_date: string;
  option: string;
  rent: number;
}

export interface AdditionalFormValues {
  staticCounter: CounterState;
  dynamicCounters: CounterState[];
  selectedAmenities: Record<string, boolean>;
}

export interface InitialDetailsFormProps {
  selectedType: ToggleValue;
  utilitiesIncluded: boolean;
  setUtilitiesIncluded: (value: boolean) => void;
  handleToggle: (value: ToggleValue) => void;
  onSubmit: (values: InitialFormValues) => void;
}

export interface AdditionalDetailsFormProps {
  // staticCounter: CounterState;
  // incrementHandler: (key: string) => void;
  // decrementHandler: (key: string) => void;
  // dynamicCounters: CounterState[];
  // addCounter: () => void;
  // selectedAmenities: Record<string, boolean>;
  // toggleAmenity: (amenity: string) => void;
  initialFormValues: InitialFormValues | null;
  goBack: () => void;
}

const AccomodationRequest: React.FC = () => {
  const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);
  const [initialFormValues, setInitialFormValues] =
    useState<InitialFormValues | null>(null);
  const [selectedType, setSelectedType] = useState<ToggleValue>(
    ToggleValue.Permanent,
  );
  const [utilitiesIncluded, setUtilitiesIncluded] = useState(true);

  const handleToggle = (value: ToggleValue) => {
    setSelectedType(value);
  };

  const handleFirstFormSubmit = (values: InitialFormValues) => {
    setInitialFormValues(values);
    setShowAdditionalDetails(true);
  };

  const handleGoBackToFirstFormSubmit = () => {
    setShowAdditionalDetails(false);
  };

  return (
    <div>
      {!showAdditionalDetails ? (
        <InitialDetailsForm
          selectedType={selectedType}
          utilitiesIncluded={utilitiesIncluded}
          setUtilitiesIncluded={setUtilitiesIncluded}
          handleToggle={handleToggle}
          onSubmit={handleFirstFormSubmit}
        />
      ) : (
        <AdditionalDetailsForm
          initialFormValues={initialFormValues}
          goBack={handleGoBackToFirstFormSubmit}
        />
      )}
    </div>
  );
};

export default AccomodationRequest;
