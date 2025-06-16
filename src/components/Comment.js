import { useState } from 'react'
import UpvoteBtn from "./UpvoteBtn"
import DownvoteBtn from "./DownvoteBtn"

const Comment = ({ id, user, comment }) => {
  const [upvotes, setUpvotes] = useState(0)
  const [downvotes, setDownvotes] = useState(0)

  return (
    <div className='comment' id={id}>
      <h4>{user}</h4>
      <p>{comment}</p>
      <UpvoteBtn upvotes={upvotes} onUpvote={setUpvotes} />
      <DownvoteBtn downvotes={downvotes} onDownvote={setDownvotes} />
    </div>
  )
}

export default Comment
