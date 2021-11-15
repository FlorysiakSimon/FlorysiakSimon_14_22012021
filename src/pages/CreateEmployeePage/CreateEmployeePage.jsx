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
    const [startDate, setStartDate] = useState(String);
    const [birthDate, setBirthDate] = useState(String)
    const [state, setState] = useState(states[0].value)
    const [department,setDepartment] = useState(departments[0].value)
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

    const formValidate = (e) => {
        e.preventDefault();
        if(input.firstName.length < 2 ||!input.firstName.match(/^([a-zA-Z]+)$/) ){
            document.getElementById('first-name').focus() 
            document.getElementById('first-name').classList.add('error')
            return false
        }else{
            document.getElementById('first-name').classList.remove('error') 
        }

        if(input.lastName.length < 2 || !input.lastName.match(/^([a-zA-Z]+)$/)){
            document.getElementById('last-name').focus()
            document.getElementById('last-name').classList.add('error')
            return false
        }else{
            document.getElementById('last-name').classList.remove('error')
        }

        if(birthDate.length < 2){
            document.getElementById('birth-date').focus()
            document.getElementById('birth-date').classList.add('error')
            return false
        }else{
            document.getElementById('birth-date').classList.remove('error')
        }
        
        if(startDate.length < 2){
            document.getElementById('start-date').focus()
            document.getElementById('start-date').classList.add('error')
            return false
        }else{
            document.getElementById('start-date').classList.remove('error')
        }

        if(input.street.length < 2 || !input.street.match(/^([a-zA-Z]+)$/)){
            document.getElementById('street').focus()
            document.getElementById('street').classList.add('error')
            return false
        }else{
            document.getElementById('street').classList.remove('error')
        }

        if(input.city.length < 2 || !input.street.match(/^([a-zA-Z]+)$/)){
            document.getElementById('city').focus()
            document.getElementById('city').classList.add('error')
            return false
        }else{
            document.getElementById('city').classList.remove('error')
        }

        if(input.zipCode.length < 2 || !input.zipCode.match(/^[0-9]+$/)){
            document.getElementById('zip-code').focus()
            document.getElementById('zip-code').classList.add('error')
            return false
        }else{
            document.getElementById('zip-code').classList.remove('error')
        }
        
        saveEmployee();
    }
    //form submit
    const saveEmployee = () => {
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
             <h2 className="title">Create Employee</h2>
             <div className="container">
             
                <form noValidate={true} id="create-employee-form" >
                    <div className="input">
                        <label className="input-label" htmlFor="first-name">First Name</label>
                        <input required className="input-field" type="text" name="firstName" id="first-name" value={input.firstName} onChange={handleChange} />
                    </div>

                    <div className="input">
                        <label className="input-label" htmlFor="last-name">Last Name</label>
                        <input className="input-field" required type="text" name="lastName" id="last-name" value={input.lastName} onChange={handleChange}/>
                    </div>

                    <div className="input">
                        <label htmlFor="birth-date" className="input-label" type="text" >Date of Birth</label>
                        <DatePicker required className="input-field"  id="birth-date"  selected={birthDate} showYearDropdown  dateFormat="dd/MM/yyyy" onChange={(date) => setBirthDate(date) } />
                    </div>

                    <div className="input">
                        <label htmlFor="start-date" className="input-label" type="text" >Start Date</label>
                        <DatePicker  required className="input-field" id="start-date" selected={startDate} dateFormat="dd/MM/yyyy"  onChange={(date) => setStartDate(date) } />
                    </div>    

                    <div className="input">
                        <label className="input-label" htmlFor="street">Street</label>
                        <input className="input-field" required type="text" name="street" id="street" value={input.street} onChange={handleChange} />
                    </div>

                    <div className="input">
                        <label className="input-label" htmlFor="city">City</label>
                        <input className="input-field" required type="text" name="city" id="city" value={input.city} onChange={handleChange} />
                    </div>

                    <div className="input">
                        <label className="input-label" type="text" htmlFor="state">State</label>
                        <Select aria-label="state" styles={selectStyle} id="state" required options={states} placeholder={states[0].label} onChange={(e) => setState(e.value)}/>
                    </div>

                    <div className="input">
                        <label className="input-label" htmlFor="zip-code">Zip Code</label>
                        <input className="input-field" required type="number" name="zipCode" id="zip-code" value={input.zipCode} onChange={handleChange}/>
                    </div>

                    <div className="input"> 
                        <label required className="input-label" htmlFor="department">Department</label>
                        <Select aria-label="department" styles={selectStyle} options={departments} placeholder={departments[0].label} onChange={(e) => setDepartment(e.value)} />
                    </div>
                    
                    <button type="submit" className="btn" onClick={formValidate}>Save</button>
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
