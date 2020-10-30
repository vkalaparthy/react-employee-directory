import React, { Component } from "react";
import EmployeeTable from './components/EmployeesTable';
import Container from './components/Container';
import Title from './components/Title';
import employees from './employees.json';
// import './App.css';

class App extends Component {
  state = {
    employees
  }

  render() {
    return (
      <Container>
        <Title>Employees List</Title>
        <EmployeeTable
          employees={employees}
        />
      </Container>

    )
  }
}

export default App;
