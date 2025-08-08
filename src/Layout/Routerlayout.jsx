
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routerlayout = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        
         
      </Routes>
    </BrowserRouter>
  )
}

export default Routerlayout