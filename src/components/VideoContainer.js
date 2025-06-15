import React from 'react'
import Video from './Video'
import VideoInfo from './VideoInfo'

const VideoContainer = ({ videoData }) => {
  return (
    <div>
      <Video videoData={videoData}/>
      <VideoInfo {...videoData}/>
    </div>
  )
}

export default VideoContainer
