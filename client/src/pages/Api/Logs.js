import React, {useState} from 'react'
import axios from 'axios'

function Logs() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [doctorPhone, setDoctorPhone] = useState('')
  const [visitReason, setVisitReason] = useState('');
  const [hight, setHight] = useState('');
  const [date, setDate] = useState('');
  const [visitNotes, setVisitNotes] = useState('');
const [doctors, setDoctors] = useState([]);

const getAllDoctors = (e) => {
  e.preventDefault()
  axios.get('http://localhost:5000/api/doctors', { withCredentials: true})
  .then(res => {
    setDoctors(res.data)
    console.log(res.data)
  })
  .catch( error => console.Logs(error.response.data.message)) 
  
}
  return (
    <div>
      <h1>Logs</h1>
      <h2>Select doctor notes:</h2>
      
      <select name="selectDoctor">
        <option>Select a doctor</option>

        {
          doctors.map(doctor => (
             <option>Dr. {doctor.lastname} {doctor.firstname}</option>
          ))
        }
      </select><button onClick={getAllDoctors}>select a doctor</button>
      <form >
      <input type="date" name='date' placeholder=' Date of doctor visit' onChange={e => setDate(e.target.value)} />
      <input type="text" placeholder='Reason for visit' name='visitReason' onChange={e => setVisitReason(e.target.value)}/>
      <input type="text" placeholder='Hight' name='hight' onChange={e => setHight(e.target.value) }/>
      <input type="text" name='visitNotes' placeholder='Additional information' />
      <button>Add notes</button>
      </form>
    </div>
  )
}

export default Logs
