import React ,{useEffect,useState} from 'react';
import {
  MDBSideNavLink,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBIcon,
  MDBRow,
  MDBBtn
} from 'mdbreact';
import LogoImg from './assets/LogoCompany.png';
import Logosm from './assets/logo-sm.png';

const SideNavigation = (props) => {
const [openNav,setopenNav] = useState(true);


function rSNL(to, text) {
  return (
    <MDBSideNavLink to={to} onClick={props.onLinkClick}>
      {text}
    </MDBSideNavLink>
  );
}

// useEffect(()=>{
//   var elmnt = document.getElementById("sidemenu");
//   alert(elmnt.clientWidth );
// },[])

    return (
      <div className='white-skin'>
        <MDBSideNav
          id="sidemenu"

          bg='https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg'
          breakWidth={100}
          slim fixed mask="rgba-blue-strong"
        >
        <li>
  <div className="logo-wrapper sn-ad-avatar-wrapper">
    <a href="/">
      <img alt="" src={Logosm} className="rounded-circle" />
      </a>
  </div>
</li>

          <MDBSideNavNav>
            <MDBSideNavCat name='Create' id='profile-cat' icon='user'>
              {rSNL('/CreateBlog', 'Create Blog')}
            </MDBSideNavCat>

            <MDBSideNavCat name='Tables' id='tables-cat' icon='table'>
              {rSNL('/tables/Blog', 'Blogs Manager')}
              {rSNL('/tables/SubScribe', 'Subscribers')}
              {rSNL('/tables/ContactUs', 'Contact us')}
              {rSNL('/tables/TableSignUp', 'Supporters')}
            </MDBSideNavCat>

          </MDBSideNavNav>
        </MDBSideNav>
      </div>
    );
  }


export default SideNavigation;
