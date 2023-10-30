import React, { useState } from 'react'
import { TodoForm } from './todoForm'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './todo';
uuidv4();

export const TodoWrapper = () => {
  const [todos,setTodos]=useState([]);

  const addToDo= todo =>{
    setTodos([...todos, {id:uuidv4(),task:todo, completed:false, isEditing:false}])
    console.log(todos)
  }
  const toggleCompleted= id =>{
      setTodos(todos.map(todo=>todo.id===id ? {
        ...todo,completed:!todo.completed}:todo))
  }
  return (
    <div className='TodoWrapper'>
      <h1>My TodoList</h1>
      <TodoForm addToDo={addToDo} />
      {todos.map((todo,index)=>(
        <Todo task={todo} key={index} toggleCompleted={toggleCompleted}/>
      ))}
      
    </div>
  )
}


