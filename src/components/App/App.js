import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import  SideNavMenu from '../SideNav/SideNav';
import Builds from '../Builds/Builds';
import Inspiration from '../Inspiration/Inspiration';
import AddBuild  from '../AddBuild/AddBuild';
import Details from '../Details/Details';
import Components from '../Components/Components';
import ClickCPU from '../ClickCPU/ClickCPU';
import ClickGPU from '../ClickGPU/ClickGPU';
import ClickPSU from '../ClickPSU/ClickPSU';
import ClickMOBO from '../ClickMOBO/ClickMOBO';
import ClickRAM from '../ClickRAM/ClickRAM';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            <Route
              exact
              path="/inspiration"
              component={Inspiration}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={Builds}
            />
            <ProtectedRoute
              exact
              path="/Components"
              component={Components}
            />
            <ProtectedRoute
              exact
              path="/AddBuild"
              component={AddBuild}
            />
            <ProtectedRoute
              exact
              path="/Details/:id"
              component={Details}
            />
            <ProtectedRoute
              exact
              path="/ClickCPU"
              component={ClickCPU}
            />
            <ProtectedRoute
              exact
              path="/ClickGPU"
              component={ClickGPU}
            />
            <ProtectedRoute
              exact
              path="/ClickPSU"
              component={ClickPSU}
            />
            <ProtectedRoute
              exact
              path="/ClickMOBO"
              component={ClickMOBO}
            />
            <ProtectedRoute
              exact
              path="/ClickRAM"
              component={ClickRAM}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/builds"
              component={Builds}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
