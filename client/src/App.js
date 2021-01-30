import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import ContactUs from "./components/pages/ContactUs";
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Services from "./components/pages/Services";

import Alerts from './components/layout/Alerts';
import Booking from "./components/pages/Booking";

import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/aboutus" component={ContactUs} />
                  <Route exact path="/services" component={Services} />
                  <PrivateRoute exact path="/booking" component={Booking} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
         
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
