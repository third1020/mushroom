import React from 'react';
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


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Research' component={Research} />
        <Route exact path='/Blog' component={Blog} />
        <Route exact path='/Blog/:id' component={SingleBlog} />
        <Route exact path='/Contact' component={ContactPage} />
        <Route exact path='/Psylocybin' component={Psylocybin} />
        <Route exact path='/Team' component={TeamPage} />
        <Route exact path='/About' component={About} />

     <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
