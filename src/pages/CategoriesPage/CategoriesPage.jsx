import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import GigCard from "../../Components/Gigcard/GigCard.jsx";
import { CardsData } from "../../../../categoryData.js";
import { Link, useLocation } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./CategoriesPage.scss";

import DropdownButton from "react-bootstrap/DropdownButton";
const CategoriesPage = () => {
  const params = useParams();
  const { pathname } = useLocation();


 
  const pathMain = pathname.split("/")[2];
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [value1, setValue1] = useState("Service Options");
  const [value2, setValue2] = useState("Deve Meth");
  const [value3, setValue3] = useState("Hosting Services");

  const handleDropdown1 = (event) => {
    setValue1(event.target.innerHTML);
    setOpen(false);
  };

  const handleDropdown2 = (event) => {
    setValue2(event.target.innerHTML);
    setOpen2(false);
  };
  const handleDropdown3 = (event) => {
    setValue3(event.target.innerHTML);
    setOpen3(false);
  };

  const handleOpen = () => {
    if (open == true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleOpen2 = () => {
    if (open2 == true) {
      setOpen2(false);
    } else {
      setOpen2(true);
    }
  };

  const handleOpen3 = () => {
    if (open3 == true) {
      setOpen3(false);
    } else {
      setOpen3(true);
    }
  };

  return (
    <div className="categoriesWrapper">
      <div className="categoriesTop">
        <div>
          <span className="CategoriesPathWrapper">
            <img src="/home.png" width="18" height="19" />/
            {" " + params.category}
          </span>
        </div>
        <span className="TypeOfDesign">{params.category} Develpoment</span>
        <span className="exploreAll">
          Explore All the boundaries of {params.category} Develpoment
        </span>
      </div>
      <div className="filterSection">
        <div className="dropDownWrapper">
          <div className="dropDownMenu1">
            <span className="dropHead" onClick={handleOpen}>
              {value1}
              <img src="/arrow-down.png" />
            </span>
            <div className={open ? "serviceDrop" : "serviceClosed"}>
              {open && (
                <>
                  <span onClick={handleDropdown1}>Best Selling</span>
                  <span onClick={handleDropdown1}>Best Budget</span>
                  <span onClick={handleDropdown1}>Best class</span>
                </>
              )}
            </div>
          </div>
          <div className="dropDownMenu1">
            <span className="dropHead" onClick={handleOpen2}>
              {value2}
              <img src="/arrow-down.png" />
            </span>
            <div className={open2 ? "serviceDrop" : "serviceClosed"}>
              {open2 && (
                <>
                  <span onClick={handleDropdown2}>Best Selling</span>
                  <span onClick={handleDropdown2}>Best Budget</span>
                  <span onClick={handleDropdown2}>Best class</span>
                </>
              )}
            </div>
          </div>{" "}
          <div className="dropDownMenu1">
            <span className="dropHead" onClick={handleOpen3}>
              {value3}
              <img src="/arrow-down.png" />
            </span>
            <div className={open3 ? "serviceDrop" : "serviceClosed"}>
              {open3 && (
                <>
                  <span onClick={handleDropdown3}>Best Selling</span>
                  <span onClick={handleDropdown3}>Best Budget</span>
                  <span onClick={handleDropdown3}>Best class</span>
                </>
              )}
            </div>
          </div>
        </div>

        <span>Pro Services Available</span>
      </div>
      <span className="TotalServicesAvailable">180000 Services Available</span>
      <div className="categoriesCardsWrapper">
        {CardsData.map((card) => (
          <GigCard data={card} key={card.id} />
        ))}
      </div>

      <div className="NumberRow">
        <img src="/arrowLeft.png" width="20" height="20" />
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>

        <img src="/right-arrow.png" width="20" height="20" />
      </div>
      <hr style={{ marginTop: 40 }} />
      <div className="WebDevelopmentServicesWrapper">
        <span className="wbDevHeader">
          Explore More Website Development Services
        </span>
        <div className="wbDevServices">
          <span className="wbeachService">Website Design</span>
          <span className="wbeachService">SEO</span>
          <span className="wbeachService">Website Mainternance</span>
          <span className="wbeachService">Website Migration</span>
          <span className="wbeachService">Magento</span>
          <span className="wbeachService">Site Builder</span>
          <span className="wbeachService">Drupal</span>
          <span className="wbeachService">Joomia</span>
          <span className="wbeachService">OpenCart</span>
          <span className="wbeachService">BigCommerce</span>
          <span className="wbeachService">
            DropShipping website Development
          </span>
          <span className="wbeachService">Education Website Develpoment</span>
          <span className="wbeachService">Portfolio Website Development</span>
          <span className="wbeachService">Blog Website Development</span>
          <span className="wbeachService">Ecommerce Website Development</span>
          <span className="wbeachService">Job Board Website Development</span>
          <span className="wbeachService">
            Landing page Website Development
          </span>
          <span className="wbeachService">Buisness Website Development</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CategoriesPage;
