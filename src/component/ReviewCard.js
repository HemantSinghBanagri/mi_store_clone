import React from 'react'
import "../styles/reviewcard.css"
const ReviewCard = ({price,name,image,review,index}) => {
  return (
    <div className='reviewCard  '>
    <img src={image} alt={`${index} review` }></img>
    <h5>{review}</h5>
    <span>{name}</span>
    <b>{price}</b>
      
    </div>
  )
}

export default ReviewCard
