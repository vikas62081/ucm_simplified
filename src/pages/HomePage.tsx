// Example usage in HomePage.tsx or any other component
import React, { useEffect } from "react";
import Card from "../components/common/Card";
import {
  faBed,
  faExchangeAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

const dashboardItems = [
  {
    title: "Accommodation",
    description: "Find and share accommodations.",
    icon: faBed,
    to: "/accomodation/detail",
    key: "accCount",
  },
  {
    title: "Subject Swap",
    description: "Swap subjects with peers.",
    icon: faExchangeAlt,
    to: "/subjects/",
    key: "subCount",
  },
  {
    title: "Professor Details",
    description: "View professor contact details and office hours.",
    icon: faUserTie,
    to: "/professor-details",
  },
];

const authService = new AuthService()
// const summary = {
//   accCount: 8,
//   subCount: 6,
// };

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    authService.login("vikas@ucmo.com","Hello")
  },[])
  const navigateToDetails = (path: string) => {
    // Replace with your router's navigation method
    navigate(path);
  };
  return (
    <div className="flex w-full flex-col">
      <div className="flex-grow">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1 ">
          {dashboardItems.map((item, index) => (
            <Card
              key={index}
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
