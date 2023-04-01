import React, { useState, useEffect } from 'react';
import {recentTransactions,dropdownData } from "../../data/dummy";
import { useStateContext} from '../../contexts/ContextProvider';
import {Button} from "../../components";
import axios from 'axios';  
import FaceIcon from '@mui/icons-material/Face';
import Chip from '@mui/material/Chip';




export default function Data1() {
    const { currentColor, currentMode } = useStateContext();

    const [patients, setPatients] = useState([]);
    
    useEffect(() => {
      if ("user" in localStorage) {  
        axios.get("http://localhost:8080/api/v1/patients").then(response => {
        const doctorPatient = response.data.filter(patient => patient.doc_id ==JSON.parse(localStorage.getItem("user")).userId);
        setPatients(doctorPatient);
        
       
      })
      }
    },[]); 

    
    const  revpatients = patients.slice(patients.length-5,patients.length).reverse().filter((row)=>row.isRequestTest==1);
    const lenghtPatient = revpatients.length;
    
  return (
    <div>
        <div className="border shadow p-5 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Test Result Waiting Patients</p>
        
          </div>
          <div className="mt-10 w-72 md:w-400">
            {revpatients.map((item) => (
              <div key={item.patientName} className="flex justify-between mt-4">
                <div className="flex gap-3">
                
                    <Chip className="border shadow p-5" sx={{height:"50px"}}  label= {`PID: ${item.patientId}`} />
                  
                  <div>
                    <p className="text-md font-semibold">{item.patientName}</p>
                    <p className="text-sm text-green-600">{item.patientName}</p>
                  </div>
                </div>
                

             
              
               
               <Button
              
              color="white"
              bgColor={currentColor}
              text="Test Result"
              width="5"
              borderRadius="10px"
            
            /> 
            
                    
              </div>
              
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            

            <p className="text-gray-400 text-sm">{lenghtPatient} Test result Waiting Patients</p>
          </div>
        </div>
    </div>
  )
}
