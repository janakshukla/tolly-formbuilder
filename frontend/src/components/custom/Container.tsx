import React from "react";
import Navbar from "./Navbar";
interface MyComponentProps {
  childern: React.ReactNode;
}

const Container: React.FC<MyComponentProps> = ({ childern }) => {
  return (
    <div>
      <Navbar />
      <div>{childern}</div>
    </div>
  );
};

export default Container;
