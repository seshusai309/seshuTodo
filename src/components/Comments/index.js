import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Comment from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {count: 0, name: '', commentsList: []}

  submitedForm = event => {
    event.preventDefault()
    this.setState(each => {
      if (each.name === '') {
        return true
      }
      return {
        name: '',

        count: (each.count + 1) % initialContainerBackgroundClassNames.length,
        commentsList: [
          ...each.commentsList,
          {
            id: uuidv4(),
            name: each.name,

            clr: initialContainerBackgroundClassNames[each.count],
            strike: false,
          },
        ],
      }
    })
  }

  liked = id => {
    this.setState(each => ({
      commentsList: each.commentsList.map(eached => {
        if (eached.id === id) {
          return {
            id: eached.id,
            name: eached.name,
            clr: eached.clr,
            strike: !eached.strike,
          }
        }
        return eached
      }),
    }))
  }

  nameChanging = event => {
    this.setState({name: event.target.value})
  }

  delete = id => {
    this.setState(each => ({
      commentsList: each.commentsList.filter(val => val.id !== id),
    }))
  }

  render() {
    const {name, commentsList} = this.state
    return (
      <div className="Main-Container">
        <h1 className="Comment-Mainhead">Task tracker</h1>

        <div className="container">
          <div className="sub-container">
            <p className="comments-para">
              Best place to track your <span className="spaned">Tasks</span>
            </p>
            <form className="forms" onSubmit={this.submitedForm}>
              <input
                onChange={this.nameChanging}
                placeholder="Your Name"
                className="inp input1"
                type="text"
                value={name}
              />
              <button type="submit" className="button-56">
                Add Tasks
              </button>
            </form>
          </div>
        </div>

        <hr />

        <div className="Comments-count">
          <div className="commented">{commentsList.length}</div>
          <div>
            <p>Tasks</p>
          </div>
        </div>

        <div>
          {commentsList.map(each => (
            <Comment
              key={each.id}
              fun2={this.liked}
              fun1={this.delete}
              commentedLists={each}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Comments
