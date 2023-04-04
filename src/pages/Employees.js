import React from 'react'
import EmployeesList from '../Lists/EmployeesList.js';
import '../css/Employees.css';
import 'bootstrap/dist/css/bootstrap.css';

const Employees = () => {
  return (
    <div className='employees'>
      <div className='container'>
        <EmployeesList/>
      </div>
    </div>
  )
}

export default Employees