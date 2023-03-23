import React from 'react'
import { useState, useEffect } from "react";
import { Header } from '../../../components';
import axios from "axios"; 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import toast, { Toaster } from "react-hot-toast";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import FormHelperText from '@mui/joy/FormHelperText';
import LabrotaryRequestPopup from './LabrotaryRequestPopup';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  
  padding: theme.spacing(5),
  textAlign: 'center',
  borderWidth:'2px',
  boxShadow:'12px',
  color: theme.palette.text.secondary,
}));

export default function TreatPatient() {

  const patientId = new URLSearchParams(document.location.search).get("id");
  
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const result = await axios
      .get(`http://localhost:8080/api/v1/patients/${patientId}`)
      .then((res) => {
        setPatientData(res.data);
      });
  };
  return (
    <div>
        <div className="border shadow p-5 md:m-12 md:mt-4 md:p-10 bg-white rounded-3xl">
      
      <Grid container spacing={2}>
  <Grid item xs={10}>
    <Header title="Treat Patient - "  value={patientData?.patientName}/>
    <p className="ml-1  text-1xl align Right font-extrabold tracking-tight text-slate-700">
      Age  : {patientData?.age}  | Gender : {patientData?.gender}
    </p>
  </Grid>
  <Grid item xs={2}>
    <p className="mt-3  text-1xl align Right font-extrabold tracking-tight text-slate-600">
      Patient ID : {patientData?.patientId}
    </p>
  </Grid>
  <Grid item xs={12}>
    
     
      <div>
      <form className="m-3  p-2 md:p-10 " onSubmit={(e) => onSubmit(e)}>

      <p  className=" mb-2 align Right font-extrabold  text-slate-700">CAPTURE PATIENT'S SYMPTOMS</p>
      <Box
        sx={{
          "& .MuiTextField-root": { mt:2 },
        }}
      >
        <div>
       
        <FormControl sx={{
            mt:2 
        }}>
    
      <Textarea placeholder="Enter Patient's Symptoms one by one Here....." minRows={5  } />
      
    </FormControl>

        </div>

        <p  className=" mt-5 align Right font-extrabold  text-slate-700">SEND PATIENT TO LABROTARY</p>
        <Grid container spacing={2}>
        <Grid item xs={6}>
   
    <p className="mt-2  text-1xl align Right font-extrabold tracking-tight text-slate-600">

      Please click following button for request labrotary services
    <LabrotaryRequestPopup/>
    </p>
  </Grid>
  <Grid   item
  container
  direction="row"
  alignItems="center"
  justifyContent="center" xs={6}>
  <p className="mt-3 text-1xl align Reft font-extrabold tracking-tight text-slate-600">
      Result Of the TEST
    </p>
    <Item><p className="mt-patient3  text-1xl align Right font-extrabold tracking-tight text-slate-600">
      Send the  labrotary by clicking following button
    </p>
    </Item>
  </Grid>
  </Grid>
      </Box>
      {/* <Button
        sx={{ alignItems: "center", m: 1, width: "22ch" }}
        variant="contained"
        size="medium"
        type="submit"
      >
        Submit
      </Button> */}
      <Toaster />
    </form>
        </div>
  
  </Grid>
        
</Grid>
       
    </div>

   
    </div>
  )
}
