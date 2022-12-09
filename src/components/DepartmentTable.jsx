import {GridComponent, CommandColumn,ColumnsDirective, ColumnDirective, Page, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';
import DataManager from '@syncfusion/ej2-data';
import { employeesData, DepartmentsGrid } from '../data/dummy';


export default function DepartmentTable() {
  
  const commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
        { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
        { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
        { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];

  const [DepartmentsList,setDepartments] = useState([]);

  useEffect( () => {
    loadDepartments();
  },[]);

  const loadDepartments = async () => {
    const result =await axios.get("http://localhost:8080/api/v1/departments")
    .then((res)=>{
      console.log(res.data)
      setDepartments(res.data);
    })
  }


  const editing = { allowDeleting: true, allowEditing: true };
  

  return (
    
   
    <GridComponent
    id='gridcomp'
    dataSource={DepartmentsList}
    enableHover={false}
    allowPaging
    allowSorting
    pageSettings={{ pageCount: 5 }}
  
  
  >
    <ColumnsDirective>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ColumnDirective field='deptId' headerText='Deprtment ID' width='30'  textAlign='Center'></ColumnDirective>
      <ColumnDirective field='deptName' headerText='Deprtment Name' width='60'  textAlign='Center'></ColumnDirective>
      <ColumnDirective field='description' headerText='Description' width='100'  textAlign='Center'></ColumnDirective>
      <ColumnDirective  headerText='Options' commands={commands}  width='30'  textAlign='Center'></ColumnDirective>
    </ColumnsDirective>
    <Inject services={[Page, CommandColumn, Toolbar, Edit, Sort, Filter]} />

  </GridComponent>

  )
}
