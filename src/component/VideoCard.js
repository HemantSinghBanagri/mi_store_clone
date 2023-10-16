import React from 'react'
import '../styles/video.css'



const VideoCard = ({index,name,image}) => {
  return (
    <div className='videCard' style={{backgroundImage: `url(${image})`}}>
    
    <p>{name}</p>
      
    </div>
  )
}

export default VideoCard
