import React from "react";
import "./GigCard.scss";

const GigCard = ({ data }) => {
  // console.log(data);
  // console.log(data.data.profileName)

  return (
    <div className="GigCardWrapper">
      <div className="GigImageWrapper">
        <img src={data.coverPic} className="gigCardImage" />
        <img src="/star.png" className="favouriteIcon" />
      </div>
      <div className="gDescription">
        <div className="gProfileAndName">
          <img src={data.profilePic} className="gProfileImage" />
          <span className="gProfileName">{data.profileName}</span>
        </div>
        <div className="gFiversChoice">
          <span className="topRatedtext">
            {" "}
            {data.TopRated ? "TopRated" : "Pro"}{" "}
          </span>
        </div>
      </div>
      <div className="gigsDescriptionBottom">
        <span className="gigsDescTop">{data.gigsDescription}</span>
        <span className="gigsratingText">
          <img className="reviewStar" src="/star.png" />
          {data.ratingNumber} {data.numberOfRating}
        </span>
        <span className="gigMoneyDetails">
          From <img src="/rupee-indian.png" width="10" height="10" />{" "}
          {data.rate}
        </span>
      </div>
    </div>
  );
};

export default GigCard;
