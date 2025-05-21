import React from 'react'

const Item = ({list, handleDelete, handleEdit}) => {
  return (
    <div>
        {list.map((item, index)=>(
        <div className='item-container' key={index}><p>{item.item}</p><button onClick={()=>handleDelete(item.id)}>Delete</button><button onClick={handleEdit(item.id)}>Edit</button></div>
      ))}
    </div>
  )
}
export default Item