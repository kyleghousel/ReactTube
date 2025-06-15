import { useState } from 'react'
import Comment from './Comment'
import HideCommentBtn from './HideCommentBtn'

const CommentList = ({ comments }) => {
  console.log(comments)
  const [showComments, setShowComments] = useState(true)

  console.log(showComments)

  return (
    <div id='comments-container'>
      <HideCommentBtn
        showComments={showComments}
        onChangeListDisplay={setShowComments}
      />
      <hr style={{ width: '100%', borderTop: '1px solid #ccc', margin: '1rem 0' }}/>
      <h3>{`${comments.length} Comments`}</h3>
      <div>
        {showComments && comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>

    </div>
  )
}

export default CommentList
