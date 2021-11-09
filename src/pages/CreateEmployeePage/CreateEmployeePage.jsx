import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker"; // react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // react-datepicker css
import Select from 'react-select' // react-select
import { departments,states } from '../../data/data'; //react-select data
import {Modal} from 'r-modal-sf';
import './CreateEmployeePage.scss'


const CreateEmployeePage = ({addEmployee}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [startDate, setStartDate] = useState();
    const [birthDate, setBirthDate] = useState()
    const [state, setState] = useState()
    const [department,setDepartment] = useState()
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        street:"",
        city:"",
        zipCode:"",
    })

    const saveEmployee = () => {
        const form_result = {
            firstName: input.firstName,
            lastName: input.lastName,
            street: input.street,
            city: input.city,
            state: state,
            zipCode: input.zipCode,
            department: department
        }
        toggleModal();
        addEmployee(form_result)
        
        
    }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

 
    const handleChange = (evt) => {
        const value = evt.target.value;
        setInput({
            ...input,
            [evt.target.name]: value
        });
    }
    
    return (
        <div>
             <div className="container">
                <div className="title">
                    <h1>HRnet</h1>
                </div>
                <Link to="/list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form  id="create-employee-form">

                    <label htmlFor="first-name">First Name</label>
                    <input type="text" name="firstName" id="first-name" value={input.firstName} onChange={handleChange} />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" name="lastName" id="last-name" value={input.lastName} onChange={handleChange}/>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker selected={birthDate} showMonthDropdown showYearDropdown placeholderText={new Date().toLocaleDateString('en-US')} dateFormat="dd/MM/yyyy" onChange={(date) => setBirthDate(date) } />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker selected={startDate} dateFormat="dd/MM/yyyy" placeholderText={new Date().toLocaleDateString('en-US')} onChange={(date) => setStartDate(date) } />
                    
                    <label htmlFor="street">Street</label>
                    <input type="text" name="street" id="street" value={input.street} onChange={handleChange} />

                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" value={input.city} onChange={handleChange} />

                    <label type="text" htmlFor="state">State</label>
                    <Select options={states} defaultValue={states[0]} onChange={(e) => setState(e.value)}/>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input type="number" name="zipCode" id="zip-code" value={input.zipCode} onChange={handleChange}/>

                    <label htmlFor="department">Department</label>

                    <Select options={departments} defaultValue={departments[0]} onChange={(e) => setDepartment(e.value)} />
                </form>

                <button type="submit" className="saveButton" onClick={saveEmployee}>Save</button>
            </div>
            <Modal content="Employee created!" modalOpen={modalOpen} modalClose={toggleModal} />
        </div>
        
         
    )
}

export default CreateEmployeePage;
