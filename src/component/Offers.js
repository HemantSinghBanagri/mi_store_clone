import React from 'react'
import Offer from './Offer'
import "../styles/offer.css"

const Offers = ({offer}) => {
  return (
    <div className='offerSection'>
      {offer.map((item,index)=>(
        <Offer key={item.image} src={item.image} link={item.url} index={index} ></Offer>
      ))}
    </div>
  )
}

export default Offers
