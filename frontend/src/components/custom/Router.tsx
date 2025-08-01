import Create from "@/pages/Create";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      );
    }

 
export default Router;