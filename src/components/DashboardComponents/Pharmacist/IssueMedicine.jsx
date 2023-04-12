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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../ExtraComponents/RoundedButton";
import { HashLoader } from "react-spinners";
import { useStateContext } from "../../../contexts/ContextProvider";
import Autosuggest from "react-autosuggest";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { red } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({


 
  borderWidth: "1px",
  boxShadow: "1px",
  
}));

export default function IssueMedicine() {
  const [open, setOpen] = React.useState(false);
  const [isRequestTest, setIsRequestTest] = React.useState(false);
  const [isSubmitReport, setIsSubmitReport] = React.useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const { currentColor, currentMode } = useStateContext();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const patientId = new URLSearchParams(document.location.search).get("id");

  const [patientData, setPatientData] = useState([]);
  const [prescriptionData, setPrescriptionData] = useState([]);
  let navigate = useNavigate();

  const filteredReports = prescriptionData.filter(
    (report) => report.patient_id == patientId
  );
  const descriptions = [filteredReports[0]?.description];

  const DescriptionString = descriptions.join("\n");

  const medicineList = [filteredReports[0]?.medication];

  const medicineListnString = descriptions.join("\n");



  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const handleMedicineChange = (event, newValue) => {
    event.preventDefault();
    setSelectedMedicine(newValue);
  };

  const loadPatients = async () => {
    const result = await axios
      .get(`http://localhost:8080/api/v1/patients/${patientId}`)
      .then((res) => {
        setPatientData(res.data);
        setIsRequestTest(res.data.isRequestTest);
        setIsSubmitReport(res.data.isSubmitReport);
      });
  };

  const loadPrescription = async () => {
    const result = await axios
      .get("http://localhost:8080/api/v1/prescription/get-prescription-details")
      .then((res) => {
        setPrescriptionData(res.data);
      });
  };

  const [prescription, setPrescription] = useState({
    symptoms: "",
    case_history: "",
    medication: "",
    description: "",
    patient_id: patientId,
    doc_id: "",
  });
  const { symptoms, case_history, medication, description, patient_id } =
    prescription;

  const availableQty = null;
  const onInputChange = (e) => {
    setPrescription({ ...prescription, [e.target.name]: e.target.value });
  };

  const [Medicine, setMedicine] = useState("");

  const loadMedicine = async () => {
    const result = await axios
      .get("http://localhost:8080/api/v1/medicine")
      .then((res) => {
        const medicines = res.data;
        setMedicine(medicines);
      });
  };

  useEffect(() => {
    loadMedicine();
    loadPatients();
    loadPrescription();
  }, []);

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

    // const res = await axios.patch(
    //   `http://localhost:8080/api/v1/patients/${patientId}`,
    //   { isTreated: true }
    // );
  };

  return (
    <div>
      <div className="border shadow p-5 md:m-12 md:mt-4 md:p-10 bg-white rounded-3xl">
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Header
              title="Issue Medicine Patient - "
              value={patientData?.patientName}
            />
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
                  <p className=" mb-2 mt-8 align Right font-extrabold  text-slate-700">
                    SPECIAL NOTES FORM DOCTOR
                  </p>

                  <Card variant="outlined">
                    <div>
                      {DescriptionString.split("\n").map((line, index) => (
                        <p
                          className="m-5 ml-10  text-1xl align Right font-extrabold tracking-tight text-slate-500"
                          key={index}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </Card>

                  <p className=" mb-2 mt-8  align Right font-extrabold  text-slate-700">
                    PRESCRIPTED MEDICINE LIST
                  </p>
                  <Card variant="outlined">
                    <div>
                      {medicineListnString.split("\n").map((line, index) => (
                        <p
                          className="m-5 ml-10  text-1xl align Right font-extrabold tracking-tight text-slate-500"
                          key={index}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </Card>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      alignItems="center"
                      justifyContent="center"
                      xs={12}
                    >
                      <p className=" mb-2 mt-8 align Right font-extrabold  text-slate-700">
                        ISSUE MEDICATIONS
                      </p>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Item>
                              <div className="card" style={{ width: "100%" }}>
                                <FormControl
                                  sx={{
                                    mt: 5,
                                    ml: 5,
                                    mr: 5,
                                    mb: 2,
                                  }}
                                >
                                  <Autocomplete
                                    id="Select Medicine"
                                    options={Medicine}
                                    autoHighlight
                                    getOptionLabel={(option) =>
                                      `${option.itemCode} ${option.medicineName}`
                                    }
                                    renderOption={(props, option) => (
                                      <Box component="li" {...props}>
                                        {option.medicineName}
                                      </Box>
                                    )}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        label="Choose a Medicine"
                                        inputProps={{
                                          ...params.inputProps,
                                          autoComplete: "true",
                                        }}
                                      />
                                    )}
                                    value={selectedMedicine}
                                    onChange={handleMedicineChange}
                                  />
                                  {selectedMedicine && (
                                    <>
                                      {selectedMedicine.currentQuantity != 0 ? (
                                        <h1 className="ml-1 text-slate-700">
                                          Available Quantity:{" "}
                                          {selectedMedicine.currentQuantity}
                                        </h1>
                                      ) : (
                                        <p
                                          style={{ color: "#ff0000" }}
                                          className="ml-1 text-slate-700 "
                                        >
                                          No Available Quantity
                                        </p>
                                      )}
                                    </>
                                  )}
                                </FormControl>

                                <FormControl
                                  sx={{
                                    mt: 2,
                                    ml: 5,
                                    mr: 5,
                                    mb: 5,
                                  }}
                                >
                                  {selectedMedicine?.currentQuantity != 0 ? (
                                    <Textarea
                                      required
                                      value={medication}
                                      name="medication"
                                      onChange={(e) => onInputChange(e)}
                                      placeholder="Enter Quantity Here"
                                      minRows={1}
                                    />
                                  ) : (
                                    <Textarea
                                      required
                                      value={medication}
                                      name="medication"
                                      onChange={(e) => onInputChange(e)}
                                      placeholder="Enter Quantity Here"
                                      minRows={1}
                                      disabled
                                    />
                                  )}
                                </FormControl>
                              </div>
                            </Item>
                          </Grid>
                          <Grid item xs={6}>
                            <Item>xs=4</Item>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Button
                  sx={{ alignItems: "center", mt: 5, width: "22ch" }}
                  variant="contained"
                  size="medium"
                  type="submit"
                >
                  Mark As Done
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>

      <ToastContainer />
    </div>
  );
}
