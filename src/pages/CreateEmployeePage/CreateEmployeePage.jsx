import React, {useState} from 'react'
import DatePicker from "react-datepicker"; // react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // react-datepicker css
import Select from 'react-select' // react-select
import { departments,states } from '../../data/data'; //react-select data
import {Modal} from 'r-modal-sf';
import './CreateEmployeePage.scss'
import { customClose, selectStyle } from '../../data/customStyle';
/** Form to add an employee  
 * @param  {object} {addEmployee}
 */
const CreateEmployeePage = ({addEmployee}) => {
    //form input state
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

    //handle input state change
    const handleChange = (evt) => {
        const value = evt.target.value;
        setInput({
            ...input,
            [evt.target.name]: value
        });
    }
    //form submit
    const saveEmployee = (e) => {
        e.preventDefault();
        const form_data = {
            id: Math.floor(Math.random() * 100),
            firstName: input.firstName,
            lastName: input.lastName,
            startDate:startDate.toLocaleDateString('en-US'),
            department: department,
            dateOfBirth:birthDate.toLocaleDateString('en-US'),
            street: input.street,
            city: input.city,
            state: state,
            zipCode: input.zipCode
        }
        toggleModal();
        addEmployee(form_data)
    }

    //modal
    const [modalOpen, setModalOpen] = useState(false)

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };
    
    return (
        <div>
        
             <div className="container">
             <h2>Create Employee</h2>
                <form  id="create-employee-form" >
                    <div>
                    <div className="input">
                        <input required className="input-field" type="text" name="firstName" id="first-name" value={input.firstName} onChange={handleChange} />
                        <label className="input-label" htmlFor="first-name">First Name</label>
                    </div>

                    <div className="input">
                        <input className="input-field" required type="text" name="lastName" id="last-name" value={input.lastName} onChange={handleChange}/>
                        <label className="input-label" htmlFor="last-name">Last Name</label>
                    </div>

                    <div className="input">
                        <DatePicker required className="input-field"  selected={birthDate} showYearDropdown  dateFormat="dd/MM/yyyy" onChange={(date) => setBirthDate(date) } />
                        <label className="input-label" type="text" htmlFor="Date of Birth">Date of Birth</label>
                    </div>

                    <div className="input">
                        <DatePicker required className="input-field"  selected={startDate} dateFormat="dd/MM/yyyy"  onChange={(date) => setStartDate(date) } />
                        <label className="input-label" type="text" htmlFor="Start Date">Start Date</label>
                    </div>    
                    </div>

                    <div>
                    <div className="input">
                        <input className="input-field" required type="text" name="street" id="street" value={input.street} onChange={handleChange} />
                        <label className="input-label" htmlFor="street">Street</label>
                    </div>

                    <div className="input">
                        <input className="input-field" required type="text" name="city" id="city" value={input.city} onChange={handleChange} />
                        <label className="input-label" htmlFor="city">City</label>
                    </div>

                    <div className="input">
                        <Select styles={selectStyle} required options={states} defaultValue={states[0]} onChange={(e) => setState(e.value)}/>
                        <label className="input-label" type="text" htmlFor="state">State</label>

                    </div>

                    <div className="input">
                        <input className="input-field" required type="number" name="zipCode" id="zip-code" value={input.zipCode} onChange={handleChange}/>
                        <label className="input-label" htmlFor="zip-code">Zip Code</label>
                    </div>

                    <div className="input"> 
                        <Select styles={selectStyle} options={departments} defaultValue={departments[0]} onChange={(e) => setDepartment(e.value)} />
                        <label required className="input-label" htmlFor="department">Department</label>
                    </div>

                    <button type="button" className="saveButton" onClick={saveEmployee}>Save</button>
                    </div>
                </form>

            </div>
            <Modal style={customClose} content="Employee created!" modalOpen={modalOpen} modalClose={toggleModal}
            buttonContent={<div className="close-container">
                            <div className="leftright"></div>
                            <div className="rightleft"></div>
            </div>}/>
        </div>
        
         
    )
}

export default CreateEmployeePage;
