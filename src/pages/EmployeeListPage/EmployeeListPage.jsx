import React from 'react'
import './EmployeeListPage.scss'
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


// const data=[{id:1,
//             name: 'Mehmet',
//             lastName: 'Baran',
//             startDate: 1987,
//             department: "marketing",
//             dateOfBirth: "10/13/2021",
//             street:"qqq",
//             city:"ch",
//             state:"VA",
//             zipCode:"2" }]

/** display data in MaterialTable
 * @param  {array} {data}
 */
const EmployeeListPage = ({data}) => {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <div style={{ width:"1280px", marginBottom:"2em" }}>
                <MaterialTable columns={columns} data={data} title=""/>
            </div>
        </div>
    )
}

export default EmployeeListPage;