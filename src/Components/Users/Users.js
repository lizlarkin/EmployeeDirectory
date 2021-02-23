import React, { Component } from 'react'
import Employee from './../Employee/Employee';
import { useState } from 'react'
import axios from 'axios';

export default class Users extends Component {
    
    // Create state object to hold data from API
    state = {
        users: []
    }

    // Connect to API
      componentDidMount() {
        const url = 'https://randomuser.me/api/';
        const betterUrl = 'https://randomuser.me/api/?results=15';
        axios.get(url)
        .then((response) => {
          const users = response.data
          this.setState({users})
          console.log(users)
        })
    }

    render() {
        return (
          <Employee users={this.state.users} />
        )
      }
    }




// import React from 'react';


// class Users extends React.Component {
//   componentDidMount() {
//     const url = 'https://randomuser.me/api/?results=15';
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => console.log('Random User API Data:', data));
//   }
//   render() {
//     return <h3>Select preferred method for viewing employees:</h3>;
    
//   }
// }
// export default Users;




