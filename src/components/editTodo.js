import React,{useState} from 'react'

export const EditTodo = ({editTodo,task}) => {
  const [value,setValue]=useState(task.task);

  const handleSubmit= e =>{
    e.preventDefault();
    if(value!==""){editTodo(value,task.id)};
    setValue('');

  }
  return (
    <form className='TodoFrom' onSubmit={handleSubmit}>
      <input type='text' value={value} className='todo-input' onChange={(e)=> {
        setValue(e.target.value);
      }}/>
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
