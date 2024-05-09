// src/pages/HomePage.tsx
import React from "react";
import Card from "../components/common/Card";
import Navbar from "../components/layout/Navbar";
import BottomNav from "../components/BottomNav";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Home Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            title="Accommodation"
            description="Find and share accommodations."
            icon="/icons/accommodation.png"
          />
          <Card
            title="Subject Swap"
            description="Swap subjects with peers."
            icon="/icons/swap.png"
          />
          <Card
            title="Professor Details"
            description="View professor contact details and office hours."
            icon="/icons/professor.png"
          />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default HomePage;
