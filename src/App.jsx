import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HotelList from "./pages/hotelList/HotelList";
import SingleHotel from "./pages/singleHotel/SingleHotel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<HotelList />} />
        <Route path="/hotel/:id" element={<SingleHotel />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;