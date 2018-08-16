import React, {Component} from 'react';
import './Login.css';

export default class Login extends Component{
    constructor(){
        super();
        this.state ={
            email:'',
            password : ''
        }

    }

    


    handleSubmit(e){
        e.preventDefault();
        this.setState({email:this.refs.email.value, password:this.refs.password.value})   
             
    }

    render(){
        return (
            <div className="container-fluid mainDiv">
                <div className="login">
                    <div className="container">
                    <form onSubmit = {this.handleSubmit.bind(this)} noValidate>
                    <div className="form-group">
                        <label className="labelClr" htmlFor="email">Email address:</label>
                        <input type="email" name="email" ref="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label className="labelClr" htmlFor="pwd">Password:</label>
                        <input type="password" name="password" ref="password" className="form-control" id="pwd" />
                    </div>
        
                    <div className="form-group form-check">
                        <label className="labelClr form-check-label" >
                            <input className="form-check-input labelClr" type="checkbox"  /> Remember me
                        </label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form> 
                    </div>
                </div>
            </div>
        );
    }
}
