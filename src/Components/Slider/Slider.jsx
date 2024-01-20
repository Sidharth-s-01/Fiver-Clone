import {cards}  from '../../../data'
import SliderCard from '../SliderCard/SliderCard'
import Slider from 'infinite-react-carousel';
import "./Slider.scss"






const SliderSection = () => {
    
    
    
  return (
    <div className="CarousalContainer">
      <Slider slidesToShow={5}>
        {cards.map((card) => (
          <SliderCard item={card} key={card.id} />
        ))}
      </Slider>
      {/* <div>Hello</div> */}
    </div>
  );
}

export default SliderSection;