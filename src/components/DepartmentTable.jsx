import { ColumnDirective, ColumnsDirective, GridComponent, Inject,Search, Page } from '@syncfusion/ej2-react-grids'
import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';
import DataManager from '@syncfusion/ej2-data';
import { employeesData, DepartmentsGrid } from '../data/dummy';
import { setActionData } from '@syncfusion/ej2/spreadsheet';

export default function DepartmentTable() {

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

  
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <GridComponent
    dataSource={DepartmentsList}
    width="auto"
    allowPaging
    allowSorting
    pageSettings={{ pageCount: 5 }}
    editSettings={editing}
    toolbar={toolbarOptions}
  >
    <ColumnsDirective>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {DepartmentsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
    </ColumnsDirective>
    <Inject services={[Search, Page]} />

  </GridComponent>
  )
}
