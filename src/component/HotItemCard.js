import React from 'react'
import "../styles/hotItemCard.css"
const HotItemCard = ({name,index,image,price}) => {
  //console.log(name,index,image,price,"----------------------")
  return (
    <>

     <div className='hotitemcard'>
     <img src={image} alt={index} />
       <p>{name}</p>
       <span>{price}</span>
     </div>
    </>
  )
}

export default HotItemCard

