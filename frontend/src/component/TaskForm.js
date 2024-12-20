import React, { use, useState } from 'react'

const TaskForm = ({name, handleChange,handleSubmit}) => {
   
  return (
    <div>
        <form className='task-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Add a Task' name='name' value={name} onChange={handleChange}/>
        <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default TaskForm