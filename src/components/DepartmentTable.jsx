import { ColumnDirective, ColumnsDirective, GridComponent, Inject,Search, Page } from '@syncfusion/ej2-react-grids'
import React from 'react'

import { employeesData, DepartmentsGrid } from '../data/dummy';

export default function DepartmentTable() {
  
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <GridComponent
    dataSource={employeesData}
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
