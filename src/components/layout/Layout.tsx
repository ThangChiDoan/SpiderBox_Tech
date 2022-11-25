import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: JSX.Element[];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container w-screen h-full">
      <Header />
      {children}
    </div>
  );
};
