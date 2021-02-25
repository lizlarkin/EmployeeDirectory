import React, { Component } from 'react'
import Card from './../Components/Card/Card';
import axios from 'axios'


export default class Locations extends Component {
    state = {
        nat: "",
        data: [],
      };

      handleBtnClick = (e) => {
        console.log(e.target.value)
        this.setState({nat: e.target.value})
    
        axios.get("https://randomuser.me/api/?nat=" + this.state.nat)
        .then(res => this.setState({data: res.data.results}))
    
    }

    


      render() {
        return (
            <>
            <Card title="Employee Locations"/>
            <h3 style={{marginTop: "25px", marginBottom: "25px"}}>Select country to see employee information in selected region:</h3>
            <div style={{marginBottom: "35px"}}>
                <button style={{width: "150px", marginRight:"10px"}} className="btn btn-outline-primary" value="US" onClick={(e)=> this.handleBtnClick(e)}>United States</button>
                <button style={{width: "150px", marginRight:"10px"}} className="btn btn-outline-primary" value="GB" onClick={(e)=> this.handleBtnClick(e)}>Great Britain</button>
                <button style={{width: "150px", marginRight:"10px"}} className="btn btn-outline-primary" value="CA" onClick={(e)=> this.handleBtnClick(e)}>Canada</button>
                <button style={{width: "150px", marginRight:"10px"}} className="btn btn-outline-primary" value="DE" onClick={(e)=> this.handleBtnClick(e)}>Germany</button>
            </div>

            <div>
                {this.state.data.map(({login, name, email}) =>{
                    return(<li key={login.uuid}>{name.first} {name.last}: {email}</li>)
                }
                    
                )}
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
