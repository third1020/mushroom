import React, {useState,useEffect} from 'react';
import {
  MDBNavbar,
  MDBNavItem,
  MDBNavbarNav,
  MDBNavLink,
  MDBIcon,
  MDBContainer,
  MDBCollapse,
  MDBNavbarBrand,
  MDBNavbarToggler
} from 'mdbreact';
import LogoImg from '../assets/LogoCompany.png';
import './Topmenu.css';

const TopMenu = () => {
  const [collapsed, setcollapsed] = useState(false);
  const [checkcollapsed, setcheckcollapsed] = useState(true);

  const navStyle = {
    boxShadow: 'none'
  };

  const ChangeToggle = () => {
    setcollapsed(!collapsed);
  }

  useEffect(()=> {
    window.onscroll = function() {
      if(window.pageYOffset === 0) {
        setcheckcollapsed(true);
      }else{
        setcheckcollapsed(false);
      }
    };

  },[])

  return (<MDBNavbar color='grey lighten-2' style={navStyle} dark="dark" expand='md' fixed='top' scrolling="scrolling" transparent="transparent">
    <MDBContainer>

      {
        checkcollapsed
          ? <MDBNavbarBrand>
              <img id="hideLogo" src={LogoImg} height="100" alt=""/>
            </MDBNavbarBrand>
          : null
      }

      <MDBNavbarToggler onClick={ChangeToggle}/>
      <MDBCollapse isOpen={collapsed} navbar="navbar">

        <MDBNavbarNav right="right">
          <MDBNavItem >
            <MDBNavLink className='' style={checkcollapsed ? { color:"white",fontWeight:"500" } : {color:"black"}} onClick={() => setcollapsed(false)} to='/'>Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className='' style={checkcollapsed ? { color:"white",fontWeight:"500" } : {color:"black"}} onClick={() => setcollapsed(false)} to='About'>About</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className='' style={checkcollapsed ? { color:"white",fontWeight:"500" } : {color:"black"}} onClick={() => setcollapsed(false)} to='Team'>Team</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className='' style={checkcollapsed ? { color:"white",fontWeight:"500" } : {color:"black"}} onClick={() => setcollapsed(false)} to='/Research'>Research</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className='' style={checkcollapsed ? { color:"white",fontWeight:"500" } : {color:"black"}} onClick={() => setcollapsed(false)} to='/Blog'>Blog</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className='' style={checkcollapsed ? { color:"white",fontWeight:"500" } : {color:"black"}} onClick={() => setcollapsed(false)} to='Contact'>Contact us</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='#!'><MDBIcon fab="fab"  style={checkcollapsed ? {color:"white"} : { color:"blue",fontWeight:"500" }} icon="facebook-square"/></MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to='#!'><MDBIcon fab="fab"  style={checkcollapsed ? {color:"white"} : { color:"pink",fontWeight:"500" }} icon="instagram"/></MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>);
};

export default TopMenu;
