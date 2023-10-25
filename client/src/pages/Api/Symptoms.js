import axios from 'axios';
import React, {useState} from 'react'

function Symptoms() {
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [info, setInfo] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [error, setError] = useState(false);

  const addSymptoms = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/symptoms', {
      type, date, time, info
    })
      .then(res => console.log(res.data))
      .catch(error => setError(error.response.data.message))
  }
  const getAllSymptoms = (e) => {
    e.preventDefault()
    axios.get('http://localhost:5000/api/symptoms', {withCredentials: true})
        .then(res => {
          console.log(res.data)
          setSymptoms(res.data)
        })
        .catch(error => setError(error.response.data.message))
  }
  const deleteSymptoms = (id, e) => {
    e.preventDefault()
    axios.delete('http://localhost:5000/api/symptoms/' + id, { withCredentials: true })
       .then(res => console.log(res.data))
       .catch(error => setError(error.response.data.message))
  }
  const updateSymptoms = (id, e) => {
    e.preventDefault()
    axios.put('http://localhost:5000/api/symptoms/' + id, {
      type, date, time, info
    })
      .then(res => console.log(res.data))
      .catch(error => setError(error.response.data.message))
  }

  return (
    <div>
      <h1>Symptoms</h1>
      <div>
        <h1>Add a symtom:</h1>
          <form>
            <input type="text" placeholder='Symptom Type' name='type' onChange={e => setType(e.target.value)}/>
            <input type="text" placeholder='Symptom date' name='type' onChange={e => setDate(e.target.value)}/>
            <input type="text" placeholder='Symptom time' name='time' onChange={e => setTime(e.target.value)}/>
            <input type="text" placeholder='Symptom information' name='info' onChange
            ={e => setInfo(e.target.value)}/>
            <button onClick={addSymptoms}>Describe your symptoms</button>
            <p>{error && <span style={{color: 'red'}}>{error}</span>}</p>
          </form>
      </div>
      <div>
        <h1>Show all syptoms</h1>
        <table>
          <tbody>
        {
          symptoms.map(symptom => (
            <tr key={symptom._id}>
              <td>{symptom.type}</td>
              <td>{symptom.date}</td>
              <td>{symptom.time}</td>
              <td>{symptom.info}</td>
            </tr>
          ))
        }
        </tbody>
        </table>
        <button onClick={getAllSymptoms}>Show all symptoms</button>
      </div>
      <div>
        <h1>Delete Symptoms</h1>
         <table>
           <thead>
             <tr>
               <th>Symptom type</th>
               <th>Symptom date</th>
               <th>Symptom time</th>
               <th>Symptom information</th>
             </tr>
           </thead>
           <tbody>
             {
               symptoms.map(symptom => (
                 <tr key={symptom._id}>
                   <td>{symptom.type}</td>
                   <td>{symptom.date}</td>
                   <td>{symptom.time}</td>
                   <td>{symptom.info}</td>
                   <td>
                     <button onClick={e => deleteSymptoms(symptom._id, e)}>Delete symptoms</button>
                   </td>
                 </tr>
               ))
             }
           </tbody>
         </table>
      </div>
      <div>
        <h1>Update symptoms</h1>
        <table>
          <thead>
            <tr>
            <th>Symptom type</th>
            <th>Symptom date</th>
            <th>Symptom time</th>
            <th>Symptom information</th>
            </tr>
          </thead>
          <tbody>
          {
              symptoms.map(symptom => (
                <>
                <tr key={symptom._id}>
                   <td>{symptom.type}:<input type="text" placeholder='Symptom Type' name='type' onChange={e => setType(e.target.value)}/></td>
                   <td>{symptom.date}<input type="text" placeholder='Symptom date' name='type' onChange={e => setDate(e.target.value)}/></td>
                   <td>{symptom.time}<input type="text" placeholder='Symptom time' name='time' onChange={e => setTime(e.target.value)}/></td>
                   <td>{symptom.info}<input type="text" placeholder='Symptom information' name='info' onChange
            ={e => setInfo(e.target.value)}/></td>
            <td>
            <button onClick={e => updateSymptoms(symptom._id, e)}>Update your symptoms</button>
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

export default Symptoms
