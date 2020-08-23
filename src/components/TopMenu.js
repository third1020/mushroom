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
import './Topmenu.scss';
import IconHeader from './IconHeader';
import {
  useHistory
} from 'react-router-dom'

const TopMenu = () => {
  const [collapsed, setcollapsed] = useState(false);
  const [checkcollapsed, setcheckcollapsed] = useState(true);
  let history = useHistory();

  const navStyle = {
    boxShadow: 'none',
    color: "#fff",
    backgroundColor: "#fff"
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

  return (<MDBNavbar style={navStyle} dark="dark" expand='md' fixed='top' >
  <div className="container">


    <MDBNavbarBrand>
      <IconHeader/>



            </MDBNavbarBrand>

      <MDBNavbarToggler onClick={ChangeToggle} image={ collapsed ? "https://image.flaticon.com/icons/svg/148/148777.svg" : "https://image.flaticon.com/icons/svg/747/747822.svg"} />
      <MDBCollapse isOpen={collapsed} navbar="navbar">

        <MDBNavbarNav right="right">
          <MDBNavItem >
            <MDBNavLink className={window.location.pathname === '/' ? 'effect-underline-active' : "effect-underline"} style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"} } onClick={() => setcollapsed(false)} to='/'>หน้าแรก</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className={window.location.pathname === '/About' ? 'effect-underline-active' : "effect-underline"} style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"} } onClick={() => setcollapsed(false)} to='/About'>เกี่ยวกับเรา</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className={window.location.pathname === '/Psylocybin' ? 'effect-underline-active' : "effect-underline"} style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"} } onClick={() => setcollapsed(false)} to='/Psylocybin'>สารไซโลไซบิน</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className={window.location.pathname === '/Research' ? 'effect-underline-active' : "effect-underline"} style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"} }  onClick={() => setcollapsed(false)} to='/Research'>งานวิจัย</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className={window.location.pathname === '/Blog' ? 'effect-underline-active' : "effect-underline"} style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"}  } onClick={() => setcollapsed(false)} to='/Blog'>ข่าวสาร</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className={window.location.pathname === '/Contact' ? 'effect-underline-active' : "effect-underline"} style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"}  } onClick={() => setcollapsed(false)} to='/Contact'>ติดต่อเรา</MDBNavLink>
          </MDBNavItem>

          {
            window.innerWidth > 768 ? <a onClick={()=>{
              history.push('/Contact');
              window.scrollTo(0,0);
            }} class="btn-mix-noborder" data-text="ลงชื่อสนับสนุน">ลงชื่อสนับสนุน</a> :
            <MDBNavItem>
              <MDBNavLink className='effect-underline' style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"}  } onClick={() => setcollapsed(false)} to='/Contact'>ลงชื่อสนับสนุน</MDBNavLink>
            </MDBNavItem>
          }

        </MDBNavbarNav>
      </MDBCollapse>
      </div>

  </MDBNavbar>);
};

export default TopMenu;
