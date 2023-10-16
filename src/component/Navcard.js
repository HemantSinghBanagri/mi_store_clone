import React from 'react'

const Navcard = ({name,price,image}) => {
  return (
    <div className='navcard'>

    <img drc={image} alt={name}></img>
    <p>{name}</p>
    <span>{price}</span>
      
    </div>
  )
}

export default Navcard
