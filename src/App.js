
import './App.css';
import Prenav from './component/Prenav';
import Nav from './component/Nav';
import {BrowserRouter, Route,Routes } from "react-router-dom"
import Slider from "./component/Slider.js"
import data from "./data/data.json"
import Offers from './component/Offers';
import Heading from './component/Heading';
import StarProduct from './component/StarProduct';
import HotAccessoriesMenu from './component/HotAccessoriesMenu';
import HotAccessories from './component/HotAccessories';
import ProductReview from './component/ProductReview';
import Video from './component/Video';
import InThePress from './component/InThePress';
import Footer from './component/Footer';
import Navoption from './component/Navoption';



function App() {
  console.log(data.hotAccessories.music,"music")
  return (
    <div className="App">
    <BrowserRouter>
      <Prenav/>


      <Nav/>
      <Navoption miphone={data.miPhones} redmiphone={data.redmiPhones} tv={data.tv}  laptop={data.laptop} fitnesslifestyle={data.fitnessAndLifeStyle} home={data.home} accessories={data.accessories} audio={data.audio}/>
      <Slider start={data.banner.start}> </Slider>
      <Offers offer={data.offer}></Offers>
      <Heading text="Star Product"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="Hot Accessories"/>
      <HotAccessoriesMenu/>
      
      <Routes>
          <Route exact path='/music' element={<HotAccessories
            musicItem={data?.hotAccessories?.music}
            musicCover={data.hotAccessoriesCover.music}
          />} />
        
          <Route exact path='/smartDevice' element={<HotAccessories
            smartDevice={data.hotAccessories.smartDevice}
            smartDeviceCover={data.hotAccessoriesCover.smartDevice}
          />} />

          <Route exact path='/home' element={<HotAccessories
            smartDevice={data.hotAccessories.home}
            smartDeviceCover={data.hotAccessoriesCover.home}
          />} />

          <Route exact path='/lifeStyle' element={<HotAccessories
            smartDevice={data.hotAccessories.lifeStyle}
            smartDeviceCover={data.hotAccessoriesCover.lifeStyle}
          />} />

            <Route exact path='/mobileAccessories' element={<HotAccessories
            smartDevice={data.hotAccessories.mobileAccessories}
            smartDeviceCover={data.hotAccessoriesCover.mobileAccessories}
          />} />
        </Routes>
        <Heading text="Product Review"/>
        <ProductReview productReviews={data.productReviews}/>
        <Heading text="Video"/>
        <Video videos={data.videos}/>
        <Heading text="In The Press"/>
        <InThePress banner={data.banner}/>
        <Footer footer={data.footer}> </Footer>
    </BrowserRouter>

    
      
    </div>
  );
}

export default App;
