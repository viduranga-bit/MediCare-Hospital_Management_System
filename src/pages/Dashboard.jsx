import React from "react";
import axios from "axios";
import { useNavigate,useLocation} from "react-router-dom";

import { useState, useEffect } from "react";

import { useStateContext } from "../contexts/ContextProvider";

import { Calendar } from ".";
import UsersCounts from "../components/DashboardComponents/UsersCounts";
import EarningChart from "../components/DashboardComponents/EarningChart";
import PieChart from "../components/DashboardComponents/PieChart";
import Data1 from "../components/DashboardComponents/Data1";
import Overview from "../components/DashboardComponents/Overview";
import WeeklyStat from "../components/DashboardComponents/WeeklyStat";
import Branding from "../components/DashboardComponents/Branding";
import LastComponent from "../components/DashboardComponents/LastComponent";
import RegisterPatient from "../components/DashboardComponents/Recieptionist/RegisterPatient";

const Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();
  const [DepartmentsList, setDepartments] = useState([]);
  const location = useLocation();


  const [roleName, setRoleName] = useState();
  
  useEffect(() => {
    if ("user" in localStorage) {
      
      setRoleName(JSON.parse(localStorage.getItem("user")));
    
    }
  },[location]);

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    const result = await axios
      .get("http://localhost:8080/api/v1/departments")
      .then((res) => {
        console.log(res.data);
        setDepartments(res.data);
        
      });
  };



  return (
    
    <div className="mt-13">
      


      <UsersCounts />
      <div className="flex gap-10 flex-wrap justify-center">
        
        {roleName?.role=="ADMIN" ? <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  "> <Calendar />  </div>: ""}
          
        <div>
          {roleName?.role=="ADMIN" ?<EarningChart />: ""}
          {roleName?.role=="ADMIN" ? <PieChart />: ""}
         
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <Data1 />
        <Overview />
      </div>

      <div className="flex flex-wrap justify-center">
        <WeeklyStat />
        <Branding />
        <LastComponent />
      </div>
    </div>

  );
};

export default Dashboard;
