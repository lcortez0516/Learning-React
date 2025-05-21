import React, { useState } from 'react'
import Item from './components/Item'

const App = () => {
// input
const [input, setInput] = useState("")
// list
const [list, setList] = useState([])


// input state
const handleInput = (e)=> {
  setInput(e.target.value)
}
// add task
const handleAddTask = ()=> {
  if(input !== ""){
  const id = list.length === 0 ? 1 : list[list.length-1].id + 1
  setList([...list, {id: id, item: input}])
  setInput("")
  }
}
// delete functionality
const handleDelete = (id)=> {
  setList(list.filter((item)=> item.id!==id))
}

// update functionality
const handleEdit = (id)=> {
 

}

  return (
    <div>    
    <div className='add-task'>
      <input type="text" value={input} placeholder='Add New Task' onChange={(e)=> handleInput(e)}/>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
    <div className='list'>
      <Item list={list} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
    </div>

  )
}

export default App