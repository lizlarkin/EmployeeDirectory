import React from 'react'
import styles from "./EmployeeStyles"

const Employee = ({users}) => {

    // Convert object to array
    // const employeeArr = Object.entries(users)
    // console.log(employeeArr)

    return (

        <>

        <div className = "row">
            <div className = 'col-sm-4'></div>
            <div className="card col-sm-4" style={styles.employeeStyles}> 
                <img src={users.results[0].picture.large} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{users.results[0].name.first} {users.results[0].name.last}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Location: {users.results[0].location.city}, {users.results[0].location.country}</li>
                    <li className="list-group-item">Email: {users.results[0].email}</li>
                    <li className="list-group-item">Phone: {users.results[0].phone}</li>
                </ul>
            </div>
            <div className = 'col-sm-4'></div>
        </div>

        <div className = "row">
            <div className = 'col-sm-4'></div>
            <div className="card col-sm-4" style={styles.employeeStyles}> 
                <img src={users.results[1].picture.large} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{users.results[1].name.first} {users.results[1].name.last}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Location: {users.results[1].location.city}, {users.results[1].location.country}</li>
                    <li className="list-group-item">Email: {users.results[1].email}</li>
                    <li className="list-group-item">Phone: {users.results[1].phone}</li>
                </ul>
            </div>
            <div className = 'col-sm-4'></div>
        </div>

        </>



            


        
    )
}

export default Employee

