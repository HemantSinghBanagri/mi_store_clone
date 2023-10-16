import React, { useState } from 'react'
import Navcard from './Navcard'




const Navoption = ({miphone,redmiphone,tv,laptop,fitnesslifestyle,home,accessories}) => {


const [miphoneToggle,setmiphoneToggle] =useState(false);
const [redmiphoneToggle,setredmiphoneToggle] =useState(false);
const [tvToggle,settvToggle] =useState(false);
const [laptopToggle,setlaptopToggle] =useState(false);
const [fitnesslifestyleToggle,setfitnesslifestyleToggle] =useState(false);
const [homeToggle,sethomeToggle] =useState(false);
const [accessoriesToggle,setaccessoriesToggle] =useState(false);


  return (
    <div className='navoption'>
        {miphoneToggle ? miphone.map((item,index)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={index} />
        )):null}


        {redmiphoneToggle ? redmiphone.map((item,index)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={index} />
        )):null}


        {tvToggle ? tv.map((item,index)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={index} />
        )):null}


        {laptopToggle ? laptop.map((item,index)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={index} />
        )):null}


        {fitnesslifestyleToggle ? fitnesslifestyle.map((item,index)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={index} />
        )):null}

        {homeToggle ? home.map((item,index)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={index} />
        )):null}

        {accessoriesToggle ? accessories.map((item,index)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={index} />
        )):null}
       
    </div>
  )
}

export default Navoption
