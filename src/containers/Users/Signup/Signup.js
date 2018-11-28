
import React, { Component } from 'react';
import Services from './../../../Services/services';


class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",
            lastName : ""
        }

        this.services= new Services();

    }

handleChange(e){

    let name = [e.target.name];
    this.setState({
        [name] : e.target.value
    })


}

handleSubmit(){

    let response = this.services.signUp(this.state.name, this.state.lastName, this.state.email, this.state.password);
    response.then(data =>{
        console.log(data)
    })
}

    render() {
        return (
            <div className="Header">
                <div className="row">
                    <div className="col-sm-4 col-lg-4 col-md-4"></div>
                    <div className="form-group col-sm-4 col-lg-4 col-md-4">
                        <label>First Name</label>
                        <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.name}  className="form-control" name="name" aria-describedby="emailHelp" placeholder="Enter First Name" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4 col-lg-4 col-md-4"></div>

                    <div className="form-group col-sm-4 col-lg-4 col-md-4">
                        <label>Last Name</label>
                        <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.lastName}  className="form-control" name="lastName" id="lastName" placeholder="Enter Last Name" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4 col-lg-4 col-md-4"></div>

                    <div className="form-group col-sm-4 col-lg-4 col-md-4">
                        <label>Email</label>
                        <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.email} className="form-control" name="email" id="email" placeholder="Enter Email" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4 col-lg-4 col-md-4"></div>

                    <div className="form-group col-sm-4 col-lg-4 col-md-4">
                        <label>Password</label>
                        <input type="password" onChange={(e) => this.handleChange(e)} value={this.state.password} className="form-control" name="password" id="password" placeholder="Enter Password" />
                    </div>
                </div>

                <div className="form-check">
                    <button onClick={() => this.handleSubmit()} className="btn btn-primary" >Submit</button>
                </div>

            </div>
        );
    }
}

export default Book;