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

    return (<Routes/>);
  }


export default App;
