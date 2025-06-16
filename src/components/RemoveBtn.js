
const RemoveBtn = ({ id, onRemoveComment }) => {
  const handleClick = () => {
    onRemoveComment(id)
  }

  return (
    <>
      <button id={id} onClick={handleClick}>❌</button>
    </>
  )
}

export default RemoveBtn
