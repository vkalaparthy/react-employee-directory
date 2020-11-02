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

  // Sort the employees by first name
  sortByFirstName = () => {

    console.log("In sort By first Name");

    let emps = this.state.employees;
    // emps.sort(sortByProperty("firstName"));

    emps.sort(function (a, b) {
      return a.firstName.localeCompare(b.firstName);
    })
    // emps.sort();
    console.log(emps);
    this.setState({ employees: emps });
  };

  // Sort the employees by last name
  sortByLastName  = () => {
    console.log("In sort By Last Name");

    let emps = this.state.employees;

    emps.sort(function (a, b) {
      return a.lastName.localeCompare(b.lastName);
    })
    // emps.sort();
    console.log(emps);
    this.setState({ employees: emps });
  };

  // Show single employee
  showOnly = (id) => {
    console.log("In showOnly id=" + id);
    const employee = this.state.employees.filter(emp => emp.id === id);
    console.log(employee);
    this.setState({ employees: employee });
    console.log(this.state.employees);
  };

  render() {
    return (
      <Container>
        <Title>Employees List</Title>
        <EmployeeTable
          employees={employees}
          sortByFirstName={this.sortByFirstName}
          sortByLastName={this.sortByLastName}
          showOnly={this.showOnly}
        />
      </Container>

    )
  }
}

export default App;
