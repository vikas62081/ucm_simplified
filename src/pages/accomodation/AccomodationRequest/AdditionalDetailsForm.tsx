import React, { useState } from "react";
// import { Formik, Form, FormikHelpers } from "formik";
import { Counter } from "../../../components/common/Counter";
import Switch from "../../../components/common/Switch";
import Button from "../../../components/common/Button";
// import FormField from "../../../components/common/FormField";
import SelectField from "../../../components/common/SelectField";
import Alert from "../../../components/common/Alert";
import Pill from "../../../components/common/Pill";
// import Divider from "../../../components/common/Divider";
import Gap from "../../../components/common/Gap";
import { ChevronLeft, PlusIcon } from "../../../assets/svg_icons";
import { AMENITIES } from "../../../utilities/constant";
import { iconMap } from "../AccomodationDetails";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import {
  AdditionalDetailsFormProps,
  roommateOptions,
  MAXIMUM_ROOMMATES_TYPE_ALLOWED,
} from ".";
import TextInput from "../../../components/common/TextInput";
import ScrollToTop from "../../../components/common/ScrollToTop";

interface CounterState {
  key: string;
  count: number;
}

export const AdditionalDetailsForm: React.FC<AdditionalDetailsFormProps> = ({
  initialFormValues,
  goBack,
}) => {
  // Independent error states
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({
    showConsentError: false,
    showCounterError: false,
    showError: false, // Add more as needed for other independent validations
  });
  const [staticCounter, setStaticCounter] = useState<CounterState>({
    key: "staticCounter",
    count: 0,
  });
  const [dynamicCounters, setDynamicCounters] = useState<CounterState[]>([
    { key: "dynamicCounter1", count: 0 },
  ]);

  const [selectedAmenities, setSelectedAmenities] = useState<
    Record<string, boolean>
  >({});
  // Initialize state for selected values
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string;
  }>({ dynamicCounter1: "BOYS" });
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  // Handler to update state for each select field
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const incrementHandler = (key: string) => {
    if (key === "staticCounter") {
      setStaticCounter((prevCounter) => ({
        ...prevCounter,
        count: prevCounter.count + 1,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        showCounterError: false, // Hide counter error when incrementing
      }));
    } else {
      setDynamicCounters((prevCounters) =>
        prevCounters.map((counter) =>
          counter.key === key
            ? { ...counter, count: counter.count + 1 }
            : counter,
        ),
      );
    }
  };

  const decrementHandler = (key: string) => {
    if (key === "staticCounter") {
      setStaticCounter((prevCounter) => ({
        ...prevCounter,
        count: Math.max(0, prevCounter.count - 1), // Ensure count does not go below 0
      }));
    } else {
      setDynamicCounters((prevCounters) =>
        prevCounters.map((counter) =>
          counter.key === key
            ? { ...counter, count: Math.max(0, counter.count - 1) }
            : counter,
        ),
      );
    }
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prevAmenities) => ({
      ...prevAmenities,
      [amenity]: !prevAmenities[amenity],
    }));
  };

  const addCounter = () => {
    if (dynamicCounters.length < MAXIMUM_ROOMMATES_TYPE_ALLOWED) {
      setDynamicCounters((prevCounters) => [
        ...prevCounters,
        { key: `dynamicCounter${prevCounters.length + 1}`, count: 0 },
      ]);
      setSelectedValues((prevValues) => ({
        ...prevValues,
        [`dynamicCounter${Object.keys(prevValues).length + 1}`]: "BOYS",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // console.log("CLCIKED");
    e.preventDefault();
    //staticCounter
    if (staticCounter.count === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        showError: true,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        showError: false,
      }));
      // Handle successful submit
    }

    //Dynamic Counter
    const hasValidCounter = dynamicCounters.some(
      (counter) => counter.count > 0,
    );

    if (!hasValidCounter) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        showCounterError: true,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        showCounterError: false,
      }));
    }

    // conset
    if (consent === false) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        showConsentError: true,
      }));
      // console.log("PRINT ");
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        showConsentError: false,
      }));
    }

    // Handle successful submit
    console.log(
      "Form submitted successfully!",

      {
        initialFormValues,
        occupied_roommates: staticCounter.count,
        // future_roommates: { BOYS: "", GIRLS: "", ANY: "" },
        future_roommates: mapSelectionsToFutureRoommates(),
        amenities: selectedAmenities,
        message: message,
        consent: consent,
        // selectedValues,
        // dynamicCounters,
      },
    );
  };

  const formattedFutureRoommates = () => {
    const futureRoommates = mapSelectionsToFutureRoommates();

    const formattedValues = [
      futureRoommates.BOYS > 0
        ? `${futureRoommates.BOYS} BOY${futureRoommates.BOYS > 1 ? "S" : ""}`
        : "",
      futureRoommates.GIRLS > 0
        ? `${futureRoommates.GIRLS} GIRL${futureRoommates.GIRLS > 1 ? "S" : ""}`
        : "",
      futureRoommates.ANY > 0
        ? `${futureRoommates.ANY} PERSON${futureRoommates.ANY !== 1 ? "S" : ""}`
        : "",
    ]
      .filter(Boolean) // Remove empty strings
      .join(", "); // Join the non-empty strings with commas

    return formattedValues || ""; // Return the formatted string or an empty string if no counts are greater than zero
  };

  const mapSelectionsToFutureRoommates = () => {
    const futureRoommates = {
      BOYS: 0,
      GIRLS: 0,
      ANY: 0,
    };

    dynamicCounters.forEach(({ key, count }) => {
      const selectedValue = selectedValues[key];
      // console.log(
      //   "Processing:",
      //   key,
      //   "Count:",
      //   count,
      //   "Selected Value:",
      //   selectedValue,
      // );

      if (selectedValue && count > 0) {
        futureRoommates[selectedValue as keyof typeof futureRoommates] += count;
      }
    });

    // Convert numerical values to string, if necessary, to match the expected output format
    // return {
    //   BOYS: futureRoommates.BOYS > 0 ? `${futureRoommates.BOYS}` : "",
    //   GIRLS: futureRoommates.GIRLS > 0 ? `${futureRoommates.GIRLS}` : "",
    //   ANY: futureRoommates.ANY > 0 ? `${futureRoommates.ANY}` : "",
    // };
    return futureRoommates;
  };

  return (
    <form onSubmit={handleSubmit}>
      <ScrollToTop />
      <div className="mb-2">
        <div className="flex items-center gap-2">
          <button
            style={{ backgroundColor: "white" }}
            className="flex h-9 w-9 items-center justify-center rounded-md text-custom-black outline-none"
            onClick={() => goBack()}
            onTouchStart={(e) =>
              (e.currentTarget.style.transform = "scale(0.93)")
            }
            onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <ChevronLeft color="black" size={6} />
          </button>
          <p className="heading mb-0">Create accommodation</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Alert
          heading={"Maximize Your Match Speed"}
          message={
            "Add amenities, roommate preferences to your request. Statistics show that 75% of users who provide all this additional information find roommates within just 24 hours!"
          }
          textAlign={"left"}
          color="#7EFFD1"
        />

        <div>
          <p className="text-label">Occupied roommate count*</p>
          <Counter
            key={staticCounter.key}
            count={staticCounter.count}
            incrementHandler={() => incrementHandler("staticCounter")}
            decrementHandler={() => decrementHandler("staticCounter")}
          />
          {errors.showError && (
            <div className="error">
              Occupied roommate count must be more than zero
            </div>
          )}
        </div>

        <div className="felx">
          <p className="text-label">Future roommate count*</p>

          {dynamicCounters.map(({ key, count }, index) => (
            <div key={key} className="mb-2 flex flex-col">
              <div className="flex items-center">
                <div className="flex-grow">
                  <SelectField
                    name={key}
                    value={selectedValues[key] || ""}
                    onChange={handleSelectChange}
                    options={roommateOptions}
                  />
                </div>
                <div className="ml-4 w-36">
                  <Counter
                    key={key}
                    count={count}
                    incrementHandler={() => incrementHandler(key)}
                    decrementHandler={() => decrementHandler(key)}
                  />
                </div>
              </div>
              {errors.showCounterError && (
                <div className="error">
                  At least one counter must have a count greater than zero.
                </div>
              )}
            </div>
          ))}

          <Gap />
          {dynamicCounters.length !== MAXIMUM_ROOMMATES_TYPE_ALLOWED && (
            <Button
              icon={<PlusIcon />}
              label="Add New Field"
              type="tertiary"
              onClick={addCounter}
            />
          )}
          <div className="text-label pt-4 text-gray-500">
            {formattedFutureRoommates() &&
              `Selected ${formattedFutureRoommates()}`}
          </div>
        </div>
        {/* <Gap gap={4} /> */}

        <div>
          <div className="text-label">Select Amenities</div>
          <div className="justify-left flex flex-wrap">
            {AMENITIES.map((item) => (
              <Pill
                key={item}
                title={item}
                icon={iconMap[item] || faCar} // Default to faCar if icon not found
                disabled={false}
                isActive={!!selectedAmenities[item]}
                onClick={() => toggleAmenity(item)}
              />
            ))}
          </div>
        </div>

        {/* <Gap gap={4} /> */}
        <div>
          <div className="text-label">Message to future roommates</div>
          <TextInput
            name="text"
            placeholder="Include Walmart, Costco distances & other missing details."
            value={message}
            onChange={handleMessageChange}
          />
        </div>

        {/* <Divider /> */}
        <div>
          <div className="mt-2 flex items-center justify-between space-x-2">
            <div className="text-label">
              <div className="flex items-center">
                <div>I confirm that all provided details are accurate</div>
                <Gap gap={1} />
              </div>
              <p className="mr-4 text-xs font-normal">
                (amenities, rent, roommates count, etc.)
              </p>
            </div>

            <Switch
              id="details-confirmed"
              checked={consent}
              onChange={() => {
                setConsent(!consent);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  showConsentError: false, // Hide counter error when incrementing
                }));
              }}
            />
          </div>
          {errors.showConsentError && (
            <div className="error justify-end text-right">You must check</div>
          )}
        </div>

        {/* CHECKING JSON */}

        {/* <div className="mt-4">
          <h3>Future Roommates:</h3>
          <pre className="bg-black">
            {JSON.stringify(mapSelectionsToFutureRoommates(), null, 2)}
          </pre>
        </div> */}

        <Gap gap={4} />

        <Button label="Submit" type="primary" />
        <Gap gap={2} />
      </div>
      {/* </div> */}
    </form>
  );
};
