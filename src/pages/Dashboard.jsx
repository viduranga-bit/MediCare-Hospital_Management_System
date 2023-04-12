import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import UsersCounts from '../components/DashboardComponents/UsersCounts';
import EarningChart from '../components/DashboardComponents/EarningChart';
import PieChart from '../components/DashboardComponents/PieChart';
import Data1 from '../components/DashboardComponents/Data1';
import Overview from '../components/DashboardComponents/Overview';
import WeeklyStat from "../components/DashboardComponents/WeeklyStat";
import Branding from "../components/DashboardComponents/Branding";
import LastComponent from "../components/DashboardComponents/LastComponent";
import Appointment from "../components/DashboardComponents/Doctor/Appointment";
import TreatedPatient from "../components/DashboardComponents/Doctor/TreatedPatient";
import TestSection from "../components/DashboardComponents/Laborotarist/TestSection";
import Spinner from "../components/ExtraComponents/Spinner";
import { HashLoader } from "react-spinners";
import ReportSubmissionOverview from "../components/DashboardComponents/Laborotarist/ReportSubmissionOverview";
import PharmacistListSection from "../components/DashboardComponents/Pharmacist/PharmacistListSection"
const Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();
 

  const [roleName, setRoleName] = useState();
  const getRole = JSON.parse(localStorage.getItem('user'));

  useEffect(()=>{
    setRoleName(getRole);
  },[])



  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {roleName?.role ? (
        <div className="mt-13">
          <UsersCounts />
          <div className="flex gap-10 flex-wrap justify-center">
            {roleName?.role == "ADMIN" ? (
              <div className="bg- white dark:text-gray-400 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
                {" "}
              </div>
            ) : (
              ""
            )}

            <div>
              {roleName?.role == "ADMIN" ? <EarningChart /> : ""}
              {roleName?.role == "ADMIN" ? <PieChart /> : ""}
            </div>
          </div>
          {roleName?.role == "DOCTOR" ? (
            <div className="flex gap-10 m-4 flex-wrap justify-center">
              {" "}
              <Appointment /> <Data1 />
            </div>
          ) : (
            ""
          )}

          {roleName?.role == "DOCTOR" ? (
            <div className="flex gap-10 m-4 flex-wrap justify-center">
              <TreatedPatient />
              <Overview />
            </div>
          ) : (
            ""
          )}

          {roleName?.role == "LABORARIST" ? (
            <div className="flex  m-4 flex-wrap justify-center">
              <TestSection />
              <ReportSubmissionOverview />
            </div>
          ) : (
            ""
          )}

          {roleName?.role == "RECIEPTIONIST" ? (
            <div className="flex m-3 flex-wrap justify-center">
              <Overview />
              <LastComponent />
            </div>
          ) : (
            ""
          )}

          {roleName?.role == "PHARMACIST" ? (
            <div className="flex m-3 flex-wrap justify-center">
              <PharmacistListSection />
              <LastComponent />
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <p className="flex gap-10 m-4 flex-wrap justify-center">
          <HashLoader color={currentColor} />
        </p>
      )}
    </>
  );
};

export default Dashboard;
