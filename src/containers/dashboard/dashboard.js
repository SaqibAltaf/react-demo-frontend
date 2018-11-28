import React, { Component } from 'react';

import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginCheck : false
         }
    }

    logout(){
        localStorage.clear();
        this.props.history.push('/Login')
    }
    render() { 
        



        return (
            <div className="container">
             <button className="btn btn-primary pull-right" style={{marginTop: "30px"}}  onClick= {this.logout.bind(this)} >
                Logout
            </button>
            <h1> Dashboard</h1>

           
            </div>
          );
    }
}
 
export default Dashboard;