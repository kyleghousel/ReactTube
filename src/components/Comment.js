import { useState } from 'react'
import UpvoteBtn from "./UpvoteBtn"
import DownvoteBtn from "./DownvoteBtn"
import RemoveBtn from './RemoveBtn'

const Comment = ({ id, user, comment, onRemoveComment }) => {
  const [upvotes, setUpvotes] = useState(0)
  const [downvotes, setDownvotes] = useState(0)

  return (
    <div className='comment' id={id}>
      <div id='comment-user'>
        <h4>{user}</h4>
        <RemoveBtn id={id} onRemoveComment={onRemoveComment}/>
      </div>
      <p>{comment}</p>
      <UpvoteBtn upvotes={upvotes} onUpvote={setUpvotes} />
      <DownvoteBtn downvotes={downvotes} onDownvote={setDownvotes} />

    </div>
  )
}

export default Comment
