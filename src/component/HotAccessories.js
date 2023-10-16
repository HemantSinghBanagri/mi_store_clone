import HotItemCard from './HotItemCard'

const HotAccessories = ({musicItem,musicCover,smartDevice,smartDeviceCover,mobileAccessories,lifeStyle,home}) => {
  //console.log(musicItem,"======================")
  return (
    <div className='hotAccessoriesItem'>
    <div>
        <img src={musicCover || smartDeviceCover || mobileAccessories ||lifeStyle||home} alt="cover"></img>
        
    </div>
    <div className='itemcard'>
      {musicItem && musicItem.map((item,index)=>(
        <>
        {/* {console.log(item)} */}
        <HotItemCard index={index} name={item.name} image={item.image}  price={item.price}  ></HotItemCard>
        </>
      )) }

      {smartDevice && smartDevice.map((item,index)=>(
        <>
        {/* {console.log(item)} */}
        <HotItemCard index={index} name={item.name} image={item.image}  price={item.price}  ></HotItemCard>
        </>
      )) }




      {home && home.map((item,index)=>(
        <>
        {/* {console.log(item)} */}
        <HotItemCard index={index} name={item.name} image={item.image}  price={item.price}  ></HotItemCard>
        </>
      )) }

      {lifeStyle && lifeStyle.map((item,index)=>(
        <>
        {/* {console.log(item)} */}
        <HotItemCard index={index} name={item.name} image={item.image}  price={item.price}  ></HotItemCard>
        </>
      )) }


      {mobileAccessories && mobileAccessories.map((item,index)=>(
        <>
        {/* {console.log(item)} */}
        <HotItemCard index={index} name={item.name} image={item.image}  price={item.price}  ></HotItemCard>
        </>
      )) }

      <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
     
    </div>
    
      
    </div>
  )
}

export default HotAccessories
