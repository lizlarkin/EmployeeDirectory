import React, { Component } from 'react'
import API from '../utils/API';

export default class Locations extends Component {
    state = {
        search: "",
        nat: [],
        results: [],
        error: ""
      };

      componentDidMount() {
        API.getEmployeeByLocation()
          .then(res => this.setState({ nat: res.data.message }))
          .catch(err => console.log(err));
      }

      handleInputChange = event => {
        this.setState({ search: event.target.value });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        API.getDogsOfBreed(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };

      render() {
        return (
          <div>
            <button>US</button>
            <button>GB</button>
            <button>AU</button>
            <button>CH</button>
          </div>
        );
      }
}




// import React from 'react'
// import Card from './../Components/Card/Card';
// import Users from './../Components/Users/Users';
// import API from "../utils/API";

// const Locations = ({users}) => {



//     console.log({users})

//     return (
//         <div>
//             <Card title="Employee Locations"/>
//         </div>
//     )
// }

// export default Locations
