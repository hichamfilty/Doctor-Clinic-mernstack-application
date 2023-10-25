import React from 'react'
import axios from 'axios'

function Logout() {
  const logout = () => {
    axios.get('http://localhost:5000/auth/logout', {
      withCredentials: true
    }).then(res => {
      if(res.status === 200){
        window.location.href = '/'
      }
    })
  }
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout
