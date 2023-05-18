import { createSlice } from "@reduxjs/toolkit"


const initialState = 0

const  createCounter = createSlice(
    {
        name:"Counter",
        initialState,
        reducers:{
            postAdded : ((state,action)=>{
                console.log(action)
                console.log(state)
    state.push(action.payload)//type and payload are the properties of action.
    
                })
        }
    }
)

export const{postAdded} = createCounter.actions
export default createCounter.reducer