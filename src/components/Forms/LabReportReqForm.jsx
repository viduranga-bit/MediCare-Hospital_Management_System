import React, { useState,useEffect,useContext } from "react";
import { Button } from '@material-ui/core'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { ToastContainer , toast  } from 'react-toastify';

export default function LabReportReqForm(prop) {

 const patientId=prop.patID;
 const {open,setOpen, setIsRequestTest} = prop;
 const test ="sdcsdc"
    const btnStyle = { 
      marginTop: 10,
      left: "43%",
  
    }   
    const onSubmitReport = async (e) => {
    e.preventDefault(); 
     const res = await axios.patch(`http://localhost:8080/api/v1/patients/${patientId}`, { isRequestTest: true }).then((r) => {
      if (r.status === 200) {
        setIsRequestTest(true);
        setOpen(false);
        toast.success(`${test} report is Successfull`,{position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"});
     res.data.headers['Content-Type'];
      }});
  };
  return (
    
      <Box
        sx={{
          alignItems: 'center',
          "& .MuiTextField-root": { mt:3},
        }} 
      >
        <form onSubmit={(e) => onSubmitReport(e)}>
      
        <div>


<TextField
          sx={{ ml: 1, width: "57.5ch" }}
          id="filled-multiline-flexible"
          label="Test to be done"
          multiline
          required
          maxRows={6}
          variant="outlined"
          name="testToDone"  
          onChange={(e) => onInputChange(e)}
          defaultValue=""
        />

<TextField
          sx={{ ml:1, width: "57.5ch" }}
          id="filled-multiline-flexible"
          label="Lab technician"
          multiline
          required
          variant="outlined"
          name="labTechnician"  
        //value={description}
          onChange={(e) => onInputChange(e)}
          defaultValue=""
        />  

        <div >
 

      </div>
   </div>
  
  
                      <Button type='submit' style={btnStyle} variant='contained'
                             color='primary'>Submit</Button>
    </form>
    <ToastContainer/>
</Box>

  )
}
