import React from 'react';

import { Header } from '../../../components';
import RegisterPatient from './RegisterPatient';

const RegisterPatientSection = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-3 md:m-8 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header  title="Patients Registration Form  "/>
       <RegisterPatient/>
    </div>
  );
};
export default RegisterPatientSection;