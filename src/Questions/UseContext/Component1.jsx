import React, { useContext } from 'react'
import MyContext from './Context'

const Component1 = () => {
  const MyContext1 = useContext(MyContext)
  console.log(MyContext)
  const style = {
    backgroundColor:"red",
    width:"150px",
    height:'150px',
    margin:'0px auto'

  }
  return (
    <div style={style} > {MyContext1} </div>
  )
}

export default Component1