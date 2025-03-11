import {FaRegCircleCheck} from 'react-icons/fa6'
import {MdOutlineDeleteForever} from 'react-icons/md'
import './index.css'

const Comment = props => {
  const {commentedLists, fun1, fun2} = props
  const {id, name, strike, clr} = commentedLists
  const clicked = () => {
    fun1(id)
  }

  const doned = () => {
    fun2(id)
  }
  let vals = clr
  let styled
  if (strike) {
    styled = 'wow'
  } else {
    styled = ''
    vals = ''
  }
  return (
    <div className="comment-card">
      <button className="bts" type="button" onClick={doned}>
        <FaRegCircleCheck className={`ics ${vals}`} />
      </button>
      <p className={`header ${styled}`}>{name}</p>
      <button
        className="bts"
        data-testid="delete"
        type="button"
        onClick={clicked}
      >
        <MdOutlineDeleteForever className="ics delHOver" />
      </button>
    </div>
  )
}

export default Comment
