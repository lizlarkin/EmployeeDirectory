import { useEffect, useState } from "react";

import React from 'react'
import Employee from "../Employee/Employee";

const Users = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setUsers(data);
        console.log(data)
      })
  }, [])

  return (
    <div className="home">
      {users && <Employee users={users} />}
    </div>
  );
}

export default Users




// import React, { Component } from 'react'
// import Employee from './../Employee/Employee';
// import { useState } from 'react'
// import axios from 'axios';

// export default class Users extends Component {
    
//     // Create state object to hold data from API
//     state = {
//         users: []
//     }

//     // Connect to API
//       componentDidMount() {
//         const url = 'https://randomuser.me/api/';
//         const betterUrl = 'https://randomuser.me/api/?results=15';
//         axios.get(url)
//         .then((response) => {
//           const users = response.data
//           this.setState({users})
//           // setInterval(this.setState, 5000); // runs every 5 seconds.
//           console.log(users)
//         })
//     }

//     render() {
//         return (
//           <Employee users={this.state.users} />
//         )
//       }
//     }





