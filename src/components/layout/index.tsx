// src/components/layout/Layout.tsx
import React, { ReactNode } from "react";
import Header from "./Header";
import BottomNav from "../BottomNav";
import ScrollToTop from "../common/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md bg-white ">
      <ScrollToTop />
      <Header />
      <main className="min-w-md min-h-screen flex-grow pl-4 pr-4 pt-4">
        {children}
      </main>
      <BottomNav />
      {/* //changed pt-0 to pt-4 */}
    </div>
  );
};

export default Layout;
