import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Carousel from 'react-bootstrap/Carousel'




const Slider = ({start}) => {
  

  
    return (
        <Carousel fade>
         {/*<Carousel.Item>
            <img src='https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif' className='d-block w-100' alt='first_slider'></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif' className='d-block w-100' alt='first_slider'></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif' className='d-block w-100' alt='first_slider'></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif' className='d-block w-100' alt='first_slider'></img>
          </Carousel.Item> */} 


           {
           start.map((item,index)=>(
            <Carousel.Item>
            <img key={index} src={item} 
            className='d-block w-100' 
            alt='first_slider'></img>
          </Carousel.Item>

          ))} 
        </Carousel>
    )
}

export default Slider