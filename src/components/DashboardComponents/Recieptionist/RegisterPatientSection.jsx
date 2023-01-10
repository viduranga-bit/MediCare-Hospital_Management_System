import React from 'react';

import { Header } from '../../../components';
import RegisterPatient from './RegisterPatient';

const RegisterPatientSection = () => {
  
  return (
    <div className="m-3 md:m-8 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header  title="Patients Registration"/>
       <RegisterPatient/>
    </div>
  );
};
export default RegisterPatientSection;