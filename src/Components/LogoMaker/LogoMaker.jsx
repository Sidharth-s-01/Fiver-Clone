import React from 'react'
import "./LogoMaker.scss"
import { Link } from 'react-router-dom'
const LogoMaker = () => {
  return (
    <div className='LogoMakerWrapper'>
      <div className='LogoMakerMain'>
        
      <div className='logoMakerLeft'>
        <span><span>fiverr</span> Logo Maker</span>
        <span className='logoSubtext'>Make an Incredible logo <i>in Minutes</i></span>
          <span className='aboveButton'>Pre-dsigned by to talent. Just add your touch</span>
          <Link to="/logoMaker">
            <button className='logoSectionButton'>Try Fiever Logo Maker</button>
          </Link>
      </div>
        <img className='LogoMakerImage' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png"/>
      </div>
    </div>
    
  )
}

export default LogoMaker