import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./singleHotel.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import EmailForm from "../../components/emailForm/EmailForm";
import Footer from "../../components/footer/Footer";

const SingleHotel = () => {

    const photos = [
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/22/25/ce/ea/kingsford-hotel-manila.jpg" },
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/22/25/ce/ea/kingsford-hotel-manila.jpg" },
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/22/25/ce/ea/kingsford-hotel-manila.jpg" },
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/22/25/ce/ea/kingsford-hotel-manila.jpg" },
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/22/25/ce/ea/kingsford-hotel-manila.jpg" },
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/22/25/ce/ea/kingsford-hotel-manila.jpg" }
    ];

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="shContainer">
                <div className="shWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="shTitle">Grand Hotel</h1>
                    <div className="shAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="shDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="shPriceHighlight">
                        Book a stay over ₹123 at this property and get a free airport taxi
                    </span>
                    <div className="shImages">
                        {photos.map(photo => (
                            <div className="shImageWrapper">
                                <img src={photo.src} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="shDetails">
                        <div className="shDetailsText">
                            <h1 className="shTitle">Stay in the heart of Krakow</h1>
                            <p className="shDesc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="shDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </span>
                            <h2>
                                <b>₹123</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <EmailForm />
                <Footer />
            </div>
        </div>
    )
};

export default SingleHotel;