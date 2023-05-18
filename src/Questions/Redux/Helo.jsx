import React from 'react'
import { useSelector } from 'react-redux'


const Helo = () => {
    
    let Data1 = useSelector(state => state.counter)
    console.log(Data1)
    return (
        <div>
      dfdf
    
    </div>
      )
}

export default Helo