import React, { useReducer } from 'react'

const TodoList = () => {

    const Reducer = (state,action)=>{

        switch(action.type){
            case 'ADD_TODO':
                return
            case 'REMOVE_TODO':
                return
            case 'TOGGLE_TODO':
                return
        }

    }
    const [todos,dispatch] = useReducer(Reducer,[]) 
    const ADD_TODO =()=>{

    }
  return (
    <div>
{
    todos.map((item,index)=>{
        <ul>
            <li></li>
        </ul>
    })
}

    </div>
  )
}

export default TodoList