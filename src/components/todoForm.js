import React,{useState} from 'react'

export const TodoForm = ({addToDo}) => {
  const [value,setValue]=useState("");

  const handleSubmit= e =>{
    e.preventDefault();
    addToDo(value);
    setValue(' ');

  }
  return (
    <form className='TodoFrom' onSubmit={handleSubmit}>
      <input type='text' value={value}  className='todo-input' onChange={(e)=> {
        setValue(e.target.value);

      }}/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
