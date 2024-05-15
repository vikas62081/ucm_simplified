// Example usage in HomePage.tsx or any other component
import React from "react";
import Card from "../components/common/Card";
import {
  faBed,
  faExchangeAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const dashboardItems = [
  {
    title: "Accommodation",
    description: "Find and share accommodations.",
    icon: faBed,
    to: "/accommodation",
    key: "accCount",
  },
  {
    title: "Subject Swap",
    description: "Swap subjects with peers.",
    icon: faExchangeAlt,
    to: "/swap",
    key: "subCount",
  },
  {
    title: "Professor Details",
    description: "View professor contact details and office hours.",
    icon: faUserTie,
    to: "/professor-details",
  },
];

// const summary = {
//   accCount: 8,
//   subCount: 6,
// };

const HomePage: React.FC = () => {
  const navigateToDetails = (path: string) => {
    // Replace with your router's navigation method
    console.log(`Navigating to ${path}`);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex-grow p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1 ">
          {dashboardItems.map((item) => (
            <Card
              title={item.title}
              // description={summary[item?.key] || "N/A"}
              description={item.description}
              icon={item.icon}
              onClick={() => navigateToDetails(item.to)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
