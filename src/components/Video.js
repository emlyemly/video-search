import React from 'react'
import './video.css'

const Video = ({ video, onVideoSelect }) => {
    return (
        <div className='item video' onClick={() => onVideoSelect(video)}>
          <img src={video.snippet.thumbnails.medium.url}
               alt={video.snippet.title} className='ui image' />
          <div className='content'>
            <div className='header'>
              {video.snippet.title}
            </div>
          </div>
        </div>
    )
}

export default Video
