import React, {useContext} from 'react'
import './NavbarCss.css'
import {Link} from 'react-router-dom'
import Logout from './Logout'
import {myContext} from './Context'

function Navbar() {
  const ctx = useContext(myContext)
  console.log(ctx.user);
  return (
    <div className='navBarWrapper'>
      <ul className='navBar'>
      {
          ctx.user ? (
            <>
              <Link to='/logout'><Logout/></Link>
              {
                ctx.user.isAdmin ? (
                  <>
                  <Link to='/admin'>Admin</Link>
                  <Link to='/doctors'>Doctors</Link>
                  <Link to='/appointments'>Appointments</Link>
                  <Link to='/prescriptions'>Prescriptions</Link>
                  </>
                ) : null
              }
              
              <Link to='/welcome'>welcome</Link>
              <Link to='/logs'>Logs</Link>
              <Link to='/symptoms'>Symptoms</Link>
              
              
            </>
          ) : (
            <>
             <Link to='/'>Login</Link>
            <Link to='/signup'>Register</Link>
            </>
          )
        }
         </ul>
            
    </div>
  )
}

export default Navbar
