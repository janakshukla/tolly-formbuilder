import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      );
    }
}
 
export default Router;