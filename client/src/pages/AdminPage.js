import React, {useEffect, useContext, useState} from 'react'
import axios from 'axios'
import {myContext} from './Context'

function AdminPage() {
 const ctx = useContext(myContext)
 const [data, setData] = useState('')
 const [selectedUser, setSelectedUser] = useState('')

  useEffect(() => {
   axios.get('http://localhost:5000/auth/getallusers', {
     withCredentials: true
   }).then(res => {
     setData(res.data.filter(item => {
       return item.username !== ctx.username
     }))
   })
  }, [ctx])

  if(!data) {
    return null
  }
  const deleteUser = () => {
    let userId 
    data.forEach(item => {
      if(item.username === selectedUser){
        userId = item.id
      }
    })
    axios.post('http://localhost:5000/auth/deleteuser', {
      id: userId
    }, {
      withCredentials: true
    }).then(window.location.href = '/admin')
  }
  return (
    <div>
      <h1>Admin, only admins can see this!!!</h1>
      <select name="deleteuser" id="deleteuser" onChange={e => setSelectedUser(e.target.value)}>
        <option id='select a user'>Select A User</option>
        {
          data.map((item => {
            return (
              <option key={item.username} id={item.username}>{item.username}</option>
            )
          }))
        }
      </select>
      <button onClick={deleteUser}>Delete a user</button>
    </div>
  )
}

export default AdminPage
