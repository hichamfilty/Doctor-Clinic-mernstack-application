import React, { useState } from 'react'
import axios from 'axios'

function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const register = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/auth/signup', {
      username, password, email
    }, {
      withCredentials: true
    }).then(res =>{
       
       window.location.href = '/'
      })
       .catch(error =>setError(error.response.data.message))
  }
  return (
    <div>
      <h1>Register</h1>
      
      <input type="text" placeholder='Username' name='username' onChange={e => setUsername(e.target.value) } />
      <input type="password" placeholder='Password' name='password' onChange={e => setPassword(e.target.value)} />
      <input type="email" placeholder='Email' name='email' onChange={e => setEmail(e.target.value)} />
      <button onClick={register}>Submit</button>
      <p>{error && <span style={{color: 'red'}}>{error}</span>}</p>
    </div>
  )
}

export default Signup
