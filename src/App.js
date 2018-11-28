import React, { Component, lazy, Suspense } from 'react';

import './App.css';
import Routes  from './Routes/routes';

// import User from './containers/Users/User';
// const User  = lazy(() => import('./containers/Users/User'));

class App extends Component {
    constructor(props) {
      super(props);
      this.state = { 
       }
    }
    
   
  render() {
    return (
      <React.Fragment>
        
      <Routes />
      </React.Fragment>
    
      
     
    );
  }
}

export default App;
