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

/** display data in MaterialTable
 * @param  {object} {data}
 */
const EmployeeListPage = ({data}) => {
    return (
        <div id="employee-div" className="container">
            <h2>Current Employees</h2>
            <div className="table">
                <MaterialTable columns={columns} data={data} title={false}/>
            </div>
        </div>
    )
}

export default EmployeeListPage;