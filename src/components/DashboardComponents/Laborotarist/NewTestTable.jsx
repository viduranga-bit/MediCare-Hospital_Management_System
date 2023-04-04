import React from 'react'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useState, useEffect} from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const columns = [
  { id: "labReport_Id", label: "Report Id",align: "center", maxWidth: 20 },

  
  {
    id: "reportName",
    label: "Report Name",
    width:40,
    align: "center",
    
  },
  {
    id: "patient_id",
    label: "Patient ID",
    maxWidth:20,
    align: "center",
    
  },
  {
    id: "doc_id",
    label: "Doctor ID",
    maxWidth:20,
    align: "center",
    
  },
  {
    id: "submitTime",
    label: "Request Time",
    maxWidth:20,
    align: "center",
    
    
  },
  
];

export default function NewTestTable() {

  const [labReport, setLabReport] = useState([]);

  useEffect(() => {
    loadLabReport();
  }, []);

  const loadLabReport = async () => {
    const result = await axios
      .get("http://localhost:8080/api/v1/labReport")
      .then((res) => {
        setLabReport(res.data);
      });
  };
  let navigate = useNavigate();
  const submitReportFunc = (patientId) =>{
    navigate(`/submitReport?id=${patientId}`)

 }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell style={{textAlign:'center'}}>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {labReport.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                    <Button color="success" variant="contained"   onClick={(e)=>submitReportFunc(row.patient_id)} >
            Submit Result
            </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={labReport.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      
    </Paper>
    
  );
}
