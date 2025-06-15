import React from 'react'

const DownvoteBtn = ({ downvotes, onDownvote }) => {
  const handleClick = () => {
    onDownvote(downvotes -= 1)
  }
  return (
     <>
      <button id="downvote-btn" onClick={handleClick}>{downvotes}👎</button>
    </>
  )
}

export default DownvoteBtn
