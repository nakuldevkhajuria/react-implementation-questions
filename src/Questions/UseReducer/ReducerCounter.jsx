import React, { useReducer } from 'react'

const ReducerCounter = () => {
    const Reducer = (state,action)=>{
        switch(action.type){
            case 'increment':
               return state + 1;
            case 'decrement':
                return   state - 1;
            default:
                return   'no case found'
        }
    }


    const [count,dispatch] = useReducer(Reducer,0)
  
const handleIncrement =()=>{
dispatch({type:'increment'})
}
const handleDecrement =()=>{
    dispatch({type:'decrement'})
    }

    // console.log(Reducer(1,{type:'increment'}))
  return (
    <div>
  
        ReducerCounter ${count}
    
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default ReducerCounter