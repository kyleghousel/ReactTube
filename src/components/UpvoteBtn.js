import React from 'react'

const UpvoteBtn = ({ upvotes, onUpvote }) => {
  const handleClick = () => {
    onUpvote(upvotes += 1)
  }
  return (
    <>
      <button id="upvote-btn" onClick={handleClick}>{upvotes}👍</button>
    </>
  )
}

export default UpvoteBtn
