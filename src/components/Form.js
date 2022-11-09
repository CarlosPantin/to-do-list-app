import React, {useState} from 'react';

function Form() {
const [input,setInput]= useState('')



  return (
   <form className="list-form">
    <input type="text" placeholder='Add somenthing to do' value={input} name="text" className="todo-input"/>
    <button className="todo-button"> Add task</button>
   </form>
  )
}

export default Form