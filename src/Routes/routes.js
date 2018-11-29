import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../containers/Users/Login/Login";
import Signup from './../containers/Users/Signup/Signup';
import Dashboard from "./../containers/dashboard/dashboard";
import { Redirect } from 'react-router';
import Recipe from '../containers/Recipe/recipe';
import {PrivateRoute} from './PrivateRoute';



export default () => 

    <Switch>
      
    <PrivateRoute path="/" exact  component = {Dashboard}  />
    <PrivateRoute path="/signup" exact component = {Signup}  />
    <Route path="/Login" exact component = {Login}  />
    <PrivateRoute path="/dashboard" exact component = {Dashboard}  />
    <PrivateRoute path="/recipe" exact component = {Recipe}  />


    {/* <Route path="/dashboard" exact  render={() => (requireAuth() ? <Dashboard />: (<Redirect to="/" />)) } /> */}
  </Switch>;
 

  