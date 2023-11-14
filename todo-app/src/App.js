import logo from './logo.svg';
import './App.css';
import {React, useRef, useState} from "react";

function App() {

  const taskInput = useRef(null);
  const [tasks, setTasks] = useState([]);

  const addTaskBtn = (e) => {
    e.preventDefault();
    if (taskInput.current.value.trim()){
      setTasks([...tasks, taskInput.current.value]);
    }
    taskInput.current.value = "";
  }

  const removeTask = (index, e) => {
    let target = e.currentTarget.parentElement;
    target.classList.add("fade-out");
    setTimeout(() => {
      target.classList.remove("fade-out")
      setTasks(tasks.filter((_, i) => {
        if (i !== index){
          return true;
        }
        else {
          return false;
        }
      }));
    }, 200);
  }

  return (
    <div className="App">
      <div className="w-100 justify-content-center text-center mt-5">
        <div className="d-flex justify-content-center">
          <div className="d-inline">
            <h1>ToDo List</h1>
            <form onSubmit={addTaskBtn}>
              <input type="text" ref={taskInput} placeholder="Enter task name" className="task-input"/>
              <button type="submit" className="add-btn">Add</button>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-inline">
            { tasks.map((task, i) => {
              return (
                <div className={`task-card d-flex w-100 ${i % 2 !== 0 && "odd"} fade-in`}>
                  <p className="w-100 m-0">{task}</p>
                  <button onClick={(e) => {removeTask(i, e);}} 
                  className={`delete-btn`}>X</button>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
