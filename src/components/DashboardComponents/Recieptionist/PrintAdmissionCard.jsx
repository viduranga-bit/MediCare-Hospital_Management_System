import React from 'react';

import { Header } from '../../../components';
import Data1 from '../Data1';


const PrintAdmissionCard = () => {
  
  return (
    <div className="m-3 md:m-8 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header  title="Patients Details"/>
       <Data1/>
    </div>
  );
};
export default PrintAdmissionCard;