import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Ecommerce,
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
import Accountant from "./pages/Accountant";
import Login from "./pages/Login/Login";
import Main from "./Main";

const App = () => {
  const {
    currentMode
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          {/* dashboard  */}
          <Route path="/login" element={<Login />} />
          <Route element={<Main />}>
            <Route path="/" element={<Ecommerce />} />
            <Route path="/Doctor" element={<Doctor />} />
            <Route path="/Departments" element={<Departments />} />
            <Route path="/Patients" element={<Patient />} />
            <Route path="/Nurse" element={<Nurse />} />
            <Route path="/Pharmacist" element={<Pharmacist />} />
            <Route path="/Laboratorist" element={<Laborotaries />} />
            <Route path="/Accountant" element={<Accountant />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />

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
