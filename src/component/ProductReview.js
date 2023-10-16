import React from 'react'
import ReviewCard from './ReviewCard'
import "../styles/reviewcard.css"

const ProductReview = ({productReviews}) => {
  return (
    <div className='productReview'>

    {productReviews.map((item,index)=>(
        <ReviewCard  index={index} key={item.image} image={item.image} review={item.review} name={item.name} price={item.price}/>


    ))}
      
    </div>
  )
}

export default ProductReview
