import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import './App.css';

import Layout from './hoc/Layout/Layout';
import Aux from './hoc/Aux/Aux';

class App extends Component {
  
  render() {
    let routes = (
      <Switch>
        <Route path="/negocio" 
          render={() => (
            <Layout clientView={false} />
          )} />
        <Route path="/" exact 
          render={() => (
            <Layout clientView={true} />
          )} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Aux>
          {routes}
        </Aux>
      </div>
    );
  }
}

export default withRouter(App);
