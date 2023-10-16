import HotItemCard from './HotItemCard'

const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,mobileAccessories,lifeStyle,home}) => {
  return (
    <div className='musicAccessories'>
    <div>
        <img src={musicCover || smartDeviceCover || mobileAccessories ||lifeStyle||home} alt="cover"></img>
        
    </div>
    <div>
      {music && music.map((item,index)=>(
        <HotItemCard index={index} name={item.name} image={item.image}  price={item.price}  ></HotItemCard>

      )) }
      {/*<HotItemCard image=""/> */}
    </div>
    
      
    </div>
  )
}

export default HotAccessories
