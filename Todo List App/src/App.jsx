import React, { useState } from 'react'

const App = () => {

  // list of tasks
  const [tasks, setTasks] = useState([])
  // input
  const [inputTask, setInputTask] = useState("")


  // Add Task
  const addTask = () => {
    // Change add the new Task
    const tasksCopy = tasks
    tasksCopy.push(inputTask)
    setTasks(tasksCopy)
  }
  return (
    <div>
      <div>
        <input type="text" placeholder='Add New Task' value={inputTask} onChange={(e)=> {setInputTask(e.target.value)}}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">

      </div>
    </div>
  )
}

export default App