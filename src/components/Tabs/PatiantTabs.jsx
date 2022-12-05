import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PatientsTable from '../PatientsTable';
import EditPatientForm from '../Forms/EditPatientFrom';
import AddPatientForm from '../Forms/AddPatient';


export default function PatiantTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Patient List" value="1" />
            <Tab label="Add Patients" value="2" />
            <Tab label="Edit Patient" value="3" />
           
          </TabList>
        </Box>
        * <TabPanel value="1">  <PatientsTable/>  </TabPanel>
        <TabPanel value="2"><AddPatientForm/></TabPanel>
        <TabPanel value="3"><EditPatientForm/></TabPanel> 
        
      </TabContext>
    </Box>
  );
}
