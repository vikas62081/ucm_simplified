// src/components/layout/Layout.tsx
import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white relative">
      <div className="w-full max-w-lg min-h-screen ">
        <Header />
        <main className="flex-grow pt-0 min-w-lg">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
