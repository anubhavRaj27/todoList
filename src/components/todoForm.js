import React,{useState} from 'react'

export const TodoForm = () => {
  const [value,setValue]=useState("");

  const handleSubmit= e =>{
    e.preventDefault();

    console.log(value);
  }
  return (
    <form className='TodoFrom' onSubmit={handleSubmit}>
      <input type='text' placeholder='Add items' className='todo-input' onChange={(e)=> {
        setValue(e.target.value);
      }}/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
