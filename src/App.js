import React, {useState} from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon,
  MDBContainer,
  MDBFormInline

} from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';
import {ReactComponent as Logo} from './assets/logo.svg';
import Routes from './Routes';
import Footer from './components/HomePage/Footer';
import TopMenu from './components/TopMenu';

const App  = () => {
  const [collapsed , setcollapsed] = useState(false);

    const navStyle = {  boxShadow: 'none' };
    const overlay = (<div id='sidenav-overlay' style={{
        backgroundColor: 'transparent',
        paddingTop: '65px'
      }} />);


    return (<Router>
      <div className='flyout'>
        <TopMenu/>


        {collapsed && overlay}
        <main style={{overlay}}>
          <Routes/>
        </main>
        <Footer/>

      </div>
    </Router>);
  }


export default App;
