import React, { Component } from 'react'
import './Login.css';
import Services from './../../../Services/services';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", 
            password : "",
            loginCheck: false
        }
        this.services = new Services();
    }


    handleChange(e){
        let name =  e.target.id;
        this.setState({
            [name] : e.target.value
        })
    }

    login(){
        let response = this.services.Login(this.state.email, this.state.password);
     response.then(data => {
         if(data.data.token){
            localStorage.setItem("token", data.data.token);
           this.props.history.push('/dashboard')
         }else{
            this.setState({
                loginCheck: false
            })
         }
     }).catch((err) => {    
        console.log(err)
     })
    }
    render() {
       
          
        return (
            <div className="Header">
                <div className="row">
                    <div className="col-sm-4 col-lg-4 col-md-4"></div>
                    <div className="form-group col-sm-4 col-lg-4 col-md-4">
                        <label>Email address</label>
                        <input type="text" className="form-control" value={this.state.email} id="email" onChange={this.handleChange.bind(this)} aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4 col-lg-4 col-md-4"></div>

                    <div className="form-group col-sm-4 col-lg-4 col-md-4">
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange.bind(this)} name="password" id="password" placeholder="Password" />
                    </div>
                </div>

                <div className="form-check">
                    <button className="btn btn-info" type="button" name="showpassword" id="showpassword" value="Show Password">Show password</button>
                    <button onClick={() => this.login()} className="btn btn-primary">Submit</button>
                </div>

            </div>

        );
    }
}

export default Login;
