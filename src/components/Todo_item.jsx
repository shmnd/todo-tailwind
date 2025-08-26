import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete_icon.png'



const Todo_item = ({text,id,isComplete,deleteTodo,toggle }) => {
  return (

    <div className='flex items-center my-3 gap-2'>
  {/* ----------- list---------tick------------ */}

      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        <img  src={isComplete ? tick : not_tick} alt="" className='w-5'/>
        <p className={`text-slate-700 ml-3 text-[17px] decoration-slate-500
         ${isComplete ? "line-through" : ""}`}>
          {text} </p>

      </div>

{/* delete icon */}

      <div className='my-'>
        <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='w-4 cursor-pointer'/>
      </div>

    </div>
  )
}

export default Todo_item