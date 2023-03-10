import React from 'react'
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import axios from "axios";
import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const columns = [

    { id: "medicineId",
     label: "#ID",
     align: "center",
     maxWidth: 20 },
  
    {
      id: "medicineName",
      label: "Drug Name",
      align: "center",
      minWidth:20
      
    },
    {
      id: "Date Added",
      label: "dateAdded",
      maxWidth:20,
      align: "center",
      
    },
    {
      id: "ManufacturingCompany",
      label: "Manfactured By",
      maxWidth:20,
      align: "center",
      
    },
    {
      id: "price",
      label: "Price",
      maxWidth:20,
      align: "center",
      
    },
    {
        id: "sellingPrice",
        label: "selling Price",
        maxWidth:20,
        align: "center",
        
      },
    {
      id: "description",
      label: "Description",
      maxWidth:20,
      align: "center",
      
    },


    {
        id: "currentQuantity",
        label: "Current Quantity",
        maxWidth:20,
        align: "center",
        
      },
    {
      id: "status",
      label: "Status",
      maxWidth:20,
      align: "center",
      
    }
  ];
 
export default function Medicine() {
    const [search , setSearch] = useState([]);
    const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    LoadMedicine();
  }, []);

  const LoadMedicine = async () => {
    const result = await axios
      .get("http://localhost:8080/api/v1/medicine")
      .then((res) => {
        setMedicine(res.data);
      });
  };

  async function deleteLaborarist(did) {
    const result = await axios
      .delete(`http://localhost:8080/api/v1/users/delete/${did}`)
      .then((res) => {
        //console.log(res.data);
        loadLaborarist();
      });
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
    
    
  
    <div  className="border border-warning shadow-lg p-3 mb-5 bg-white rounded  m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

        
    <Box sx={{ width: '100%', typography: 'body1'}}>

  
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
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
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medicine.map((row) => {
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
                    <EditIcon />
                    <DeleteIcon onClick={()=>deleteLaborarist(row.id)}/>
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
        count={medicine.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      
    </Paper>
    </Box>
    </div>


    
  )
}
