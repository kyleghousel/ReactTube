const HideCommentBtn = ({ showComments, onChangeListDisplay }) => {
  const handleClick = () => {
    onChangeListDisplay(!showComments)
  }

  return (
    <>
      <button
        id='hide-comment-btn'
        onClick={handleClick}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
    </>
  )
}

export default HideCommentBtn
