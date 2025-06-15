const Comment = ({ id, user, comment }) => {
  return (
    <div className='comment' id={id}>
      <h4>{user}</h4>
      <p>{comment}</p>
    </div>
  )
}

export default Comment
