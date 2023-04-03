import React from 'react'
import Header from '../../Header'
import NewAppointmentTable from '../Doctor/NewAppointmentTable'

export default function TestSection() {
  return (
    <div>
      <div className="border shadow p-5 md:m-12 md:mt-4 md:p-10 bg-white rounded-3xl">
      <Header title="All Appointments"/>
       <NewAppointmentTable/>
    </div>
    </div>
  )
}
