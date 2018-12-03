import React, { Component } from 'react'
import axios from 'axios';
let token = localStorage.getItem("token");
axios.defaults.headers.common = {'Authorization': token}


class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    URL(){
        return "http://localhost:3001/api/user/";
    }


    signUp(name, lastname, email, password) {
        let data ={
            name: name,
            lastname: lastname,
            email: email,
            password: password
        }
        console.log(" ULR =>", this.URL())
       return axios(this.URL() +'userSignup', {
            method: 'POST',
            data: data,
            headers: {
                // 'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    }

    
    async Login(email, password) {
        let data ={
            email: email,
            password: password
        }
        // console.log(" ULR =>", this.URL())
       
       const data_1 = await axios(this.URL() + 'userLogin', {
            method: 'POST',
            data: data,           
        });
        return data_1;
    }

    async postRecipe(name, steps, userID) {

        let data ={
            name: name,
            steps: steps,
            userID: userID
        }
        // console.log(" ULR =>", this.URL())
       const data_1 = await axios(this.URL() + 'postRecipe', {
            method: 'POST',
            data: data,
        });
        return data_1;
    }

    getAllRecipe(){
        return axios(this.URL() + "getAllRecipe");
    }

  



    render() {
        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}

export default Services;