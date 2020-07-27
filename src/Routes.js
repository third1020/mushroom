import React ,{useState} from 'react';
import { Route, Switch } from 'react-router-dom';


// FREE
import HomePage from './pages/HomePage';
import Research from './pages/Research';
import Psylocybin from './pages/Psylocybin';
import Blog from './pages/Blog';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import About from './pages/About';
import SingleBlog from './pages/SingleBlog';
import Login from './pages/Login';
import {BrowserRouter as Router} from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import Admin from './Admin';

const Routes = () => {

    return (
      <Router>

      <Switch>
        <PublicRoutes exact path='/' >
          <HomePage/>
        </PublicRoutes>
        <PublicRoutes exact path='/Research' >
          <Research/>
        </PublicRoutes>
        <PublicRoutes exact path='/Blog' >
          <Blog/>
        </PublicRoutes>
        <PublicRoutes exact path='/Blog/:id' >
          <SingleBlog/>
        </PublicRoutes>
        <PublicRoutes exact path='/Contact'>
          <ContactPage/>
        </PublicRoutes>
        <PublicRoutes exact path='/Psylocybin'>
          <Psylocybin/>
        </PublicRoutes>
        <PublicRoutes exact path='/Team' >
          <TeamPage/>
        </PublicRoutes>
        <PublicRoutes exact path='/About' >
          <About/>
        </PublicRoutes>
        <PublicRoutes exact path='/admin' >
          <Login/>
        </PublicRoutes>
        {
          sessionStorage.getItem('Login') ?   <Admin/> : null
        }
     <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>

</Router>

    );
  }


export default Routes;
