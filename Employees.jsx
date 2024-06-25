import React, { useState, useEffect } from "react";
import { getEmployees } from "./services/api";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const employees = await getEmployees();
      setEmployees(employees);
    }
    fetchEmployees();
  }, []);

  return (
    <div className="employees">
      <h2>Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
