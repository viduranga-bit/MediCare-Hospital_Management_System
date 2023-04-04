import React from 'react'
import Header from '../../Header'

import NewTestTable from './NewTestTable'

export default function TestSection() {
  return (
    <div>
        <div className="border shadow p-5 md:m-12 md:mt-4 md:p-10 bg-white rounded-3xl" style={{   justifyContent:'center'}}>
      <Header title="New Test Requests"/>
       <NewTestTable/>
    </div>
    </div>
  )
}
