import React, { useState, useEffect } from "react";
import AccomodationCard, { AccomodationCardProps } from "./AccomodationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AccomodationList: React.FC = () => {
  // State to store the list of accommodations
  const [accommodations, setAccommodations] = useState<AccomodationCardProps[]>(
    [],
  );

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      const data: AccomodationCardProps[] = [
        {
          id: "664822747f8f7b13625b83d2",
          community_name: "Whispering Hills",
          address: "124st",
          type: "temporary",
          move_in_date: "2024-05-20",
          move_out_date: "2024-07-20T03:34:04.076000",
          floor_plan: "2B2B",
          rent_amount_per_person: 215,
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
          utilities_included: false,
          dropShadow: true,
        },
        // Add more accommodations if needed
      ];

      setAccommodations(data);
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 ">
      {accommodations.map((accommodation) => (
        <AccomodationCard key={accommodation.id} item={accommodation} />
      ))}
      <div className="fixed bottom-3 my-0 flex self-end ">
        <div
          //   style={{ backgroundColor: "#ffc400" }}
          className="flex cursor-pointer items-center justify-center rounded-full border  bg-primary px-3  text-white drop-shadow-lg xs:py-2 sm:py-2 md:py-3 lg:py-3"
          onClick={() => navigate("/accomodation/request")}
        >
          <FontAwesomeIcon icon={faPlus} />
          <span className="pl-2">Add new</span>
        </div>
      </div>
    </div>
  );
};

export default AccomodationList;
