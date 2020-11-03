import React, { Component } from "react";
import EmployeeTable from './components/EmployeesTable';
import Container from './components/Container';
import Title from './components/Title';
import ShowCard from './components/ShowCard';
import employees from './employees.json';
// import './App.css';

class App extends Component {
  state = {
    show: false,
    empid: 0,
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
  // showOnly = (id) => {
  //   console.log("In showOnly id=" + id);
  //   const employee = this.state.employees.filter(emp => emp.id === id);
  //   console.log(employee);
  //   this.setState({ employees: employee });
  //   console.log(this.state.employees);
  // };

  showCard = (id) => {
    console.log(id);
    // this.setState({ show: !this.state.show });
    this.setState({ show: true });
    //console.log("made the state true");
    console.log(this.state.show);
    // const employee = this.state.employees.filter(emp => emp.id === id);
    this.setState({ empid: id });
    console.log(this.state.empid);
  };

  closeCard = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Container>
        <Title>Employees List</Title>
        {!this.state.show && (
          <EmployeeTable
            employees={this.state.employees}
            sortByFirstName={this.sortByFirstName}
            sortByLastName={this.sortByLastName}
            showCard={this.showCard}
          />
        )}
        {this.state.show && (
          <ShowCard
            emp={this.state.employees.filter(emp => emp.id === this.state.empid)}
            closeCard={this.closeCard}
          />
        )}
      </Container>

    )
  }
}

export default App;
