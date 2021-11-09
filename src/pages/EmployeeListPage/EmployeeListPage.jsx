import React from 'react'
import './EmployeeListPage.scss'
import { Link } from 'react-router-dom'
import MaterialTable from "@material-table/core";

const columns= [
        { title: 'First Name', field: 'firstName' },
        { title: 'Last Name', field: 'lastName' },
        { title: 'Start Date', field: 'startDate' },
        { title: 'Department', field: 'department' },
        { title: 'Date of Birth', field: 'dateOfBirth' },
        { title: 'Street', field: 'street' },
        { title: 'City', field: 'city' },
        { title: 'State', field: 'state' },
        { title: 'Zip Code', field: 'zipCode' },
]

//const data=[{id:1, name: 'Mehmet', lastName: 'Baran', startDate: 1987, department: "marketing",dateOfBirth: "10/13/2021", street:"qqq", city:"ch",state:"VA",zipCode:"zz" }]

const EmployeeListPage = ({data}) => {
    console.log(data)
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <Link className="homeLink" to="/">Home</Link>
            <div style={{ width:"1024px", marginBottom:"2em" }}>
                <MaterialTable
                    columns={columns}
                    data={data}
                    title=""
                />
            </div>
        </div>
    )
}

export default EmployeeListPage;