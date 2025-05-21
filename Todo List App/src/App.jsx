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
  const handleDelete = (item) => {
   const newArr = tasks.filter((task)=> task!==item)
   setTasks(newArr)
   console.log(tasks)
  }


  
  return (
    <div>
      <div>
        <input type="text" placeholder='Add New Task' onChange={(e)=> {setInputTask(e.target.value)}}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
      {tasks.map((task, index)=> (
        <div key={index} className='task-group'><p>{task}</p><button className='delete-btn' onClick={()=> handleDelete(task)}>X</button></div>
      ))}
      </div>
    </div>
  )
}

export default App