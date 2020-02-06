import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

import { routes } from './routes';

// setup fake backend
import { configureBackend } from './helpers';
import { isUserAuthenticated } from './helpers/authUtils';
import { createBrowserHistory } from "history";

// Themes
import './assets/scss/DefaultTheme.scss';


// Lazy loading and code splitting - 
// Derieved idea from https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const loading = () => <div></div>

// All layouts/containers
const NonAuthLayout = Loadable({
  loader: () => import('./components/NonAuthLayout'),
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  },
  loading
});

const AuthLayout = Loadable({
  loader: () => import('./components/AuthLayout'),
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  },
  loading
});

// configure fake backend
configureBackend();

/**
 * Exports the component with layout wrapped to it
 * @param {} WrappedComponent 
 */
const withLayout = (WrappedComponent) => {
  const HOC = class extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return connect()(HOC);
}

const customHistory = createBrowserHistory();

/**
 * Main app component
 */
class App extends Component {
  /**
 * Returns the layout component based on different properties
 * @param {*} props 
 */
  getLayout = () => {
    return isUserAuthenticated() ? AuthLayout : NonAuthLayout;
  }

  render() {
    return (
      // rendering the router with layout
      <Router history={customHistory}>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                roles={route.roles}
                component={withLayout(props => {
                  const Layout = this.getLayout();
                  return (
                    <Suspense fallback={loading()}>
                      <Layout {...props}>
                        <route.component {...props} />
                      </Layout>
                    </Suspense>
                  );
                })}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.Auth.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(App);