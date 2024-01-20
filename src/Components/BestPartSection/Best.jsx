import React from 'react'
import "./best.scss"
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


const Best = () => {
  return (
    <div className="bestWrapper">
      <div className="bestContainer">
        <span className="headingBestPart">The Best part ? Everything</span>
        <div className="eachPointWrapper">
          <div className="eachPoint">
            <img width="30" height="30" src="/tick.png" alt="checked--v1" />
            <span className="pointHeader">Stick to your budget</span>
          </div>
          <spn className="eachPointDescription">
            Find the right service for every price point. No hourly rates, just
            project-based pricing.
          </spn>
        </div>
        <div className="eachPointWrapper">
          <div className="eachPoint">
            <img width="30" height="30" src="/tick.png" alt="checked--v1" />
            <span className="pointHeader">Get quality work done quickly</span>
          </div>
          <spn className="eachPointDescription">
            Hand your project over to a talented freelancer in minutes, get
            long-lasting results.
          </spn>
        </div>
        <div className="eachPointWrapper">
          <div className="eachPoint">
            <img width="30" height="30" src="/tick.png" alt="checked--v1" />
            <span className="pointHeader">Pay when you're happy</span>
          </div>
          <spn className="eachPointDescription">
            Upfront quotes mean no surprises. Payments only get released when
            you approve.
          </spn>
        </div>{" "}
        <div className="eachPointWrapper">
          <div className="eachPoint">
            <img width="30" height="30" src="/tick.png" alt="checked--v1" />
            <span className="pointHeader">Count on 24/7 support</span>
          </div>
          <spn className="eachPointDescription">
            Our round-the-clock support team is available to help anytime,
            anywhere.
          </spn>
        </div>
      </div>
      <div className="imageWrapper">
        <img
          src="https://i.pinimg.com/564x/46/40/ce/4640ce518280885a19ade78b9bbd10c5.jpg"
          className="dummyImage"
        />
        <div className="popupWrapper">
          <Popup
            trigger={<img src="/playIcon.png" className="playicon" />}
            modal
            nested
            contentStyle={{ width: "800px", height:"500px",backgroundColor: "grey" }}
          >
            {(close) => (
              <div className="modal">
                <video src="/video.mp4" width="800" height="500" controls autoPlay="true"/>
                <div className="closePopup">
                  
                    <img src="/close.png" onClick={() => close()} width="40px" height="40px"/>
                 
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Best