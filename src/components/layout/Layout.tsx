// src/components/layout/Layout.tsx
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-full sm:max-w-sm md:max-w-mobile-lg bg-white rounded-lg shadow-xl mx-0">
        {children}
      </div>
    </div>
  );
};

export default Layout;
