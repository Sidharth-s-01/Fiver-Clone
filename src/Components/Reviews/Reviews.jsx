import {useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Popup from "reactjs-popup";
import ReactSimplyCarousel from 'react-simply-carousel';
import "./Reviews.scss"

const Reviews = () => {
   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className='ReviewsWrapper'>
      
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            position: 'absolute',
            zIndex:"9",
            right: "140px",
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 50,
            lineHeight: 1,
            textAlign: 'center',
            width: 50,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            position: 'absolute',
            zIndex:"9",
            left: "140px",
            alignSelf: 'center',
            background: 'grey',
            border: 'none',
            borderRadius: '50%',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            height: 50,
            lineHeight: 1,
            textAlign: 'center',
            width: 50,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: "1300px",
            minHeight:"400px"
          },
        ]}
        speed={600}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width:1300, height: 450 }}>
          <div className='EachReview'>
            <div className='reviewVideo'>
              <img src="https://i.pinimg.com/564x/e7/71/c1/e771c1f939778cdcf87ee1f57c43e238.jpg" className='reviewImage' />
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
           <div>
            <blockquote className='reviewText'>
              <i>
                  ""It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.""
            </i>
            </blockquote>
          </div>
          </div>
          
        </div>
        <div style={{ width:1300, height: 450 }}>
          <div className='EachReview'>
            <div className='reviewVideo'>
              <img src="https://i.pinimg.com/564x/b3/50/37/b350373179c71de132b4249b8436e119.jpg" className='reviewImage' />
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
           <div>
            <blockquote className='reviewText'>
              <i>
                  """We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."""
            </i>
            </blockquote>
          </div>
          </div>
          
        </div>
        <div style={{ width:1300, height: 450 }}>
          <div className='EachReview'>
            <div className='reviewVideo'>
              <img src="https://i.pinimg.com/564x/34/c0/95/34c0951d971b79e4d9c749d00fff8ad8.jpg" className='reviewImage' />
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
           <div>
            <blockquote className='reviewText'>
              <i>
                  """"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.""""
            </i>
            </blockquote>
          </div>
          </div>
          
        </div>
         <div style={{ width:1300, height: 450 }}>
          <div className='EachReview'>
            <div className='reviewVideo'>
              <img src="https://i.pinimg.com/564x/f6/62/af/f662af3b9a1cd3cf54d5ce49295bb25c.jpg" className='reviewImage' />
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
           <div>
            <blockquote className='reviewText'>
              <i>
                  """When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."""
            </i>
            </blockquote>
          </div>
          </div>
          
        </div>
       
      </ReactSimplyCarousel>
    </div>
     
  )
}

export default Reviews