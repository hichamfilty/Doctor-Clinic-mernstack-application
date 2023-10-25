import React, { useState } from 'react'
import axios from 'axios'

function Appointments() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor,setDoctor] = useState('');
  const [error, setError] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [visitPurpose, setVisitPurpose] = useState('');

  const addAppointments = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/appointments', {
      name, date, time, doctor, visitPurpose
    })
      .then(res => console.log(res.data) )
      .catch(error => setError(error.response.data.message))
  }

  const DeleteAppointment = (id, e) => {
    e.preventDefault()
     axios.delete('http://localhost:5000/api/appointments/' + id)
       .then(res => console.log(res.data))
       .catch(error => setError(error.response.data.message))
  }

  const getAllAppointments = (e) => {
    e.preventDefault()
    axios.get('http://localhost:5000/api/appointments', {
      withCredentials: true
    })
      .then(res => {
        setAppointments(res.data)
        console.log(res.data)
      })
      .catch(error => setError(error.response.data.message))
  }
  const UpdateAppointments = (id, e) => {
    e.preventDefault()
    axios.put('http://localhost:5000/api/appointments/' + id, {
      name, doctor, date, time, visitPurpose
    })
      .then(res => 
        console.log(res.data)
      )
      .catch(error => setError(error.response.data.message))
  }
  return (
    <div>
      <h1>Appointments:</h1>
      <div>
        <h1>Add an appointment</h1>
        <form>
        <input type="text" placeholder='Name on appointment' name='name' onChange={e => setName(e.target.value) }/>
        <input type="text" placeholder='Date' name='date' onChange={e => setDate(e.target.value) }/>
        <input type="text" placeholder='Time' name='time' onChange={e => setTime(e.target.value) }/>
        <input type="text" placeholder='Doctor' name='doctor' onChange={e => setDoctor(e.target.value) }/>
        <input type="text" placeholder='Visite Purpose' name='visitPurpose' onChange={e => setVisitPurpose(e.target.value) }/>
        <button onClick={addAppointments}>Take An Appointment</button>
        <p>{error && <span style={{color: 'red'}}>{error}</span>}</p>
        </form>
      </div>
      <div>
        <h1>Show All Appointments</h1>
          {
            appointments.map(appointment => (
            <tr key={appointment._id}>
              <td>{appointment.name}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.visitPurpose}</td>
            </tr>
            ))
          }
          <button onClick={getAllAppointments}>Show All Appointments</button>
      </div>
      <div>
        <h1>Delete an appointment</h1>
      <table>
          <thead>
            <tr>
              <th><b>Name</b></th>
              <th><b>Doctor</b></th>
              <th><b>Date</b></th>
              <th><b>Time(HH:MM)</b></th>
              <th><b>Visit-Purpose</b></th>
            </tr>
          </thead>  
          <tbody>
            {
              appointments.map(appointment => (
                
                  <tr key={appointment._id}>
                    <td>{appointment.name}</td>
                    <td>{appointment.doctor}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.visitPurpose}</td>
                    <td>
                      <button onClick={e => DeleteAppointment(appointment._id, e)}
                      >Delete an appointment</button>
                    </td>
                  </tr>
               
              ))
            }
          </tbody>
        </table>
      </div>
      <div>
        <h1>Update your appointment</h1>
        <table>
          <thead>
            <tr>
              <th><b>Name</b></th>
              <th><b>Doctor</b></th>
              <th><b>Date</b></th>
              <th><b>Time(HH:MM)</b></th>
              <th><b>Visit-Purpose</b></th>
            </tr>
          </thead>  
          <tbody>
            {
              appointments.map(appointment => (
                <>
                  <tr key={appointment._id}>
                    <td>{appointment.name}</td>
                    <td>{appointment.doctor}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.visitPurpose}</td>
                    
                 </tr>
                  <tr key={appointment._id}>
                    <td><input type="text" placeholder='Name on appointment' name='name' onChange={e => setName(e.target.value) }/></td>
                    <td><input type="text" placeholder='Doctor' name='doctor' onChange={e => setName(e.target.value) }/></td>
                    <td><input type="text" placeholder='Date' name='date' onChange={e => setName(e.target.value) }/></td>
                    <td><input type="text" placeholder='Time' name='time' onChange={e => setName(e.target.value) }/></td>
                    <td><input type="text" placeholder='Visit Purpose' name='visitPurpose' onChange={e => setName(e.target.value) }/></td>
                    <td>
                      <button onClick={e => UpdateAppointments(appointment._id, e)}
                      >update an appointment</button>
                    </td>
                  </tr> 
                  </>
              ))
            }
          </tbody>
        </table>
      </div>
        
    </div>
  )
}

export default Appointments
