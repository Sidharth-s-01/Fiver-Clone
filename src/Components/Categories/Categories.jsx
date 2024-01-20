import {React,useState} from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
    const [MouseOver, SetMouseOver] = useState(false)
    const [MouseOver2, SetMouseOver2] = useState(false)
    const [MouseOver3, SetMouseOver3] = useState(false)
    const [MouseOver4, SetMouseOver4] = useState(false)
    const [MouseOver5, SetMouseOver5] = useState(false)
    const [MouseOver6, SetMouseOver6] = useState(false)
    const [MouseOver7, SetMouseOver7] = useState(false)
    const [MouseOver8, SetMouseOver8] = useState(false)
    const [MouseOver9, SetMouseOver9] = useState(false)
    const [MouseOver10, SetMouseOver10] = useState(false)


    
    const HandleMouseOver = (event) => {
        const id = event.target.id;
        if (id == 1) {
            
            SetMouseOver(true)
        }
        else if (id == 2) {
            SetMouseOver2(true)
            
        } else if (id == 3) {
            SetMouseOver3(true)
            
        } else if (id == 4) {
            SetMouseOver4(true)
            
        } else if (id == 5) {
            SetMouseOver5(true)
            
        } else if (id == 6) {
            SetMouseOver6(true)
            
        } else if (id == 7) {
            SetMouseOver7(true)
            
        } else if (id == 8) {
            SetMouseOver8(true)
            
        } else if (id == 9) {
            SetMouseOver9(true)
            
        }
        else if (id == 10) {
            SetMouseOver10(true)
            
        }
    }
    const HandleMouseLeave = (event) => {
        const id = event.target.id;

        if (id == 1) {
            
            SetMouseOver(false)
        }
        else if (id == 2) {
            SetMouseOver2(false)
            
        } else if (id == 3) {
            SetMouseOver3(false)
            
        } else if (id == 4) {
            SetMouseOver4(false)
            
        } else if (id == 5) {
            SetMouseOver5(false)
            
        } else if (id == 6) {
            SetMouseOver6(false)
            
        } else if (id == 7) {
            SetMouseOver7(false)
            
        } else if (id == 8) {
            SetMouseOver8(false)
            
        } else if (id == 9) {
            SetMouseOver9(false)
            
        }
        else if (id == 10) {
            SetMouseOver10(false)
            
        }
    }

    
  return (
    <div className='categoriesWrapper'>
          
        <span className='categoriesHeader'>You need it we got it!</span>
          <div className='Categories'>
              
                  
              <div className='eachCategory' onMouseOver={HandleMouseOver} onMouseLeave={HandleMouseLeave} id="1">    
                  <img src="design.svg" width="60px" height="60px" />
                  {!MouseOver && <hr className='CategoryHr' />}
                  {MouseOver && <hr className='CategoryHrActive' />}
                <Link to={"/gigs/"+"Graphics and Design"} className='LinkLinks'>
                  <span className='categoryName'>Graphics and Design</span>
              </Link>
              </div>  
                  
              <div className='eachCategory' onMouseOver={HandleMouseOver} onMouseLeave={HandleMouseLeave} id="2">    
                  <img src="onlineMarket.svg" width="60px" height="60px" />
                  {!MouseOver2 && <hr className='CategoryHr' />}
                 {MouseOver2 && <hr className='CategoryHrActive'/>}
                  <span className='categoryName'>Digital Marketing</span>
                  
              </div>
              <div className='eachCategory' onMouseOver={HandleMouseOver} onMouseLeave={HandleMouseLeave} id="3">    
                  <img src="writing.svg" width="60px" height="60px" />
                   {!MouseOver3 && <hr className='CategoryHr' />}
                 {MouseOver3 && <hr className='CategoryHrActive'/>}
                  <span className='categoryName'>Writing & Transalation</span>
              </div>
              <div className='eachCategory' onMouseOver={HandleMouseOver} onMouseLeave={HandleMouseLeave} id="4">    
                  <img src="videoIcon.svg" width="60px" height="60px" />
                   {!MouseOver4 && <hr className='CategoryHr' />}
                 {MouseOver4 && <hr className='CategoryHrActive'/>}
                  <span className='categoryName'>Video & Animation</span>
              </div>
              <div className='eachCategory' onMouseOver={HandleMouseOver} onMouseLeave={HandleMouseLeave} id="5">    
                  <img src="music.svg" width="60px" height="60px" />
                   {!MouseOver5 && <hr className='CategoryHr' />}
                 {MouseOver5 && <hr className='CategoryHrActive'/>}
                  <span className='categoryName'>Music and Audio</span>
              </div> 
              <div className='eachCategory' onMouseOver={HandleMouseOver} onMouseLeave={HandleMouseLeave} id="6">    
                  <img src="programming.svg" width="60px" height="60px" />
                   {!MouseOver6 && <hr className='CategoryHr' />}
                 {MouseOver6 && <hr className='CategoryHrActive'/>}
                  <span className='categoryName'>Programming & Tech</span>
              </div>
              <div className='eachCategory' onMouseOver={HandleMouseOver} onMouseLeave={HandleMouseLeave} id="7">    
                  <img src="buisness.svg" width="60px" height="60px" />
                   {!MouseOver7 && <hr className='CategoryHr' />}
                 {MouseOver7 && <hr className='CategoryHrActive'/>}
                  <span className='categoryName'>Buisness</span>
              </div>
              <div className='eachCategory' onMouseOver={HandleMouseOver} onMouseLeave={HandleMouseLeave} id="8">    
                  <img src="lifestyle.svg" width="60px" height="60px" />
                   {!MouseOver8 && <hr className='CategoryHr' />}
                 {MouseOver8 && <hr className='CategoryHrActive'/>}
                  <span className='categoryName'>Lifestyle</span>
              </div>
              <div className='eachCategory'onMouseOver={HandleMouseOver} onMouseLeave={HandleMouseLeave} id="9">    
                  <img src="data.svg" width="60px" height="60px" />
                   {!MouseOver9 && <hr className='CategoryHr' />}
                 {MouseOver9 && <hr className='CategoryHrActive'/>}
                  <span className='categoryName'>Data</span>
              </div>
              <div className='eachCategory'onMouseOver={HandleMouseOver} onMouseLeave={HandleMouseLeave} id="10">    
                  <img src="photo.svg" width="60px" height="60px" />
                   {!MouseOver10 && <hr className='CategoryHr' />}
                 {MouseOver10 && <hr className='CategoryHrActive'/>}
                  <span className='categoryName'>Photography</span>
              </div>
              
          </div>
    </div>
  )
}

export default Categories