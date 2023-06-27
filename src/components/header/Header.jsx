import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "./header.css";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";


const Header = ({type}) => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [datePopup, setDatePopup] = useState(false);

    const [addPeoplePopup, setAddPeoplePopup] = useState(false);

    const [addPeople, setAddPeople] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const [destination, setDestination] = useState("");

    const navigate = useNavigate();

    const handleAddPeople = (name, opr) => {
        setAddPeople((prev) => {
            return {
                ...prev,
                [name]: opr === "incr" ? addPeople[name] + 1 : addPeople[name] - 1
            }
        })
    };

    const handleSearch = () => {
        navigate("/list", { state: { destination, date, addPeople }});
    };

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>
                {type !== "list" && <><h1 className="headerTitle">
                    Explore, travel, love.
                </h1>
                <p className="headerDesc">
                    Get rewarded for your travels - unlock instant savings of 10% or more with a first booking
                </p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="searchBar">
                    <div className="searchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" className="searchInput" placeholder="Where are you going?" onChange={e => setDestination(e.target.value)} />
                    </div>
                    <div className="searchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={() => setDatePopup(!datePopup)} className="searchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {datePopup && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="dateRange"
                            minDate={new Date()}
                        />}
                    </div>
                    <div className="searchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={() => setAddPeoplePopup(!addPeoplePopup)} className="searchText">{`${addPeople.adult} adult | ${addPeople.children} children | ${addPeople.room} room`}</span>
                        {addPeoplePopup && <div className="addPeople">
                            <div className="addPeopleItem">
                                <span className="addPeopleText">Adult</span>
                                <div className="addPeopleCounter">
                                    <button disabled={addPeople.adult <= 1} className="addPeopleCounterButton" onClick={() => handleAddPeople("adult", "decr")}>-</button>
                                    <span className="addPeopleCounterNumber">{addPeople.adult}</span>
                                    <button className="addPeopleCounterButton" onClick={() => handleAddPeople("adult", "incr")}>+</button>
                                </div>
                            </div>
                            <div className="addPeopleItem">
                                <span className="addPeopleText">Children</span>
                                <div className="addPeopleCounter">
                                    <button disabled={addPeople.children <= 0} className="addPeopleCounterButton" onClick={() => handleAddPeople("children", "decr")}>-</button>
                                    <span className="addPeopleCounterNumber">{addPeople.children}</span>
                                    <button className="addPeopleCounterButton" onClick={() => handleAddPeople("children", "incr")}>+</button>
                                </div>
                            </div>
                            <div className="addPeopleItem">
                                <span className="addPeopleText">Room</span>
                                <div className="addPeopleCounter">
                                    <button disabled={addPeople.room <= 1} className="addPeopleCounterButton" onClick={() => handleAddPeople("room", "decr")}>-</button>
                                    <span className="addPeopleCounterNumber">{addPeople.room}</span>
                                    <button className="addPeopleCounterButton" onClick={() => handleAddPeople("room", "incr")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="searchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div></>}
            </div>
        </div>
    )
}

export default Header;
