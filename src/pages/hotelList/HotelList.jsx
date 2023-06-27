import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotelList.css";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import HotelListRes from "../../components/hotelListRes/HotelListRes";

const HotelList = () => {

    const location = useLocation();
    const[destination, setDestination] = useState(location.state.destination);
    const[date, setDate] = useState(location.state.date);
    const[options, setOptions] = useState(location.state.addPeople);
    const [datePopup, setDatePopup] = useState(false);

    return (
        <div>
            <Navbar/>
            <Header type="list" />
            <div className="hotelListContainer">
                <div className="hotelListWrapper">
                    <div className="hotelListFilter">
                        <h1 className="hlfTitle">Search</h1>
                        <div className="hlfItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="hlfItem">
                            <label>Check-in Date</label>
                            <span onClick={() => setDatePopup(!datePopup)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {datePopup && <DateRange 
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />}
                        </div>
                        <div className="hlfItem">
                                <label>Options</label>
                                <div className="hlfOptionItem">
                                    <span className="hlfOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input type="number" className="hlfOptionInput" />
                                </div>
                                <div className="hlfOptionItem">
                                    <span className="hlfOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" className="hlfOptionInput" />
                                </div>
                                <div className="hlfOptionItem">
                                    <span className="hlfOptionText">
                                        Adult
                                    </span>
                                    <input type="number" min={0} className="hlfOptionInput" placeholder={options.adult} />
                                </div>
                                <div className="hlfOptionItem">
                                    <span className="hlfOptionText">
                                        Children
                                    </span>
                                    <input type="number" min={0} className="hlfOptionInput" placeholder={options.children} />
                                </div>
                                <div className="hlfOptionItem">
                                    <span className="hlfOptionText">
                                        Room
                                    </span>
                                    <input type="number" min={1} className="hlfOptionInput" placeholder={options.room} />
                                </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="hotelListResult">
                        <HotelListRes />
                        <HotelListRes />
                        <HotelListRes />
                        <HotelListRes />
                        <HotelListRes />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HotelList;