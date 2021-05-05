import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import TableHead from "./components/TableHead";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    }
  }

  sortLastName() {
    let employees = this.state.employees.sort();
    console.log("sort last name");
    this.setState({
      employees: [...employees]
    })
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10")
    .then(response => {
      console.log(response.data.results);
      this.setState({
        employees: response.data.results
      })
    })
  }

  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        <Container>
          <Table responsive>
            <TableHead sortLastName={this.sortLastName.bind(this)} />
            <tbody>
            {this.state.employees.map((employee, index) => (
              <EmployeeCard
                key={index}
                index={index}
                firstName={employee.name.first}
                lastName={employee.name.last}
                image={employee.picture.thumbnail}
                location={employee.location.city}
                email={employee.email}
                cell={employee.cell}
              />
            ))}
            </tbody>
          </Table>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
