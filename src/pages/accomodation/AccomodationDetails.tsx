import Pill from "../../components/common/Pill";
import Alert from "../../components/common/Alert";
import { useEffect, useState } from "react";
import ListItem from "../../components/common/ListItem";
import TimingInfo from "../../components/common/TimingInfo";
import { formatDateTime } from "../../utilities/helpers";
import Gap from "../../components/common/Gap";
import Divider from "../../components/common/Divider";
import {
  faCar,
  faWifi,
  faSwimmer,
  faDumbbell,
  faTableTennis,
  faBasketballBall,
  faTv,
  faCouch,
  faTshirt,
  faPaw,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

// Icon mapping
export const iconMap: { [key: string]: IconDefinition } = {
  Parking: faCar,
  Wifi: faWifi,
  Swimming: faSwimmer,
  Gym: faDumbbell,
  Tennis: faTableTennis,
  Basketball: faBasketballBall,
  TV: faTv,
  Sofa: faCouch,
  "Washing Machine": faTshirt,
  "Pet Friendly": faPaw,
};

const AccommodationDetails = () => {
  // This state object maps amenity names to their boolean selected states
  const [selectedAmenities, setSelectedAmenities] = useState<
    Record<string, boolean>
  >({});

  // Function to toggle the selected state of an amenity
  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) => ({
      ...prev,
      [amenity]: !prev[amenity], // Toggle the boolean value
    }));
  };

  // Use useEffect to log the selected amenities whenever they change
  useEffect(() => {
    console.log("Selected Amenities:", selectedAmenities);
  }, [selectedAmenities]);

  const data = {
    id: "664822747f8f7b13625b83d2",
    community_name: "Whispering Hills",
    address: "124st",
    type: "temporary",
    move_in_date: "2024-05-20T03:34:04.076000",
    move_out_date: "2024-07-20T03:34:04.076000",
    floor_plan: "2B2B",
    rent_amount_per_person: 193,
    utilities_included: false,
    current_occupancies: 6,
    available_occupancies: {
      boys: 2,
      girls: 2,
      any: 0,
    },
    amenities: [
      "Parking",
      "Wifi",
      "Swimming",
      "Gym",
      "Tennis",
      "Basketball",
      "TV",
      "Sofa",
      "Washing Machine",
      "Pet Friendly",
    ],
    status: "active",
    additional_info: "Cricket can be played at tennis court",
    created_at: "2024-05-17T22:37:24.562000",
    updated_at: "2024-05-17T22:37:24.562000",
  };

  const AccomodationInfo = [
    { label: "Community", value: data.community_name },
    { label: "Rooms", value: data.floor_plan },
    { label: "Created on", value: formatDateTime(data.move_in_date) },
    { label: "Individual Rent", value: `$${data.rent_amount_per_person}` },
    {
      label: "Current Occupancy",
      value: `${data.current_occupancies} members`,
    },
    {
      label: "Future Occupancy",
      value: `${
        data.available_occupancies.boys +
        data.available_occupancies.girls +
        data.available_occupancies.any
      } members`,
    },
    {
      label: "Type",
      value: "temporary",
      type: "temporary",
    },
  ];

  return (
    <div className={`flex flex-col bg-white  text-custom-black`}>
      <div className=" flex justify-between font-bold sm:text-lg md:text-lg lg:text-xl">
        <div>
          {data.available_occupancies.boys} BOYS{" "}
          {data.available_occupancies.girls} GIRLS
        </div>
        <div>${data.rent_amount_per_person}</div>
      </div>

      <div className="flex justify-between">
        <TimingInfo
          title="Move in"
          timing={formatDateTime(data.move_in_date)}
        />
        <div className={`text-sm text-gray-50`}>
          {data.utilities_included
            ? "(utilities included)"
            : "(utilities not included)"}
        </div>
      </div>

      {/* <Gap gap={2} /> */}
      <Divider />

      {/* ACCOMODATION DETAILS */}
      <div className="flex flex-col gap-1.5">
        {AccomodationInfo.map((item) => {
          return (
            <ListItem label={item.label} value={item.value} type={item.type} />
          );
        })}

        <Gap gap={4} />
        <div className="text-label">Amenities</div>
        <div className="justify-left flex flex-wrap">
          {data.amenities.map((item) => (
            <Pill
              key={item}
              title={item}
              icon={iconMap[item] || faCar} // Default to faCar if icon not found
              disabled={true}
              isActive={!!selectedAmenities[item]}
              onClick={() => toggleAmenity(item)}
            />
          ))}
        </div>
        <Divider />

        <div className="text-label">Contact Details</div>
        <ListItem label={"Name"} value={"Aravind Reddy Jitta"} />
        <ListItem
          label={"Name"}
          value={"Aravind Reddy Jitta"}
          type={"contact"}
        />

        <Gap gap={1} />
        <Alert
          heading={"Message from Owner"}
          message={
            "Near Walmart, Costco, and KC Mart, we are very friendly, and you'll get a homely feel!"
          }
          color="#F5F5F5"
        />
        <Gap gap={4} />
      </div>
    </div>
  );
};

export default AccommodationDetails;
