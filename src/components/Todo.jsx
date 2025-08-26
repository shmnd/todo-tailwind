import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todo_item from './Todo_item'


const Todo = () => {

  const [todoList, setTodo] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): [])

  const inputRef = useRef(); //to get value entered in input field

// add todo
  const add = () =>{
    const todoItems = inputRef.current.value.trim();

    if (todoItems === " ") {
      return null
    }

    const newTodo = {
      id:Date.now(),
      text:todoItems,
      isComplete:false,
    }
    
    // assign the value typed in input box into list
    setTodo((previous) => [...previous, newTodo]);
    inputRef.current.value = "";

  }

  // -----------delete todo 


  const deleteTodo = (id) => {
    setTodo((previousTodos)=> {
      return previousTodos.filter((todo) => todo.id !== id)
    })
  }

// checked or not checked fun

const toggle = (id) =>{

 setTodo((previousTodo) => {
  return previousTodo.map((todo) => {
    if (todo.id === id){
      return {...todo,isComplete: !todo.isComplete}
    }
    return todo
  })
 })
}

// check it updated or not
useEffect(()=>{
 localStorage.setItem("todos",JSON.stringify(todoList))
},[todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        
{/* --------title-------- */}

    <div className='flex items-center mt-7 gap-2'>
        <img className='w-9' src={todo_icon} alt="todo_icon" />
        <h1 className='text-3xl font-bold'>TO-DO LIST </h1>

    </div>

{/* -------input box----- */}

    <div className='flex items-center my-7 bg-gray-200 rounded-full'>
      <input ref = {inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task'/>
      <button onClick={add} className='border-none rounded-full bg-orange-300 w-30 h-14 text-white text-lg font-medium cursor-pointer' >ADD+</button>

    </div>

{/* -------todo list----- */}

    <div>
      {todoList.map((item,index) => {
        return <Todo_item key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
      })}

    </div>





    </div>
  )
}

export default Todo

