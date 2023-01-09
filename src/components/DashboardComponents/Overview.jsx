import React from 'react'
import {dropdownData } from "../../data/dummy";
import { useStateContext} from '../../contexts/ContextProvider';
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { LineChart } from "../../components";
const DropDown = ({ currentMode }) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
      <DropDownListComponent
        id="time"
        fields={{ text: "Time", value: "Id" }}
        style={{ border: "none", color: currentMode === "Dark" && "white" }}
        value="1"
        dataSource={dropdownData}
        popupHeight="220px"
        popupWidth="120px"
      />
    </div>
  );
export default function Overview() {
    const { currentColor, currentMode } = useStateContext();
  return (
    <div>
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
    </div>
  )
}
