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

            </>
        );
      }
}

