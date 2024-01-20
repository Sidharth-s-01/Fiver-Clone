import React from 'react'
import "./SliderCard.scss"

const SliderCard = ({item}) => {
    console.log(item.src)
  return (
    <div className="EachSlide">
        <img className='sliderImage' src={item.src}/>
        <span className='sliderName'>{item.name}</span>
        <span className='sliderDescription'>{item.description}</span>
    </div>
  )
}

export default SliderCard