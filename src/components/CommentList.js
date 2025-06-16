import { useState } from 'react'
import Search from './Search'
import Comment from './Comment'
import HideCommentBtn from './HideCommentBtn'

const CommentList = ({ comments }) => {
  const [showComments, setShowComments] = useState(true)
  const [searchText, setSearchText] = useState('')

  const filteredComments = comments.filter((comment) => (
    searchText ? comment.user === searchText : comment
  ))

  return (
    <div id='comments-container'>
      <HideCommentBtn
        showComments={showComments}
        onChangeListDisplay={setShowComments}
      />
      <hr style={{ width: '100%', borderTop: '1px solid #ccc', margin: '1rem 0' }}/>
      <h3>{`${comments.length} Comments`}</h3>
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <div>
        {showComments && filteredComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>

    </div>
  )
}

export default CommentList
