import React from 'react'
import './Todo.css'
 
const Todo = ({inputValue,handleCheckboxClick,handleDelete}) => {
  return (
    <div className="todo-task-box" style={{display:"flex"}}>
        <li style={{
          listStyle: "none",
          color: inputValue.completed ? "grey" : "black",
          textDecoration: inputValue.completed ? "line-through" : null
        }}>
        <div>
        <input type="checkbox" className='check-btn' onClick={handleCheckboxClick} />
        {inputValue.task}
        </div>
        </li>
        <button onClick={handleDelete} className='delete-btn'>X</button>
    </div>
  )
}

export default Todo