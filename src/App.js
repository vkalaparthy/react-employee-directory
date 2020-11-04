import React, { Component } from "react";
import EmployeeTable from './components/EmployeesTable';
import Container from './components/Container';
import Title from './components/Title';
import ShowCard from './components/ShowCard';
import employees from './employees.json';

class App extends Component {
  state = {
    show: false,
    empid: 0,
    employees,
    roles: []
  }

  componentDidMount() {
    let roleArray = [];
    this.state.employees.forEach(emp => {
      roleArray.push(emp.role);
    });
    this.setState({ roles: [...new Set(roleArray)]});
  }

  // Sort the employees by first name
  sortByFirstNameAscend = () => {
    // console.log("In sort By first Name");

    let emps = this.state.employees;
    // emps.sort(sortByProperty("firstName"));

    emps.sort(function (a, b) {
      return a.firstName.localeCompare(b.firstName);
    })
    // emps.sort();
    console.log(emps);
    this.setState({ employees: emps });
  };

  sortByFirstNameDesc = () => {
    // console.log("In sort By first Name");

    let emps = this.state.employees;
    // emps.sort(sortByProperty("firstName"));

    emps.sort(function (a, b) {
      return b.firstName.localeCompare(a.firstName);
    })
    // emps.sort();
    console.log(emps);
    this.setState({ employees: emps });
  };

  // Sort the employees by last name
  sortByLastNameAscend  = () => {

    let emps = this.state.employees;

    emps.sort(function (a, b) {
      return a.lastName.localeCompare(b.lastName);
    })
    this.setState({ employees: emps });
  };

  sortByLastNameDesc  = () => {

    let emps = this.state.employees;

    emps.sort(function (a, b) {
      return b.lastName.localeCompare(a.lastName);
    })
    this.setState({ employees: emps });
  };

  sortById = () => {
    // console.log("In sortById");
    let emps = this.state.employees;

    emps.sort(function (a, b) {
      return a.id.localeCompare(b.id);
    })
    this.setState({ employees: emps });
  };

  showCard = (id) => {
    // console.log(id);
    // this.setState({ show: !this.state.show });
    this.setState({ show: true });
    this.setState({ empid: id });
  };

  closeCard = () => {
    this.setState({ show: false });
  };

  showOnlyOfRole = (value) => {
    // console.log("Show only Role based: " + value);
    let allEmployees = employees;
    this.setState({ employees: allEmployees });
    if ( value !== "All" ) {
      const newEmpList = allEmployees.filter(emp => emp.role === value);
      this.setState({ employees: newEmpList });
    }
  };

  render() {
    return (
      <Container>
        <Title>Employee Directory</Title>
        {!this.state.show && (
          <EmployeeTable
            employees={this.state.employees}
            roles={this.state.roles}
            sortByFirstNameAscend={this.sortByFirstNameAscend}
            sortByFirstNameDesc={this.sortByFirstNameDesc}
            sortByLastNameAscend={this.sortByLastNameAscend}
            sortByLastNameDesc={this.sortByLastNameDesc}
            showOnlyOfRole={this.showOnlyOfRole}
            sortById={this.sortById}
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
