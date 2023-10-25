import React from 'react'
import {Link} from 'react-router-dom'

function Welcome() {
  return (
    <div>
      <h1>New User?</h1>
      <br/>
      <p>If you are a new user, you will need to set up at least one primary clinic and one primary doctor before you can use the app.</p>
      <br/>
      <button>Set up doctors and clinics</button>
      <br/>
      ........
      <br/>
      <h1>Returning user?</h1>
      <p>Welcome back! Click the button below to go to the Home page and pick up where you left off.</p>
      <button component={Link} to="/home">continue to homepage</button>
    </div>

  )
}

export default Welcome
