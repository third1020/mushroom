import React ,{useState} from 'react'
import {Route, useParams, useLocation, useHistory} from 'react-router-dom'
import Footer from './components/HomePage/Footer';
import TopMenu from './components/TopMenu';
const PublicRoutes = ({children}) => {
  const [collapsed , setcollapsed] = useState(false);

    const navStyle = {  boxShadow: 'none' };
    const overlay = (<div id='sidenav-overlay' style={{
        backgroundColor: 'transparent',
        paddingTop: '65px'
      }} />);


  return <Route >
    <TopMenu/>
    {collapsed && overlay}
    <main style={{overlay}}>
  <div><TopMenu/>{children}   </div>
  </main>
  <Footer/>
  </Route>

}

export default PublicRoutes
