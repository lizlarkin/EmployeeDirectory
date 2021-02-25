import React from 'react'
import Card from './../Components/Card/Card';
import {Link} from 'react-router-dom'

const Home = () => {

    const styles = {
        btnStyles: {
            width: "100%",
            marginTop: "35px"
        }
    }
    return (
        <>
        <div>
            <Card title="Employee Directory"/>
        </div>
        <h3 style={{marginTop: "25px"}}>Select preferred method for sorting employees:</h3>
        <Link to="/AllEmployees">
        <button type="button" className="btn btn-light btn-lg btn-block" style={styles.btnStyles}>All Employees</button>
        </Link>

        <Link to="/Locations">
        <button type="button" className="btn btn-light btn-lg btn-block" style={styles.btnStyles}>Employee Locations</button>
        </Link>

         </>
    )
}

export default Home
