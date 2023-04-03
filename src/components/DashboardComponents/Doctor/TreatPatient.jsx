import React from "react";
import { useState, useEffect } from "react";
import { Header } from "../../../components";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControl from "@mui/joy/FormControl";
import Textarea from "@mui/joy/Textarea";
import LabrotaryRequestPopup from "./LabrotaryRequestPopup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../ExtraComponents/RoundedButton";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",

  padding: theme.spacing(5),
  textAlign: "center",
  borderWidth: "2px",
  boxShadow: "12px",
  color: theme.palette.text.secondary,
}));

export default function TreatPatient() {

 
  const [open, setOpen] = React.useState(false);
  const [isRequestTest, setIsRequestTest] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const patientId = new URLSearchParams(document.location.search).get("id");
 
  const [patientData, setPatientData] = useState([]);
  let navigate = useNavigate();
  const [docID,SetDocID] =useState([])

  useEffect(() => {
    loadPatients();

    if ("user" in localStorage){
      const docID = JSON.parse(localStorage.getItem("user")).userId;

       SetDocID(docID);
    }
  
  }, []);



  const loadPatients = async () => {
    const result = await axios
      .get(`http://localhost:8080/api/v1/patients/${patientId}`)
      .then((res) => {
        setPatientData(res.data);
        setIsRequestTest(res.data.isRequestTest)
      });
  };

  const [prescription, setPrescription] = useState({
    symptoms: "",
    case_history: "",
    medication: "",
    description: "",
  });
  const { symptoms, case_history, medication, description } = prescription;

  const onInputChange = (e) => { 
    setPrescription({ ...prescription, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/api/v1/prescription", prescription)
      .then((r) => {
        if (r.status === 200) {
          toast.success("Patient Treatment is Successfull", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          navigate(-1);
        } else {
          toast.error("Patient Treatment is Unsuccessfull", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });

    const res = await axios.patch(
      `http://localhost:8080/api/v1/patients/${patientId}`,
      { isTreated: true }
    );
    res.data.headers["Content-Type"];
  };

  return (
    <div>
      <div className="border shadow p-5 md:m-12 md:mt-4 md:p-10 bg-white rounded-3xl">
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Header title="Treat Patient - " value={patientData?.patientName} />
            <p className="ml-1  text-1xl align Right font-extrabold tracking-tight text-slate-700">
              Age : {patientData?.age} | Gender : {patientData?.gender}
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
                <Box
                  sx={{
                    "& .MuiTextField-root": { mt: 2 },
                  }}
                >
                  <p className=" mb-2 align Right font-extrabold  text-slate-700">
                    CAPTURE PATIENT'S SYMPTOMS
                  </p>

                  <div>
                    <FormControl
                      sx={{
                        mt: 2,
                      }}
                    >
                      <Textarea
                        value={symptoms}
                        name="symptoms"
                        onChange={(e) => onInputChange(e)}
                        placeholder="Enter Patient's Symptoms one by one Here....."
                        minRows={5}
                      />
                    </FormControl>
                    <p className=" mb-2 mt-8 align Right font-extrabold  text-slate-700">
                      PATIENT'S CASE HISTORY
                    </p>
                    <FormControl
                      sx={{
                        mt: 2,
                      }}
                    >
                      <Textarea
                        value={case_history}
                        name="case_history"
                        onChange={(e) => onInputChange(e)}
                        placeholder="Enter Patient's case history Here....."
                        minRows={5}
                      />
                    </FormControl>
                  </div>

                  <p className=" mt-7 mb-4 align Right font-extrabold  text-slate-700">
                    SEND PATIENT TO LABROTARY
                  </p>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      alignItems="center"
                      justifyContent="center"
                      xs={12}
                    >
                      <Item>
                        <p className="mt-3 mb-4  text-1xl align Right font-extrabold tracking-tight text-slate-600">
                          {isRequestTest
                            ? "Your Lab report Request has been Sent Successfully..."
                            : "Send the Patient to labrotary by clicking following button"}
                        </p>
                        <p className="mt-3 mb-4  text-1xl align Right font-extrabold tracking-tight text-slate-600">
                          {isRequestTest
                            ? "Please Wait For the Result"
                            : ""}
                        </p>
                        {!isRequestTest ?
                        <RoundedButton
                          onClick={handleClickOpen}
                          label="Send Request"
                        /> : ""}
                      </Item>
                      <p className=" mb-2 mt-8 align Right font-extrabold  text-slate-700">
                        ADD MEDICATIONS
                      </p>
                      <FormControl
                        sx={{
                          mt: 2,
                        }}
                      >
                        <Textarea
                          value={medication}
                          name="medication"
                          onChange={(e) => onInputChange(e)}
                          placeholder="Enter Patient's case history Here....."
                          minRows={5}
                        />
                      </FormControl>
                      <p className=" mb-2 mt-8 align Right font-extrabold  text-slate-700">
                        SPECIAL NOTES OR DESCIPTION
                      </p>
                      <FormControl
                        sx={{
                          mt: 2,
                        }}
                      >
                        <Textarea
                          value={description}
                          name="description"
                          onChange={(e) => onInputChange(e)}
                          placeholder="Add Sepcial Notes  Here....."
                          minRows={5}
                        />
                      </FormControl>

                      <p className=" mb-2 mt-8 align Right font-extrabold  text-slate-700">
                        IS THIS PATIENT NEED TO BE ADMITTED ?
                      </p>
                      <FormControl
                        sx={{
                          m: 3,
                        }}
                      >
                        <RadioGroup
                          defaultValue="female"
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            sx={{
                              m: 3,
                              mr: 4,
                            }}
                            value="INPATIENT"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="OUTPATIENT"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
                <Button
                  sx={{ alignItems: "center", m: 1, width: "22ch" }}
                  variant="contained"
                  size="medium"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>

      <ToastContainer />
      <LabrotaryRequestPopup
        pid={patientId}
        docID={docID}
        setOpen={setOpen}
        open={open}
        setIsRequestTest={setIsRequestTest}
      />
    </div>
  );
}
