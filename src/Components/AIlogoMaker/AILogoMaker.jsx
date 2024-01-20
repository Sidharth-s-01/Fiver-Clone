import React from 'react'
import "./AILogoMaker.scss"
const AILogoMaker = () => {
  return (
    <div className='AiLogoMakerWrapper'>
      <div className='AILogMakerLeft'>
      <span className='AiLogoMakerFirst'>
        AI Logo Maker
      </span>
      <span className='AILogoMakerMainHeading'>
        Make A professional Logo in few Clicks
      </span>
      <input className='AILogoMakerInputTop' placeholder='Type your brand name' />
      <button className='AILogoMakerButton'>Make your Logo</button>
      </div>
      <div className='AilogoMakerRight'>
        <img src='/logo1.png' width="400px" height="450px" />
      </div>
      
    </div>
  )
}
 
export default AILogoMaker  
