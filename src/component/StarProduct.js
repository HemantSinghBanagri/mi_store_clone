import React from 'react'
import "../styles/starproduct.css"

const StarProduct = ({starProduct}) => {
  return (
    <div className='starproduct'>
    <div>
        <a href={starProduct[0].url}><img src={starProduct[0].image} alt="first Product" ></img></a>
    </div>
    <div>
        <a href={starProduct[1].url}><img src={starProduct[1].image} alt="second Product"></img></a>
        <a href={starProduct[2].url}><img src={starProduct[2].image} alt="third Product"></img></a>
        <a href={starProduct[3].url}><img src={starProduct[3].image} alt="forth Product"></img></a>

        
        
        
        
    </div>
   
      
    </div>
  )
}

export default StarProduct
