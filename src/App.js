import React,{useState} from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import EmployeeListPage from "./pages/EmployeeListPage/EmployeeListPage";
import CreateEmployeePage from "./pages/CreateEmployeePage/CreateEmployeePage";
import Header from "./components/Header/Header";
import './App.css'
export default function App() {
  
  //employee state
  const [dataEmployees, setDataEmployees] = useState([{id:1,
                firstName: 'Jean',
                lastName: 'Michel',
                startDate: '1/1/2010',
                department: "Marketing",
                dateOfBirth: "1/1/1990",
                street:"qqq",
                city:"ch",
                state:"VA",
                zipCode:"2"}])
  const addEmployee = (newEmployee) => {
    setDataEmployees([...dataEmployees, { ...newEmployee }]);
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <CreateEmployeePage addEmployee={addEmployee} />
        </Route>
        <Route path="/list" >
          <EmployeeListPage data={dataEmployees} />
        </Route>
      </Switch>
    </Router>
  );
}

