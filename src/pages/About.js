
import React from "react";
import {  MDBRow,MDBTypography, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon,MDBContainer,MDBView,MDBMask,MDBAnimation,MDBBtn,MDBTimelineStep,MDBTimeline } from "mdbreact";
import HeaderAboutPage from '../assets/AboutPage.jpg'
import AboutPage from '../components/About/AboutPage'
import ScrollSpyPage from '../components/About/ScrollSpyPage'
import FeaturesPage from '../components/About/FeaturesPage'

const About = () => {
  return (
    <div>
      <div id='minimalistintro2' style={{paddingTop:"25px"}}>

        <MDBView src={HeaderAboutPage}>
          <MDBMask className='gradient'></MDBMask>{' '}
          <MDBContainer className='d-flex justify-content-center align-items-center px-md-3 px-sm-0' style={{
              height: '50vh',
              width: '100%'
            }}>
            <MDBRow>
              <MDBCol md='12' className='white-text text-center'>
                <MDBAnimation type='fadeInUp' delay='.3s' align="center">
                    <MDBTypography tag="h4" className="white-text font-weight-bold" variant="display-4">About Us{' '}</MDBTypography>
                </MDBAnimation>

              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
      <MDBContainer>
          <AboutPage/>

      </MDBContainer>
      <ScrollSpyPage/>
      <MDBContainer>
      <FeaturesPage/>
      </MDBContainer>
    </div>
  );
}

export default About;
