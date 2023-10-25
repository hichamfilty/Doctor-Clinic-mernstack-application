import React, { useState } from 'react'
import axios from 'axios'

function DoctorForm() {
  const [clinicname, setClinicname] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');
  const [clinics, setClinics] = useState([]);
  const [error, setError] = useState(false);
  
  const addClinic =(e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/clinics', {clinicname, address, city, state, phone})
      .then(res => console.log(res.data))
      .catch(error => setError(error.response.data.message))
  }

  const getAllClinics =(e) => {
    axios.get('http://localhost:5000/api/clinics', {withCredentials: true})
      .then(res => {
        setClinics(res.data)
        console.log(res.data)
      })
      .catch(error => setError(error.response.data.message))
  }

  const deleteClinics = (id, e) => {
    e.preventDefault()
    axios.delete(`http://localhost:5000/api/clinics/${id}`)
      .then(res => {
        console.log('delete successfull')
         })
      
      .catch(error => setError(error.response.data.message))
  }

  return (
    <div>
      <form>
      <input type="text" placeholder='Clinicname' name='clinicname' onChange={e => setClinicname(e.target.value) }/>
      <input type="text" placeholder='Address' name='address' onChange={e => setAddress(e.target.value) }/>
      <input type="text" placeholder='City' name='city' onChange={e => setCity(e.target.value) }/>
      <input type="text" placeholder='State' name='state' onChange={e => setState(e.target.value) }/>
      <input type="text" placeholder='Phone' name='phone' onChange={e => setPhone(e.target.value) }/>
      <button onClick={addClinic}>Add Clinic</button>
      <p>{error}</p>
      </form>

      <br/>
      <div>
        <h1>All Clinics</h1>
        <table>
          <tbody>
            
        {
          clinics.map(clinic => (
              <tr key={clinic._id}>
                <td>
                  {clinic.clinicname}
                </td>
              </tr>
          ))
        }
        </tbody>
        </table>
        <button onClick={getAllClinics}>Show all clinics</button>
      </div>
          
      <div>
        <h1>Delete Clinics</h1>
        <table>
          <tbody>
        {
          clinics.map(clinic => (
            
              <tr key={clinic._id}>
                <td>{clinic.clinicname}</td>
                <td><button onClick={e => deleteClinics(clinic._id, e)}>Delete clinic</button></td>
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
