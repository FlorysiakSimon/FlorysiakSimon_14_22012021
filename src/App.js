import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import EmployeeListPage from "./pages/EmployeeListPage/EmployeeListPage";
import CreateEmployeePage from "./pages/CreateEmployeePage/CreateEmployeePage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CreateEmployeePage}/>
        <Route path="/list" component={EmployeeListPage}/>
      </Switch>
    </Router>
  );
}

