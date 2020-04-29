import React from 'react';
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,
  MDBView,
  MDBBtn,
  MDBMask,
  MDBInput,
  MDBFooter,
  MDBTypography
} from 'mdbreact';
import './HomePage.css';
import OurTeam from '../components/HomePage/OurTeam';
import ContactUs from '../components/HomePage/ContactUs';
import CardAnimation from '../components/HomePage/CardAnimation';
import AboutUs from '../components/HomePage/AboutUs';
import Service from '../components/HomePage/Service';
import CountUnlockDrag from '../components/HomePage/CountUnlockDrag';
import Psylocybin101 from '../components/HomePage/Psylocybin101';
import Blog from '../components/HomePage/Blog';
import OurResearch from '../components/HomePage/OurResearch';


import landingImg from '../assets/LandingPage.jpg';

const HomePage = () => {
  const scrollToTop = () => window.scrollTo(0, 0)

  return (<> < div id = 'minimalistintro' > <MDBView src={landingImg}>
    <MDBMask className='rgba-black-light'/>
    <MDBContainer className='d-flex justify-content-center align-items-center' style={{
        height: '100%',
        width: '100%',
        paddingTop: '15rem'
      }}>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-left mt-5 mb-5'>
          <MDBAnimation type='fadeInLeft' delay='.3s'>
            <MDBTypography tag='h1' variant="h1-responsive" className='text-white'>We bringing evidence-based methods of enhancing mental health to the world</MDBTypography>
          </MDBAnimation>
        </MDBCol>


      </MDBRow>
    </MDBContainer>
  </MDBView> < /div>


<MDBContainer>
  <AboutUs/ >
  </MDBContainer>

  <Psylocybin101/>
  <OurResearch/>
  <Blog/>



{/**<div className='mt-5 mb-5' style={{
      paddingTop: "50px"
    }}> <CardAnimation /> </div>

<MDBContainer className='mt-5 mb-5' style={{
      paddingTop: "100px"
    }}>
  <Service/> </MDBContainer>

<MDBContainer  className='mt-5 mb-5' style={{paddingTop:"100px"}}>
  <OurTeam/ > </MDBContainer>**/}

<div id='minimalistintro2'> < CountUnlockDrag /> </div>

<div style={{
      paddingTop: "10px"
    }}>
  <MDBContainer>
    <ContactUs/>
  </MDBContainer> < /div>


</ >);
}

export default HomePage;
