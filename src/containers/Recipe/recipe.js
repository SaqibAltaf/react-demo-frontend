import React, { Component } from 'react';
import './recipe.css';
import Services from './../../Services/services';


class Recipe extends Component {
    constructor(props) {
        super(props);
        this.services = new Services();
        this.state = {
            name: "",
            steps: []
        }
    }

    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name] : e.target.value
        })
    }

    handleSubmit(){
       this.services.postRecipe(this.state.name, this.state.steps).then(data=>{
           console.log(data)
       });

    }

    addRecipe(event){
        var that = this;
        if(event.key === "Enter" && event.target.value !=""){
            let steps = this.state.steps;
            steps.push(event.target.value);
            that.setState({
                steps
            })
        }
    }

    remove = (key) => {
        let array = this.state.steps;
        array.splice(key, 1);
        this.setState({
            array
        })
    }

    render() {
        return (
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="well well-sm">
                                    <fieldset>
                                        <legend className="text-center header">Post Recipe</legend>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                            <div className="col-md-8">
                                                <input id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder="Name" className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                            <div className="col-md-8">
                                                <input id="steps" name="steps" onKeyPress={this.addRecipe.bind(this)} type="text" placeholder="Recipe Steps" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-sm-4 col-lg-4 col-md-4">
                                        </div>
                                        <div className="col-sm-4 col-lg-4 col-md-4">
                                        <div className="clearfix"></div>
                                        {this.state.steps.length > 0 ? 
                                            <div className="steps">
                                            {this.state.steps.map((data, key) => {
                                                return(
                                                    <React.Fragment key={key}>
                                                        <div className="clearfix"></div>
                                                        <li key={key}>
                                                            <button  className="btn btn-primary btn-text" onClick={() => this.remove(key)} >X</button>
                                                            {data} </li>
                                                    </React.Fragment>
                                                )
                                            })}
                                            </div>
                                            : ""}
                                        </div>
                                        <div className="col-sm-4 col-lg-4 col-md-4">
                                        </div>

                                        </div>
                                        
                                        <div className="form-group">
                                            <div className="col-md-12 text-center">
                                                <button onClick={this.handleSubmit.bind(this)} className="btn btn-primary btn-lg">Submit</button>
                                            </div>
                                        </div>
                                    </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipe;