import './index.css'

const Comment = props => {
  const {commentedLists, fun1, fun2} = props
  const {id, name, strike} = commentedLists
  const clicked = () => {
    fun1(id)
  }

  const doned = () => {
    fun2(id)
  }

  let styled

  if (id === strike) {
    styled = 'wow'
  } else {
    styled = ''
  }
  return (
    <li className="comment-card">
      <button onClick={doned}>Done</button>
      <h1 className={`profile-name-head ${styled}`}>{name}</h1>
      <div className="bottom-buttons">
        <button data-testid="delete" type="button" onClick={clicked}>
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default Comment
