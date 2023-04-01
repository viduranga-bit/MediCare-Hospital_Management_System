import React from 'react';
import { Header } from '../../../components';
import NewAppointmentTable from './NewAppointmentTable';

const AppointmentSection = () => {
  
  return (
    <div className="border shadow p-5 md:m-12 md:mt-4 md:p-10 bg-white rounded-3xl">
      <Header title="New Appointments"/>
       <NewAppointmentTable/>
    </div>
  );
};
export default AppointmentSection;