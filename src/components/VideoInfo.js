import { useState } from 'react'
import UpvoteBtn from './UpvoteBtn'
import DownvoteBtn from './DownvoteBtn'

const VideoInfo = ({ title, views, createdAt, upvotes, downvotes, comments }) => {
  const [likes, setUpvotes] = useState(upvotes)
  const [dislikes, setDownvotes] = useState(downvotes)

  return (
    <div id='video-container'>
      <h2>{title}</h2>
      <span>{`${views} Views | Uploaded ${createdAt}`}</span>
      <div>
        <UpvoteBtn upvotes={likes} onUpvote={setUpvotes}/>
        <DownvoteBtn downvotes={dislikes} onDownvote={setDownvotes}/>
      </div>
    </div>
  )
}

export default VideoInfo
