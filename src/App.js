import React,{useState} from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import EmployeeListPage from "./pages/EmployeeListPage/EmployeeListPage";
import CreateEmployeePage from "./pages/CreateEmployeePage/CreateEmployeePage";
import Header from "./components/Header/Header";

export default function App() {
  
  //employee state
  const [dataEmployees, setDataEmployees] = useState([])
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

