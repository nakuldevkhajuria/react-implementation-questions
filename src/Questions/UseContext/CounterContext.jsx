import React, { useContext } from 'react'
import MyContext from './Context'
const CounterContext = () => {
    const recContext = useContext(MyContext)

    console.log(recContext)

  return (
    <div>CounterContext {
        recContext.map((item,index)=>{
            return <div key={index}>
                <p>{item.name}</p>
                <p>{item.class}</p>
                <p>{item.rollno}</p>
                <p>{item.data}</p>
            </div>;
        })
    
    }</div>
  )
}

export default CounterContext