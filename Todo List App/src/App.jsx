import React, { useState } from 'react'

const App = () => {

  // list of tasks
  const [tasks, setTasks] = useState([])
  // input
  const [inputTask, setInputTask] = useState("")


  // Add Task
  const addTask = () => {
    // Change add the new Task
    setTasks([...tasks, inputTask])
  }

  // handleDelete 

  return (
    <div>
      <div>
        <input type="text" placeholder='Add New Task' onChange={(e)=> {setInputTask(e.target.value)}}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
      {tasks.map((tasks, index)=> (
        <div key={index} className='task-group'><p>{tasks}</p><button className='delete-btn'>X</button></div>
      ))}
      </div>
    </div>
  )
}

export default App