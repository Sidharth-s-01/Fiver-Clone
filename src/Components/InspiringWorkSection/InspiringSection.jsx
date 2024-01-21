import React from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Inspiring.scss";
import ReactSimplyCarousel from "react-simply-carousel";
import { data } from "../../../dataInspiring";
import { Link } from "react-router-dom";

const InspiringSection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="EachWorkWRapper">
      <h1>Inspiring work made on Fiverr</h1>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={4}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            position: "absolute",
            zIndex: "9",
            right: "100px",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 50,
            lineHeight: 1,
            textAlign: "center",
            width: 50,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            position: "absolute",
            zIndex: "9",
            left: "100px",
            alignSelf: "center",
            background: "grey",
            border: "none",
            borderRadius: "50%",
            color: "black",
            cursor: "pointer",
            fontSize: "20px",
            height: 50,
            lineHeight: 1,
            textAlign: "center",
            width: 50,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: "300px",
            minHeight: "450px",
          },
        ]}
        speed={600}
        easing="linear">
        {data.map((d) => (
          <>
            <div style={{ width: 350, height: 450 }}>
              <Link to={"/gig/" + d.id} className="EachWorkLink">
                <div className="EachWork">
                  <img src={d.mainImage} className="mainImage" />
                  <div className="EachWorkDescWrapper">
                    <img src={d.profile} className="ProfileImage" />
                    <div className="workDesc">
                      <span className="workcat">{d.name}</span>
                      <span>{d.description}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
};

export default InspiringSection;
