import React, { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState({
    id: "",
    task: "",
    completed: false,
  });

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setItems(storageTodos);
    }
  }, []); //! localstorage-de qalir amma refresh edende gedir

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const handleInputChange = (e) => {
    setInputValue({ ...inputValue, task: e.target.value });
  };
  const addInputValue = (inputValue) => {
    setItems([...items, inputValue]);
  };

  const deleteInputValue = (id) => {
    setItems((items) => items.filter((inputValue) => inputValue.id !== id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.task.trim()) {
      addInputValue({ ...inputValue, id: uuidv4() });
      setInputValue({ ...inputValue, task: "" });
    }
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((inputValue) => {
        if (inputValue.id === id) {
          return {
            ...inputValue,
            completed: !inputValue.completed,
          };
        }
        return inputValue;
      })
    );
  };

  const handleCheckboxClick = (id) => {
    toggleComplete(id);
  };

  const handleDelete = (id) => {
    deleteInputValue(id);
  };

  const handleDeletecompleted = () => {
    setItems((items) =>
      items.filter((inputValue) => inputValue.completed === false)
    );
  };

  const handleAll = () => {
    setItems((items) => items.map((inputValue) => inputValue));
  };
  const handleActive = () => {
    setItems((items) =>
      items.filter((inputValue) => inputValue.completed === false)
    );
  };
  const handleCompleted = () => {
    setItems((items) =>
      items.filter((inputValue) => inputValue.completed === true)
    );
  };
  return (
    <div>
      <div className="background">
        <div className="todo-header">
          <span>TODO</span>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Combined Shape"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.3717 0.215831C10.5931 1.19962 7 5.4302 7 10.5C7 16.299 11.701 21 17.5 21C20.4958 21 23.1986 19.7454 25.1116 17.7328C23.2191 22.5722 18.5098 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C13.81 0 14.6027 0.0740788 15.3717 0.215831Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="todo-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            className="task-input"
            value={inputValue.task}
            placeholder="Create a new todo..."
            onChange={handleInputChange}
          />
          {/* <button type="submit" className="sub-btn">+</button> */}
        </form>
        {items.map((inputValue, id) => (
          <Todo
            inputValue={inputValue}
            handleCheckboxClick={() => handleCheckboxClick(inputValue.id)}
            handleDelete={() => handleDelete(inputValue.id)}
            key={id}
          />
        ))}
        <li className="app-li">
        <span>{items.length} items left</span>
        <div className="bottom-btns">
        <div className="bottom-btns1">
        <button onClick={() => handleAll(inputValue.completed)}>All</button>
        <button onClick={() => handleActive(inputValue.completed)}>
          Active
        </button>
        <button onClick={() => handleCompleted(inputValue.completed)}>
          Completed
        </button>
        </div>
        <button onClick={() => handleDeletecompleted(inputValue.completed)}>
          Clear Completed
        </button>
        </div>
        </li>
      </div>
    </div>
  );
};
//! handlecompleted,all,activi filterle yazmaq dogrudu?
//! active completed-i isledende checkbox-da problem
export default App;
