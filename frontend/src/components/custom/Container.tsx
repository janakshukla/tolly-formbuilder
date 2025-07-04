import React from "react";
import Navbar from "./Navbar";
interface MyComponentProps {
  children: React.ReactNode;
}

const Container: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="bg-cream">
      <Navbar />
      <div className="overflow-x-hidden" >{children}</div>
    </div>
  );
};

export default Container;
