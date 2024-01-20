import { useNavigate, useParams } from "react-router-dom";
import "./CategoriesPage.scss"
import GigCard from "../../Components/Gigcard/GigCard";
import { CardsData } from "../../../../categoryData.js";
const CategoriesPage = () => {
  const params = useParams();
  return (
    

    <div className='categoriesWrapper'>
      
      <div className='categoriesTop'>
        <div className='CategoriesPathWrapper'>
          <img src='/home.png' width="20" height="20" />
          <span>/ {" "+params.category}</span>
        </div>
        <span className="TypeOfDesign">Website Develpoment</span>
        <span className="exploreAll">Explore All the boundaries of Website Develpoment</span>

      </div>
      <div className="categoriesCardsWrapper">
        {CardsData.map(card => (
          <GigCard data={card} key={card.id}/>
          
        ))}
      </div>
    </div>
  )

}


export default CategoriesPage