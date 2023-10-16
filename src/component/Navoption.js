import React, { useEffect, useState } from 'react'
import Navcard from './Navcard'
import { useLocation } from 'react-router-dom';
import "../styles/navoption.css"




const Navoption = ({miphone,redmiphone,tv,laptop,fitnesslifestyle,home,accessories,audio}) => {

const location=useLocation();
const [miphoneToggle,setmiphoneToggle] =useState(false);
const [redmiphoneToggle,setredmiphoneToggle] =useState(false);
const [tvToggle,settvToggle] =useState(false);
const [laptopToggle,setlaptopToggle] =useState(false);
const [fitnesslifestyleToggle,setfitnesslifestyleToggle] =useState(false);
const [homeToggle,sethomeToggle] =useState(false);
const [accessoriesToggle,setaccessoriesToggle] =useState(false);
const [audioToggle,setaudio]=useState(false)

useEffect(()=>{

    if(window.location.pathname==="/miphone"){
        setmiphoneToggle(true)
    }else{
        setmiphoneToggle(false)
    }

    if(window.location.pathname==="/redmiphone"){
        return setredmiphoneToggle(true)
    }else{
        setredmiphoneToggle(false)
    }
    
    if(window.location.pathname==="/tv"){
        return settvToggle(true)
    }else{
        settvToggle(false)
    }

    if(window.location.pathname==="/laptop"){
        return setlaptopToggle(true)
    }else{
        setlaptopToggle(false)
    }
    if(window.location.pathname==="/lifestyle"){
        return setfitnesslifestyleToggle(true)
    }else{
        setfitnesslifestyleToggle(false)
    }

    if(window.location.pathname==="/home"){
        return sethomeToggle(true)
    }else{
        sethomeToggle(false)
    }
    if(window.location.pathname==="/audio"){
        return setaudio(true)
    }else{
        setaudio(false)
    }
    if(window.location.pathname==="/accessories"){
        return setaccessoriesToggle(true)
    }else{
        setaccessoriesToggle(false)
    }

},[location.pathname])


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
        {audioToggle ? audio.map((item,index)=>(
            <Navcard name={item.name} price={item.price} image={item.image} key={index} />
        )):null}
       
    </div>
  )
}

export default Navoption
