import React from 'react';
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

class SideNavigation extends React.Component {
  state = {
    isOpen: true
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  rSNL(to, text) {
    return (
      <MDBSideNavLink to={to} onClick={this.props.onLinkClick}>
        {text}
      </MDBSideNavLink>
    );
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className='white-skin'>

        <MDBSideNav
          href="/"
          logo={LogoImg}
          bg='https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg'
          openNav
          breakWidth={100}
          slim fixed mask="rgba-blue-strong" triggerOpening={isOpen}
        >
          <MDBSideNavNav>
            <MDBSideNavCat name='Create' id='profile-cat' icon='user'>
              {this.rSNL('/CreateBlog', 'Create Blog')}
            </MDBSideNavCat>

            <MDBSideNavCat name='Tables' id='tables-cat' icon='table'>
              {this.rSNL('/tables/Blog', 'Blog')}
              {this.rSNL('/tables/SubScribe', 'Subscribe')}
              {this.rSNL('/tables/ContactUs', 'Contact us')}
            </MDBSideNavCat>

          </MDBSideNavNav>
        </MDBSideNav>
      </div>
    );
  }
}

export default SideNavigation;
