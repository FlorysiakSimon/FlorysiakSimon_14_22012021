import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="header">
                <Link to="/">
                   <h1>HRNet</h1> 
                </Link>
                <nav>
                    <Link to="/">Create Employee</Link>
                    <Link to="/list">Current Employees</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header