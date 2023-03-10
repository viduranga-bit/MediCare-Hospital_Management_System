import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  SparklineAreaData} from '../../../data/dummy';
import { SparkLine } from '../../../components';
import { useStateContext} from '../../../contexts/ContextProvider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function Appointment() {
   
    const [patients, setPatients] = useState([]);
  
  
    
    useEffect(() => {
      
      
      if ("user" in localStorage) {
      
        
        
        axios.get("http://localhost:8080/api/v1/patients").then(response => {

      
        const doctorPatient = response.data.filter(patient => patient.doc_id ==JSON.parse(localStorage.getItem("user")).userId);
        setPatients(doctorPatient);
        console.log(doctorPatient)
      })
      }
    }, []);

 
    const { currentColor, currentMode } = useStateContext();
    return (
      <div>
        <div className="border shadow p-5 mb-5 bg-white rounded bg-white dark:text-gray-300 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">


            <div className="justify-between items-center gap-2 mb-10">
                
        <p className="text-xl font-semibold p-3">Appointments</p>
             
              <div>
              <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Registration ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Patient Type</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientId}
              </TableCell>
              <TableCell align="right">{row.patientName}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.patientType}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
            </div>
            <div className="md:w-full overflow-auto">
            
            </div>
          </div>
      </div>
    )
}
