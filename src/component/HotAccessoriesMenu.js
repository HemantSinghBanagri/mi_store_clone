import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/hotAccessoriesmenu.css"
const HotAccessoriesMenu = () => {
  return (
    <div className='hotaccessories'>
    <Link className="hotaccessorieslink" to="/music">Music Store</Link>
    <Link className="hotaccessorieslink" to="/smartDevice">Smart Device</Link>
    <Link className="hotaccessorieslink" to="/home">home</Link>
    <Link className="hotaccessorieslink" to="/lifeStyle">lifestyle</Link>
    <Link className="hotaccessorieslink" to="/mobileAccessories">mobile Accessories</Link>
      
    </div>
  )
}

export default HotAccessoriesMenu
