import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import "dayjs/locale/de";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';


export default function RegisterPatient() {
  
  const [patient, setPatient] = useState({
    patientName: "",
    phone: "",
    dob: "",
    email: "",
    address: "",
    specialNote: "",
    city: "",
    admitDate: "",
    nic: "",
    bloodGroup: "",
    patientType:""
  });
  const {
    patientName,
    phone,
    email,
    address,
    dob,
    city,
    admitDate,
    nic,
    bloodGroup,
    patientType,
    specialNote,
  } = patient;

  const onInputChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
 
   
       
    }


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/patients", patient);
    toast.success('Successfully Registered Patient!',{

        position : "top-right"
    })

  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Box
        sx={{
          alignItems: "center",
          "& .MuiTextField-root": { m: 3   },
        }}
      >
        <div>
          <TextField
            sx={{ m: 1, width: "55ch" }}
            id="outlined-disabled"
            name="patientName"
            value={patientName}
            onChange={(e) => onInputChange(e)}
            label="Patient Name"
            defaultValue=""
            required
          />

          <TextField
            label="Date Of Birth"
            required
            sx={{ m: 1, width: "55ch" }}
            type="date"
            id="outlined-uncontrolled"
            name="dob"
            value={dob}
            onChange={(e) => onInputChange(e)}
            focused
          />

          <TextField
            sx={{ m: 1, width: "55ch" }}
            type="phone"
            id="outlined-disabled"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
            label="Contact Number"
            defaultValue=""
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TextField
              label="Admission Date"
              required
              sx={{ m: 1, width: "55ch" }}
              type="date"
              id="outlined-disabled"
              name="admitDate"
              value={admitDate}
              onChange={(e) => onInputChange(e)}
              focused
            />
          </LocalizationProvider>
          <TextField
            sx={{ m: 1, width: "55ch" }}
            required
            id="outlined-disabled"
            name="address"
            value={address}
            onChange={(e) => onInputChange(e)}
            label="Living Address"
            defaultValue=""
          />

          <TextField
            sx={{ m: 1, width: "55ch" }}
            required
            id="outlined-disabled"
            name="city"
            value={city}
            onChange={(e) => onInputChange(e)}
            label="Home City"
            defaultValue=""
          />

          <TextField
            sx={{ m: 1, width: "55ch" }}
            required
            id="outlined-disabled"
            name="nic"
            value={nic}
            onChange={(e) => onInputChange(e)}
            label="NIC"
            defaultValue=""
          />
           <FormControl sx={{ m: 3, width: "55ch" }}>
            <InputLabel >Blood Group</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="bloodGroup"
              value={bloodGroup}
              label="Blood Group"
              onChange={(e) => onInputChange(e)}
            >
              <MenuItem value={"A+"}>A+</MenuItem>
              <MenuItem value={"A-"}>A-</MenuItem>
              <MenuItem value={"B+"}>B+</MenuItem>
              <MenuItem value={"B-"}>B-</MenuItem>
              <MenuItem value={"O+"}>O+</MenuItem>
              <MenuItem value={"O-"}>O-</MenuItem>
              <MenuItem value={"AB+"}>AB+</MenuItem>
              <MenuItem value={"AB-"}>AB-</MenuItem>
            </Select>
          </FormControl>


          <FormControl sx={{ m: 3, width: "55ch" }}>
            <InputLabel >Patient Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="patientType"
              value={patientType}
              label="Patient Type"
              onChange={(e) => onInputChange(e)}
            >
              <MenuItem value={"INPATIENT"}>In Patient</MenuItem>
              <MenuItem value={"OUTPATIENT"}>Out Patient</MenuItem>
             
            </Select>
          </FormControl>
        
          <TextField
            sx={{ m: 1, width: "55ch" }}
            id="outlined-disabled"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            label="Email Address"
            defaultValue=""
          />

         
        </div>
      </Box>
      <Button
        sx={{ alignItems: "center", m: 3, width: "42ch" }}
        variant="contained"
        size="medium"
        type="submit"
      >
        Register Patient
      </Button>
      <Toaster />
  
    </form>
  );

    }