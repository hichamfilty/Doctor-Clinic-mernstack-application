import React, { useState } from 'react'
import axios from 'axios'

function DoctorForm() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [doctorPhone, setDoctorPhone] = useState('')
  const [error, setError] = useState(false)
  const [doctors, setDoctors] = useState([])
 

  const addDoctor = (e) => {
   e.preventDefault()
   axios.post('http://localhost:5000/api/doctors', {
     firstname, lastname, doctorPhone
     } ).then(res => console.log(res.data) )
        .catch(error => setError(error.response.data.message))
    }

  const deleteDoctor = (id, e) => {
    e.preventDefault()
    axios.delete(`http://localhost:5000/api/doctors/${id}` )
       .then(res => {
         console.log(res.data)
         console.log('Delete successful')
        //  setDoctors(res.data)
        //  const deletedoctor = res.data.filter(doctor => doctor._id !== id)
        //  console.log(deletedoctor)
        })
       .catch(error => setError(error.response.data.message))
  }
  const getAllDoctors = (e) => {
    e.preventDefault()
    axios.get('http://localhost:5000/api/doctors', { withCredentials: true})
    .then(res => {
      setDoctors(res.data)
      console.log(res.data)
    })
    .catch( error => setError(error.response.data.message)) 
    
  }
  
  return (
    <div>
      <form>
        <input type="text" placeholder='Firstname' name='firsname' onChange={e => setFirstname(e.target.value) }/>
        <input type="text" placeholder='Lastname' name='lastname' onChange={e => setLastname(e.target.value) }/>
        <input type="text" placeholder='Doctor Phone #' name='doctorPhone' onChange={e => setDoctorPhone(e.target.value) }/>
        <button onClick={addDoctor}>Add Doctor</button>
        {error && <span style={{color: 'red'}}>{error}</span>}
      </form>
        <br/>
        <div>
          <h1>get all doctors</h1>
          {
          doctors.map(doctor => <li key={doctor._id}>{doctor.firstname}</li>)
          }
          <button onClick={getAllDoctors}>get all doctors</button>
          <p>{error}</p>
        </div>
        <br/>
        <div>
        <h1>delete doctors</h1>
        <table >
        <tbody>
        { 
          doctors.map(doctor => (
              <tr key={doctor._id}>
              <td>{doctor.firstname}</td>
              <td>{doctor.lastname}</td>
              <td>
              <button onClick={e => deleteDoctor(doctor._id, e)}>Delete Doctor</button>
              </td>
              </tr>    
          ))  
        }
        </tbody>
        </table>
        
        </div>
    </div>
  )
}

export default DoctorForm
