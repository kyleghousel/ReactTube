import { useState } from 'react'
import Search from './Search'
import Comment from './Comment'
import HideCommentBtn from './HideCommentBtn'

const CommentList = ({ comments }) => {
  const [showComments, setShowComments] = useState(true)
  const [searchText, setSearchText] = useState('')
  const [commentList, setCommentList] = useState(comments)

  const filteredComments = commentList.filter((comment) => (
    comment.user.toLowerCase().includes(searchText.toLowerCase())
  ))

  const removeComment = (id) => {
    const newComments = commentList.filter((comment) => comment.id !== id);
    setCommentList(newComments);
  }

  return (
    <div id='comments-container'>
      <HideCommentBtn
        showComments={showComments}
        onChangeListDisplay={setShowComments}
      />
      <hr style={{ width: '100%', borderTop: '1px solid #ccc', margin: '1rem 0' }}/>
      <h3>{`${commentList.length} Comments`}</h3>
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <div>
        {showComments && filteredComments.map((comment) => (
          <Comment key={comment.id} {...comment} onRemoveComment={removeComment}/>
        ))}
      </div>

    </div>
  )
}

export default CommentList
