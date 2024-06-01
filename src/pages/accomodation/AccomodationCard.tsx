import React from "react";
import { useNavigate } from "react-router-dom";
import TimingInfo from "../../components/common/TimingInfo";
import ListItem from "../../components/common/ListItem";
import Gap from "../../components/common/Gap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "./AccomodationDetails";

// Corrected interface definition
export interface AccomodationCardProps {
  id: string;
  community_name: string;
  address: string;
  type: string;
  move_in_date: string;
  move_out_date: string;
  floor_plan: string;
  rent_amount_per_person: number;
  current_occupancies: number;
  available_occupancies: {
    boys: number;
    girls: number;
    any: number;
  };
  amenities: string[]; // Corrected typo here
  status: string;
  additional_info: string;
  utilities_included: boolean;
  dropShadow?: boolean;
}

const NUMBER_OF_ICONS_SHOWN = 3;
const AccomodationCard: React.FC<{ item: AccomodationCardProps }> = ({
  item,
}) => {
  const navigate = useNavigate();

  const {
    community_name,
    move_in_date,
    rent_amount_per_person,
    available_occupancies,
    amenities,
    type,
    utilities_included,
    dropShadow = true,
  } = item;

  const goToAccomodationDetail = () => {
    navigate("/accomodations/detail", { state: item });
  };

  return (
    <div
      onClick={() => {
        goToAccomodationDetail();
      }}
      className={`mb-1 mt-0 rounded-lg border border-gray-300 bg-white px-3 py-2  text-custom-black ${dropShadow ? "shadow-custom" : ""}`}
    >
      <p className="flex justify-between py-0 font-bold sm:text-lg md:text-lg lg:text-xl">
        {[
          available_occupancies.boys
            ? `${available_occupancies.boys} BOY${available_occupancies.boys > 1 ? "S" : ""}`
            : "",
          available_occupancies.girls
            ? `${available_occupancies.girls} GIRL${available_occupancies.girls > 1 ? "S" : ""}`
            : "",
          available_occupancies.any
            ? `${available_occupancies.any} PERSON${available_occupancies.any !== 1 ? "S" : ""}`
            : "",
        ]
          .filter(Boolean)
          .join(", ")}
        <span className="text-custom-black">${rent_amount_per_person}</span>
      </p>

      <div className="flex justify-between  text-xs text-gray-50">
        <TimingInfo title={"Move in"} timing={move_in_date} type={"card"} />
        <div>
          {utilities_included ? "Utilities included" : "Utilities not included"}
        </div>
      </div>

      <Gap gap={1} />

      <ListItem label="Community" value={community_name} />
      <ListItem label="Room" value={item.floor_plan} />

      <p className="flex items-center justify-between py-1 text-xs text-gray-600">
        <div className="flex items-center">
          {amenities.slice(0, NUMBER_OF_ICONS_SHOWN).map((amenity, index) => (
            <div
              key={index}
              className=" mr-1 flex items-center justify-center rounded-full border border-gray-300 xs:p-1 sm:p-1.5 md:p-2"
            >
              <FontAwesomeIcon
                icon={iconMap[amenity]}
                className="text-gray-600"
              />
            </div>
          ))}
          {amenities.length > NUMBER_OF_ICONS_SHOWN && (
            <span className="text-gray-50">
              +{amenities.length - NUMBER_OF_ICONS_SHOWN} Amenities
            </span>
          )}
        </div>
        <span className="text-black">
          {type === "temporary" ? (
            <div className="rounded-lg border border-yellow-300 bg-yellow-100 px-4">
              Temporary
            </div>
          ) : (
            <div className="rounded-lg border border-green-300 bg-green-100 px-4">
              Permanent
            </div>
          )}
        </span>
      </p>
    </div>
  );
};

export default AccomodationCard;
