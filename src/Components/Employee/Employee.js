import React from 'react'

const Employee = ({users}) => {
 
    return (
        <div>
            <div className="card"> 
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{users.results[0].name.first} {users.results[0].name.last}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Location: {users.results[0].location.city}</li>
                    <li className="list-group-item">Email: {users.results[0].email}</li>
                    <li className="list-group-item">Phone: {users.results[0].phone}</li>
                </ul>
            </div>


        </div>
    )
}

export default Employee

