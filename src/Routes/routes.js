import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../containers/Users/Login/Login";
import Signup from './../containers/Users/Signup/Signup';
import Dashboard from "./../containers/dashboard/dashboard";
import Recipe from '../containers/Recipe/recipe';
import {PrivateRoute} from './PrivateRoute';
import Chat from './../containers/Chat/Chat';


export default () => 

    <Switch>
      
    <PrivateRoute path="/" exact  component = {Dashboard}  />
    <Route path="/signup" exact component = {Signup}  />
    <Route path="/Login" exact component = {Login}  />
    <PrivateRoute path="/dashboard" exact component = {Dashboard}  />
    <PrivateRoute path="/recipe" exact component = {Recipe}  />
    <PrivateRoute path="/chat" exact component = {Chat} />


    {/* <Route path="/dashboard" exact  render={() => (requireAuth() ? <Dashboard />: (<Redirect to="/" />)) } /> */}
  </Switch>;
 

  