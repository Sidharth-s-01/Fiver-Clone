import React from 'react'
import "./GigCard.scss"

const GigCard = ({data}) => {
  console.log(data)
  // console.log(data.data.profileName)

  return (
    <div className='GigCardWrapper'>
      <img src="https://i.pinimg.com/564x/e1/e3/d3/e1e3d3588f0bed454eeb2a5d71ea699e.jpg" className='gigCardImage' />
      <img src="/star.png" className='favouriteIcon' />
        <div className='gDescription'>
          <div className='gProfileAndName'>
            <img src="https://i.pinimg.com/564x/7a/8c/cd/7a8ccd593e595443f9601bed42e49eda.jpg" className='gProfileImage' />
            <span className='gProfileName'>{data.profileName}</span>
          </div>
          <div className='gFiversChoice'>
            <span className='topRatedtext'> {data.TopRated ? "TopRated": "Pro"} </span>
          </div>
       
      </div>
      <div className='gigsDescriptionBottom'>
        <span className='gigsDescTop'>{data.gigsDescription}</span>
        <span className='gigsratingText'><img className="reviewStar" src="/star.png" />{data.ratingNumber} {data.numberOfRating}</span>
        <span className='gigMoneyDetails'>From <img src="/rupee-indian.png" width="10" height="10"/> {data.rate}</span>
      </div>
    </div>
  )
}

export default GigCard