import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Employee Directory</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AllEmployees">All</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Locations">Location</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Email">Email</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
