import React from "react";
import EmployeesList from "../Lists/EmployeesList.js";
import "../css/CardPerson.css";
import "bootstrap/dist/css/bootstrap.css";
import BtnCreate from "../components/BtnCreate.js";

const Employees = () => {
  return (
    <>
      <BtnCreate text={"Empleado"}/>
      <div className="employees">
        <EmployeesList />
      </div>
    </>
  );
};

export default Employees;
