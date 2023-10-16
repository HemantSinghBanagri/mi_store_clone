import React from 'react'

const HotItemCard = ({name,index,image,price}) => {
  return (
    <div className='hotitemcard'>
    <img src={image} alt={index} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      
    </div>
  )
}

export default HotItemCard
``