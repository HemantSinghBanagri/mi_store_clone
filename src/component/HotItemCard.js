import React from 'react'
// import "hotAccessoriesmenu.css"
const HotItemCard = ({name,index,image,price}) => {
  //console.log(name,index,image,price,"----------------------")
  return (
    <>

     <div className='hotitemcard'>
     <img src={image} alt={index} />
       <h3>{name}</h3>
       <p>Price: ${price}</p>
     </div>
    </>
  )
}

export default HotItemCard

