import React from 'react'
import "../styles/nac.css"
import {Link} from "react-router-dom"


const logo="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg";
const search=<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>

const Nav = () => {
 
    
  return (
    <div className='nav'>
    <div className='logo'>
    <Link className='navlinks' to ="/"><img  id="logoImage"src={logo} alt="not"></img></Link>
    </div>
    <Link className='navlinks' to ="/miphone">Mi Phones </Link>
    <Link className='navlinks' to ="/redmiphone">Redmi Phones </Link>
    <Link className='navlinks' to ="/tv">TV </Link>
    <Link className='navlinks' to ="/laptop">Laptops </Link>
    <Link className='navlinks' to ="/lifestyle">Fitness & Lifestyle </Link>
    <Link className='navlinks' to ="/home">Home </Link>
    <Link className='navlinks' to ="/audio">Radio </Link>
    <Link className='navlinks' to ="/accessories">Accessories </Link>

    <div className='search'>
        <input type='text' name="search" placeholder='search products'/>{search}

    </div>

    

   
      
    </div>
  )
}

export default Nav
