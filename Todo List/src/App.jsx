import React from 'react'
import { useState } from 'react'

const App = () => {
  // states
  const [input, setInput] = useState("")
  // list
  const [list, setList] = useState([])
  // task Complete
  


  // handleInput  
  const handleInput = (e)=> {
    setInput(e.target.value)
  }

  // handleAdd
  const handleAdd = () => {
    // get the last id of the last element and increment it
    // also, cover the part when there is no element in the array
    if(input !=="") {
    const id = list.length === 0 ? 1 : list[list.length-1].id + 1
    setList([...list, {id: id, task: input, isComplete: false}])
    setInput("")
    }
 
  }


  // handle Delete
  const handleDelete = (id)=> {
    setList(list.filter((task)=> task.id!== id))
  }

  // handle complete
  const handleComplete = (id)=> {
      setList(prev => prev.map((task)=> task.id===id ? {...task, isComplete: !task.isComplete}: task))
      console.log(list)
  }


  return (
    <div className='container'>
      <div className='ui-container'>
        <div className='add-task-container'>
          <input value={input}type="text" placeholder="Add Task" onChange={(e)=> handleInput(e)}/>
          <button className='add-btn' onClick={handleAdd}>Add</button>
        </div>
        <div className='list'>
        {list.map((item, index)=> (
          <div className={`task-container ${item.isComplete ? "complete" : ""}`} key={index}>
            <p>{item.task}</p>
            <div><button onClick={()=> handleComplete(item.id)}>{item.isComplete ? "Reset" : "Complete"}</button><button onClick={()=> handleDelete(item.id)}>Delete</button></div>
          </div>
        ))}
        </div>
    </div>
    </div>
  )
}

export default App