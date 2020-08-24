import React from 'react';
import { Route, Switch } from 'react-router-dom';


import CreateBlog from './profile/Blog/CreateBlog';
import EditBlog from './profile/Blog/EditBlog';


import TableBlog from './tables/TableBlog';
import TableSubScribe from './tables/TableSubScribe';
import TableContactUs from './tables/TableContactUs';
import TableSignUp from './tables/TableSignUp';


const fourtOFour = () => <h1 className="text-center">404</h1>

class RoutesAdmin extends React.Component {
  render() {
    return (
      <Switch>

        <Route path='/dashboard' exact component={CreateBlog} />
        <Route path='/CreateBlog' exact component={CreateBlog} />
        <Route path='/EditBlog/:id' exact component={EditBlog} />


        <Route path='/tables/Blog' exact component={TableBlog} />
        <Route path='/tables/SubScribe' exact component={TableSubScribe} />
        <Route path='/tables/ContactUs' exact component={TableContactUs} />
        <Route path='/tables/TableSignUp' exact component={TableSignUp} />


        <Route component={fourtOFour} />
      </Switch>
    );
  }
}

export default RoutesAdmin;
