import React from 'react'
import Video from './Video'

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
        return <Video video={video}
                      onVideoSelect={onVideoSelect}
                      key={video.id.videoId} />
    });

    return (
        <div className='ui relaxed divided list'>
            {renderedList}
        </div>
    )
}

export default VideoList
