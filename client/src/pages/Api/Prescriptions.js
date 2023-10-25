import React, { useState } from 'react'
import axios from 'axios'


function Prescriptions() {
  const [prescriptionName, setPrescriptionName] = useState('');
  const [amount, setAmount] = useState('');
  const [doctorprescribed, setDoctorprescribed] = useState('');
  const [instructions, setInstructions] = useState('');
  const [prescriptions, setPrescriptions] = useState([]);
  const [error, setError] = useState(false);

  const addPrescription = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/prescriptions', {
      prescriptionName, amount,instructions, doctorprescribed
    })
      .then(res => console.log(res.data))
      .catch(error => setError(error.response.data.message))
  }
  const showAllPrescriptions = (e) => {
    e.preventDefault()
    axios.get('http://localhost:5000/api/prescriptions', {
      withCredentials: true
    })
      .then(res =>{
        setPrescriptions(res.data)
        console.log(res.data)
      } 
      )
      .catch(error => setError(error.response.data.message))
  }
  const deletePrescription = (id, e) => {
    e.preventDefault()
    axios.delete(`http://localhost:5000/api/prescriptions/${id}`)
      .then(res => console.log(res.data))
      .catch(error => setError(error.response.data.message))
  }
  const updatePrescription = (id, e) => {
    e.preventDefault()
    axios.put('http://localhost:5000/api/prescriptions' + id,{
      prescriptionName, amount, instructions, doctorprescribed
    })
       .then(res => {
         setPrescriptions(res.data)
         console.log(res.data)
       })
       .catch(error => setError(error.response.data.message))
  }
  return (
    <div>
      <h1>Prescriptions:</h1>
      <div>
        <h1>Add Prescription</h1>
          <form>
            <input type="text" name='prescriptionName' placeholder='Prescription name' onChange={e => setPrescriptionName(e.target.value)}/>
            <input type="text" name='amount' placeholder='Amount' onChange={e => setAmount(e.target.value)}/>
            <input type="text" name='instructions' placeholder='Instructions' onChange={e => setInstructions(e.target.value)}/>
            <input type="text" name='doctorprescribed' placeholder='Doctorprescribed' onChange={e => setDoctorprescribed(e.target.value)}/>
            <button onClick={addPrescription}>Add prescription</button>
        <p>{error && <span style={{color: 'red'}}>{error}</span>}</p>
          </form>
      </div>
      <div>
        <h1>Show all prescriptions</h1>
        <table>
          <tbody>
           {
          prescriptions.map(prescription => (
            <tr key={prescription._id}>
              <td>{prescription.prescriptionName}</td>
              <td>{prescription.amount}</td>
              <td>{prescription.instructions}</td>
              <td>{prescription.doctorprescribed}</td>
            </tr>
            
          ))
        } 
          </tbody>
        </table>
        
        <button onClick={showAllPrescriptions}>Show All Appointments</button>
      </div>
      <div>
        <h1>delete </h1>
        <table>
          <thead>
            <tr>
              <th>Prescription Name:</th>
              <th>Amount:</th>
              <th>Instructions:</th>
              <th>Doctor prescribed:</th>
            </tr>
          </thead>
          <tbody>
            {
              prescriptions.map(prescription => (
                <tr key={prescription._id}>
                  <td>{prescription.prescriptionName}</td>
                  <td>{prescription.amount}</td>
                  <td>{prescription.instructions}</td>
                  <td>{prescription.doctorprescribed}</td>
                  <td>
                    <button onClick={e => deletePrescription(prescription._id,e)}>
                      Delete Prescription
                      </button>
                      </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div>
        <h1>Update prescriptions</h1>
        <table>
          <thead>
            <tr>
              <th>Prescription name:</th>
              <th>Amount:</th>
              <th>Instructions:</th>
              <th>Doctor:</th>
            </tr>
          </thead>
          <tbody>
            {
              prescriptions.map(prescription => (
                <>
                 <tr key={prescription._id}>
                   <td>{prescription.prescriptionName}</td>
                   <td>{prescription.amount}</td>
                   <td>{prescription.instructions}</td>
                   <td>{prescription.doctorprescribed}</td>
                 </tr>
                 <tr key={prescription._id}>
                    <td><input type="text" name='prescriptionName' placeholder='Prescription name' onChange={e => setPrescriptionName(e.target.value)}/></td>
                    <td><input type="text" name='amount' placeholder='Amount' onChange={e => setAmount(e.target.value)}/></td>
                    <td><input type="text" name='instructions' placeholder='Instructions' onChange={e => setInstructions(e.target.value)}/></td>
                    <td><input type="text" name='doctorprescribed' placeholder='Doctorprescribed' onChange={e => setDoctorprescribed(e.target.value)}/></td>
                    <td><button onClick={e => updatePrescription(prescription._id, e)}>Update prescription</button></td>
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

export default Prescriptions
