import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import { data } from '../../../guideData.js';
import "./GuidestoHelp.scss"

const GuidesToHelp = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
   <div className='GuideWorkWRapper'>
      <h1>Guides to Help you grow</h1>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={4}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            position: 'absolute',
            zIndex:"9",
            right: "100px",
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
            left: "100px",
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
            minWidth: "500px",
            minHeight:"370px"
          },
        ]}
        speed={600}
        easing="linear"
      >
        
        {data.map(d => (
          <>

          <div style={{ width:500, height: 370 }}>
          <div className="GuideWork">
                <img src={ d.mainImage} className='GuideImage'/>
            <div className='GuideWorkDescRapper'>
              <div className='GuideDesc'>
                    <span>{d.description}</span>
              </div>
            </div>
          </div>
        </div>
          </>
        ))}
        
       
       
      </ReactSimplyCarousel>
    </div>
  )
}

export default GuidesToHelp