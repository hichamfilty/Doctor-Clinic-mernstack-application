import React from 'react'
import DoctorForm from './DoctorForm'
import ClinicsForm from './ClinicForm'

function Doctors() {
  return (
    <div>
     <h1>Doctors</h1> 
     <DoctorForm/>
     <h1>Clinics</h1>
     <ClinicsForm/>
    </div>
  )
}

export default Doctors
