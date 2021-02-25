import React, { Component } from 'react'
import API from '../utils/API';

export default class Locations extends Component {
    state = {
        search: "",
        nat: [],
        results: [],
        error: ""
      };

      handleBtnClick = (e) => {
          console.log(e.target.value)
          this.setState({nat: e.target.value})
      }

      componentDidMount() {
        API.getEmployeeByLocation()
          .then(res => this.setState({ nat: res.data.message }))
          .catch(err => console.log(err));
      }

      render() {
        return (
            <>
            <div>
                <button value="US" onClick={(e)=> this.handleBtnClick(e)}>United States</button>
                <button value="GB" onClick={(e)=> this.handleBtnClick(e)}>Great Britain</button>
                <button value="CA" onClick={(e)=> this.handleBtnClick(e)}>Canada</button>
                <button value="DE" onClick={(e)=> this.handleBtnClick(e)}>Germany</button>
            </div>

            {/* <div className = "row">
            <div className = 'col-sm-4'></div>
            <div className="card col-sm-4"> 
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
        </div> */}

</>
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
