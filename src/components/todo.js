import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task,toggleCompleted,deleteTask,editTask}) =>{
  return (
    <div className='Todo'>
      <p className={`${task.completed? "completed" : "incompleted"}`}
      onClick={()=>toggleCompleted(task.id)}
      >{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTask(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTask(task.id)}/>
      </div>
    </div>
  )
}
