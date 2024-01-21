import {useState} from 'react'
import "./SingleProduct.scss"
const SingleProduct = () => {
  const [basic, setBasic] = useState(true)
  const [intermediate,setIntermediate]=useState(false)
  const [advanced, setAdvanced] = useState(false);
  
  const handlePress = (event) => {
    console.log(event.target.innerHTML)
    if (event.target.innerHTML == "Basic") {
      setBasic(true);
      setIntermediate(false);
      setAdvanced(false);


    }
    else if (event.target.innerHTML == "Intermediate") {
      setIntermediate(true);
      setBasic(false);
      setAdvanced(false);
      
    }
    else {
      setAdvanced(true);
         setIntermediate(false);
         setBasic(false);
      
    }
  }
  return (
    <div className="singleTopWrapper">
      <div className="singleTop">
        <span className="singleTopSpan">
          <img src="/home.png" width="20" height="20" />/ Graphics and Design /
          Logo Design
        </span>
        <span className="SPreviewandShare">
          <img src="/heart.png" width="25" height="25" />
          <img src="/customer-satisfaction.png" width="25" height="25" />
          <img src="/share.png" width="25" height="25" />
        </span>
      </div>
      <h1 className="singleProductHeader">
        I will do design custom typography hand lettering logo
      </h1>
      <div className="singleProductPageWrapper">
        <div className="SingleProdutLeft">
          <div className="singleProductProfileSection">
            <img
              src="https://i.pinimg.com/564x/81/95/05/819505375813394de02b4e65b646b550.jpg"
              className="singleProductProfileImage"
            />
            <div className="singleProductDescription">
              <div className="spTopLine">
                <span>
                  <span className="spTopLineName">Mohammed Faaraz</span>
                </span>
                <span>@faaraz@gmail.com</span>
                <span className="spTopLineFiversChoice">Fivers Choice</span>
                <span className="spTopLineTopRated">Top Rated</span>
              </div>

              <div className="spBottomLine">
                <span>
                  <img src="/star.png" />
                  <span className="spRating">4.9</span>
                  (2017)
                </span>
                <span>5 Orders in Queue</span>
              </div>
            </div>
          </div>
          <img
            className="SinglProductCoverPic"
            src="https://i.pinimg.com/564x/31/5b/a1/315ba18f1fb5268e20e3758d947ac878.jpg"
          />
          <div className="singleProductBottomDescription">
            <span className="abouttheGig">About the gig</span>

            <span className="abouttheGig">
              Greetings and welcome to our GIG!
            </span>

            <span>
              <span className="highLightedSession">
                Are you looking for a responsive WordPress Landing page or
                Elementor Landing page? if yes, then DesignbyExpert service is
                best for you.
              </span>
              <span className="singleProductParagraph">
                We're a team of Experienced WordPress landing page & website
                designers. We'll design a responsive Landing Page using
                Elementor pro page builder. We assure you to provide the best
                service in website or landing page design. Elementor is easy to
                use and attracts the user at first look with a fantastic design.
              </span>
              <span className="singleProductParagraph">
                Elementor is easy to use and attracts the user at first look
                with a fantastic design.
              </span>
              <span className="highLightedSession">
                Portfolio: bit.ly/3MBC9TR
              </span>
            </span>
            <div className="AboutTheSeller">
              <img
                className="AboutTheSellerProfileImage"
                src="https://i.pinimg.com/564x/81/95/05/819505375813394de02b4e65b646b550.jpg"
              />
              <div className="aboutTheSellerRight">
                <span>
                  <span className="AboutSellerFirstLine"> Design By Exp</span>{" "}
                  @DesignByExpert
                </span>
                <span>Team of Wordpress and Logo Designers</span>
                <span className="AboutSellerReviewText">
                  <img src="/star.png" /> 5 (105)
                </span>
              </div>
            </div>
            <button className="ContactMebutton">Contact Me</button>
          </div>
        </div>
        <div className="singleProductRight">
          <div className="singleProductRightTop">
            <span onClick={handlePress} className={basic && "borderON"}>
              Basic
            </span>
            <span onClick={handlePress} className={intermediate && "borderON"}>
              Intermediate
            </span>
            <span onClick={handlePress} className={advanced && "borderON"}>
              Advanced
            </span>
          </div>
          <div className="singleProductRightBottom">
            <div className="singleProductBottomTop">
              <span>
                {basic ? "Basic" : intermediate ? "intermediate" : "Advanced"}{" "}
                Page(1-3 Section)
              </span>
              <span>₹{basic ? "1000" : intermediate ? "1200" : "2000"}</span>
            </div>

            <div className="singleProductBottomMiddle">
              <span>
                {basic ? "Basic" : intermediate ? "intermediate" : "Advanced"}{" "}
                Page
              </span>
              <span>₹{basic ? "1000" : intermediate ? "1200" : "2000"}</span>
            </div>
            <div className="singleProuctBMTickSection">
              <span>
                <img src="/tick2.png" /> Basic Page
              </span>
              <span>
                <img src="/tick2.png" /> 1-3 Section
              </span>
              <span>
                <img src="/tick2.png" /> Responsive Design
              </span>
            </div>
            <div className="pricesLower">
              <span>
                {basic ? "7 " : intermediate ? "5 " : "3 "}
                Days Delivery
              </span>
              <span>{basic ? "50 Revisions" : intermediate ? "100 Revisions" : "UnLimited Revisons"}</span>
            </div>
            <button className="continueButton">
              Continue <img src="/right-arrow.png" />
            </button>
            <span className="comparePackages">Compare Packages</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct