// import SearchIcon from "@mui/icons-material/Search";
import "./featured.scss"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredLeft">
        <h1 className="featuredLeftHeader">
          Find the right freelance Service,right away
        </h1>
        <div className="searchBarSection">
          <input placeholder="Search for any service"></input>
          <div className="searchIcon">
            <img src="/search.png" />
          </div>
        </div>
        <div className="popularTab">
          <span className="popular">Popular:</span>
          <span className="popularItem">Website Design</span>
          <span className="popularItem">WordPress</span>
          <span className="popularItem">Logo Design</span>
          <span className="popularItem">AI Services</span>
        </div>
      </div>
      <div className="featuredRight">
        {/* <div className="imageBox">
          <img
            className="imageCarousal"
            src="https://orfinexfund.com/images/hero-img5.png"
          />
        </div> */}
       
          <img
            className="imageCarousal"
            src="https://orfinexfund.com/images/hero-img5.png"
          />
        

        <div className="imageMain">
          <div className="ImageDetails"></div>
          <div className="ImageDetails overlay">
            <div className="detailsTop">
              <span>John</span>
              <span>5★</span>
            </div>

            <span className="detailsBottom">Excel Specialist</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured