import React from 'react'
import styles from "./NavStyles"
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/Home">Employee Directory</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/Home" style={styles.linkStyles}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AllEmployees" style={styles.linkStyles}>All</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Locations" style={styles.linkStyles}>Location</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Email" style={styles.linkStyles}>Email</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
