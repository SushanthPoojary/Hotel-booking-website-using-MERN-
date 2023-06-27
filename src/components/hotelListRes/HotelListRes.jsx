import "./hotelListRes.css";

const HotelListRes = () => {
    return ( 
        <div className="hotelListRes">
            <img className="hlrImg" src="https://media-cdn.tripadvisor.com/media/photo-s/22/25/ce/ea/kingsford-hotel-manila.jpg" alt="" />
            <div className="hlrDesc">
                <h1 className="hlrDescTitle">Tower Street Apartments</h1>
                <span className="hlrDistance">500m from center</span>
                <span className="hlrTaxiOption">Free airport taxi</span>
                <span className="hlrSubTitle">
                    Studio Apartment with Air Conditioning
                </span>
                <span className="hlrFeatures">
                    Entire studio · 1 bathroom · 21m2 1 full bed
                </span>
                <span className="hlrCancelOption">Free Cancellation</span>
                <span className="hlrCancelSubTitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="hlrDetails">
                <div className="hlrDetailsRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="hlrDetailsTexts">
                    <span className="hlrDetailsPrice">₹123</span>
                    <span className="hlrDetailsTax">Includes taxes and fees</span>
                    <button className="hlrDetailsTextsButton">See availability</button>
                </div>
            </div>
        </div>
    );
}
 
export default HotelListRes;