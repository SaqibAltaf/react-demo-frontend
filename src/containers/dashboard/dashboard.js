import React, { Component } from 'react';
import Service from './../../Services/services';
import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginCheck: false,
            recipe: []
        }
        this.services = new Service();
    }

    logout() {
        localStorage.clear();
        this.props.history.push('/Login')
    }
    postRecipe() {
        console.log("recipe")
        this.props.history.push("/recipe");
    }

    getAllRecipe() {
        this.services.getAllRecipe().then(res => {
            console.log(res.data)
            if (res.data.code === 200) {
                this.setState({
                    recipe: res.data.data
                })
            }

        })
    }

    componentDidMount() {
        this.getAllRecipe();
    }
    postedBy(id){
        this.services.postedBy(id);
    }
    render() {
        let data = this.state.recipe.map((val, key) => {
            return <li key={key}>{val.recipeSteps}</li>
        })

        return (
            <div className="container">
                <button className="btn btn-primary pull-right" style={{ marginTop: "30px" }} onClick={this.logout.bind(this)} >
                    Logout
            </button>
                <h1> Dashboard</h1>
                <div className="body">
                    <button className="btn btn-success" onClick={() => this.postRecipe()}>Post Recipe</button>
                </div>
                {
                    this.state.recipe.length > 0 ?
                        <div className="row">
                            {this.state.recipe.map((val, key) => {
                                return (
                                    <div className="col-sm-5 col-lg-5 col-md-5 col-12 recipe" key={key}>
                                        <div className="row" >
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <h2>Recipe</h2>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <h3>{val.name}</h3>
                                            </div>
                                        </div>
                                        <div className="row" >
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <h2>Posted By</h2>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <h3>{val.User[0].name+val.User[0].lastname}</h3>
                                            </div>
                                        </div>
                                        <h3>Recipe Steps </h3>
                                        {val.recipeSteps.map((val, key) => {
                                            return (
                                                <li key={key}>{val}</li>
                                            )
                                        })}

                                    </div>
                                )
                            })}
                        </div> : <div className="noEntry">No Record Found</div>
                }

            </div>
        );
    }
}

export default Dashboard;