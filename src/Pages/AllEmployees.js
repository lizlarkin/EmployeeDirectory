import React from 'react'
import Card from './../Components/Card/Card';
import Users from './../Components/Users/Users';

const AllEmployees = () => {

    // const [employees, setEmployees] = useState([])

    return (
        <>
        <div>
            <Card title="All Employees"/>
        </div>
        <Users />
        </>
    )
}

export default AllEmployees
