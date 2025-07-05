import Create from "@/pages/Create";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
          <Route path="/create" element={<Create />} />
        </Routes>
      );
    }

 
export default Router;