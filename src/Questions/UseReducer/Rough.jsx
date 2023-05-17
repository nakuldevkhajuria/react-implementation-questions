import React, { useEffect, useState } from 'react'

const Rough = () => {
   const [users,setUsers] = useState([])
useEffect(()=>{
    fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts-1001')
    .then(res => res.json())
    .then(res =>setUsers(res))
},[])

const filteredUsers = users.filter((item)=> item.age > 14) 
  return (
    <div>

        {
filteredUsers.map((item,index)=>{
    return (
    <div key={index}>
        <span >{item.firstName}</span>
    <span>{item.lastName }</span>
    </div>)
})
        }
    </div>
  )
}

export default Rough