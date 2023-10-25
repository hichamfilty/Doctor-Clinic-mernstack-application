import React, {useState} from 'react'
import axios from 'axios'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false);

  const login = (e) => {
  e.preventDefault()
  axios.post('http://localhost:5000/auth/login', {
    username, password
  }, {
    withCredentials: true
  }).then(res => {
    if(res.status === 200){
      window.location.href = '/home'
    }
  })
    .catch(error => setError(error.response.data.message))
  }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder='Username' name='username' onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder='Password' name='password' onChange={e => setPassword(e.target.value)}/>
      <button onClick={login}>Login</button>
      <p>{error && <span style={{color: 'red'}}>{error}</span>}</p>
    </div>
  )
}

export default Login
