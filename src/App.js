import React,{useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
 
  Doctor,
  Calendar,
  Departments,
  Stacked,
  Pyramid,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Editor,

} from "./pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import Patient from "./pages/Patient";
import Nurse from "./pages/Nurse";
import Pharmacist from "./pages/Pharmacist";
import Laborotaries from "./pages/Laborotaries";
import Recieptionist from "./pages/Recieptionist";
import Accountant from "./pages/Accountant";
import Login from "./pages/Login/Login";
import Main from "./Main";
import Dashboard  from "./pages/Dashboard";
import RegisterPatientSection from "./components/DashboardComponents/Recieptionist/RegisterPatientSection";
import PrintAdmissionCard from "./components/DashboardComponents/Recieptionist/PrintAdmissionCard";
import Appointment from "./components/DashboardComponents/Doctor/Appointment";
import Medicine from "./pages/Medicine";
import TreatPatient from "./components/DashboardComponents/Doctor/TreatPatient";

const App = () => {
  const {
    currentMode
  } = useStateContext();

  useEffect(() => {
    console.log("Check loggin******************");
    if ("token" in localStorage) {
      const token = localStorage.getItem("token");
      //token validation
     
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          {/* dashboard  */}
          <Route path="/login" element={<Login />} />
            <Route      element={<Main/>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/department" element={<Departments />} />
            <Route path="/patient" element={<Patient />} />
            <Route path="/nurse" element={<Nurse />} />
            <Route path="/pharmacist" element={<Pharmacist />} />
            <Route path="/laboratorist" element={<Laborotaries />} />
            <Route path="/accountant" element={<Accountant />} />
            <Route path="/recieptionist" element={<Recieptionist />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            
            {/*Recieptionist routs*/}
            <Route path="/registerPatient" element={<RegisterPatientSection />} />
            <Route path="/printPatientDetails" element={<PrintAdmissionCard/>}/>

            {/*Doctor routs*/}
            <Route path="/appointments" element={<Appointment/>} />  
            <Route path="/treatPatient" element={<TreatPatient/>} />  

            {/* charts  */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} /> 
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
