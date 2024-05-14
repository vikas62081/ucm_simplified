// src/components/layout/Layout.tsx
import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full max-w-md min-h-screen mx-auto bg-white ">
      <Header />
      <main className="flex-grow pt-0 min-w-lg">{children}</main>
    </div>
  );
};

export default Layout;
