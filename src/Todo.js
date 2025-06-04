import React from 'react'
import './Todo.css'
 
const Todo = ({inputValue,handleCheckboxClick,handleDelete}) => {
  return (
    <div className="todo-task-box" style={{display:"flex"}}>
      <input type="checkbox" className='check-btn' name="check"
      onChange={()=>handleCheckboxClick(inputValue.id)}
      checked={inputValue.completed} 
      />
        <li style={{
          listStyle: "none",
          color: inputValue.completed ? "grey" : "black",
          textDecoration: inputValue.completed ? "line-through" : null
        }}>
        <div className='task'>
        {inputValue.task}
        </div>
        </li>
        <button onClick={()=>handleDelete(inputValue.id)} className='delete-btn'>X</button>
    </div>
  )
}

export default Todo