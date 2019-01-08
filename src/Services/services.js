import React, { Component } from 'react'
// let token = localStorage.getItem(s"token");
// axios.defaults.headers.common = {'Authorization': token}


class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    URL(){
        return "http://localhost:3001/api/user/";
    }


   async signUp(name, lastname, email, password) {
        let data ={
            name: name,
            lastname: lastname,
            email: email,
            password: password
        }
        console.log(" ULR =>", this.URL())
       const data1 = await fetch(this.URL() +'userSignup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                // 'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
        return data1;
    }

    
    async Login(email, password) {
        let data ={
            email: email,
            password: password
        }
        // console.log(" ULR =>", this.URL())
       
       const data_1 = await fetch(this.URL() + 'userLogin', {
            method: 'POST',
            body: JSON.stringify(data),           
        }).then(res => res.json());;
        return data_1;
    }

    async postRecipe(name, steps) {
        console.log("steps", steps)
let token = localStorage.getItem('token');
        let data ={
            name: name,
            steps: steps
        }
        // console.log(" ULR =>", this.URL())
       const data_1 = await fetch(this.URL() + 'postRecipe', {
            method: 'POST',
            body:  JSON.stringify(data),
            headers: {
                'Authorization': token,
                'X-FP-API-KEY': 'iphone',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());

        return data_1;
    }

    getAllRecipe(){
        return fetch(this.URL() + "getAllRecipe").then(res => res.json());
    }

 async delRecipe(id){

 const data_1 = await fetch(this.URL() + 'delRecipe/'+ id, {
            method: 'DELETE',
            headers:{
                'content-type': 'application/json'
            },
        }).then(res => res.json());
        return data_1;
    }

  



    render() {
        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}

export default Services;