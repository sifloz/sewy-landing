import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import './App.css';

import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/negocio" component={Layout} />
        <Route path="/" exact component={Layout} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
