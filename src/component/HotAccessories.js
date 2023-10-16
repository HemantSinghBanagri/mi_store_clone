import HotItemCard from './HotItemCard'

const HotAccessories = ({musicItem,musicCover,smartDevice,smartDeviceCover,mobileAccessories,lifeStyle,home}) => {
  //console.log(musicItem,"======================")
  return (
    <div className='musicAccessories'>
    <div>
        <img src={musicCover || smartDeviceCover || mobileAccessories ||lifeStyle||home} alt="cover"></img>
        
    </div>
    <div>
      {musicItem && musicItem.map((item,index)=>(
        <>
        {/* {console.log(item)} */}
        <HotItemCard index={index} name={item.name} image={item.image}  price={item.price}  ></HotItemCard>
        </>
      )) }
     
    </div>
    
      
    </div>
  )
}

export default HotAccessories
