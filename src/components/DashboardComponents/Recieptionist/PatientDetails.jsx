import React from "react";
import { useState,useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function PatientDetails() {
const patientId = new URLSearchParams(document.location.search).get("id");

  const[patientData,setPatientData] = useState([]);

  useEffect(()=>{
     loadPatients();
  },[])

  const loadPatients =async () => {
    const result =await axios
    .get(`http://localhost:8080/api/v1/patients/${patientId}`).then((res)=>{

     setPatientData(res.data);
    })

    }


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            <Item>
              <div className="md:p-8   ">

              <Typography
                  sx={{ fontWeight: "bold"}}
                  variant="body1"
                  gutterBottom
                >
                  Patient ID Number : {patientData?.patientId}
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold"}}
                  variant="body1"
                  gutterBottom
                >
                  Patient Name :
                </Typography>

                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  gutterBottom
                >
                  Date Of Birth :
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  gutterBottom
                >
                  NIC :
                </Typography>

                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  gutterBottom
                >
                  Gender :
                </Typography>

                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  gutterBottom
                >
                  Patient Type :
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  gutterBottom
                >
                  Admission Date :
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  gutterBottom
                >
                  Blood Group :
                </Typography>

                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  gutterBottom
                >
                  Contact Number :
                </Typography>

                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  gutterBottom
                >
                  Address    :
                </Typography>

                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  gutterBottom
                >
                  Home City    :
                </Typography>

                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  gutterBottom
                >
                  Email Address    :
                </Typography>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
