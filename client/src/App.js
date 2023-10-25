import React, { useContext } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup'
import Home from './pages/Home'
import AdminPage from './pages/AdminPage'
import Navbar from './pages/Navbar'
import Logout from './pages/Logout'
import Doctors from './pages/Api/Doctors&Clinics/Doctors'
import Prescriptions from './pages/Api/Prescriptions'
import Appointments from './pages/Api/Appointments'
import Logs from './pages/Api/Logs'
import Symptoms from './pages/Api/Symptoms'
import {myContext} from './pages/Context'

function App() {
  const ctx = useContext(myContext)
  return (

    <Router>
      <Navbar/>
        <Switch>
    {
      ctx.user ? (
        <>
        {
          ctx.user.isAdmin ? (
            <>
            <Route exact path='/admin' component={AdminPage}/>
            <Route exact path="/doctors" component={Doctors} />
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/prescriptions" component={Prescriptions} />
            </>
          ) : null
        }
        <Route exact path='/home' component={Home} />
        <Route exact path='/logout' component={Logout}/>
        
        <Route exact path="/logs" component={Logs} />
        
        <Route exact path="/symptoms" component={Symptoms} />
        </>
      ) : (
        <>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </>
      )
    }
      </Switch>
    </Router>
   
  )
}

export default App
