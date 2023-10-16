import React from 'react'
import VideoCard from './VideoCard'
import "../styles/video.css"
const Video = ({videos}) => {
  return (
    <div className='video'>
        {
            videos.map((item,index)=>(
                <VideoCard index={index} key={item.image} image={item.image} name={item.name}/>

            ))
        }
      
    </div>
  )
}

export default Video
